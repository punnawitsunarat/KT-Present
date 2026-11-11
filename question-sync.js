'use strict';

function createQuestionSync(config) {
  const client = supabase.createClient(config.url, config.publishableKey, {
    auth: { persistSession: false, detectSessionInUrl: false, autoRefreshToken: false }
  });
  const bank = () => client.from('kt_question_bank');

  return {
    async checkEditLink(key) {
      const { error } = await client.rpc('kt_edit_question_bank', { p_edit_key: key });
      if (error) throw error;
    },
    async read() {
      const { data, error } = await bank()
        .select('questions,revision').eq('id', 1).single();
      if (error) throw error;
      return data;
    },
    async write(questions, revision, key) {
      const { data, error } = await client.rpc('kt_edit_question_bank', {
        p_edit_key: key,
        p_expected_revision: revision,
        p_questions: questions
      }).maybeSingle();
      if (error) throw error;
      return data;
    }
  };
}
