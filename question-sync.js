'use strict';

function createQuestionSync(config) {
  const client = supabase.createClient(config.url, config.publishableKey, {
    auth: { storageKey: 'kt-present-editor-v1', flowType: 'pkce' }
  });
  const bank = () => client.from('kt_question_bank');

  return {
    ownerId: config.ownerId,
    auth: client.auth,
    async read() {
      const { data, error } = await bank()
        .select('questions,revision').eq('id', 1).single();
      if (error) throw error;
      return data;
    },
    async write(questions, revision) {
      const { data, error } = await bank()
        .update({ questions, revision: revision + 1 })
        .eq('id', 1).eq('revision', revision)
        .select('questions,revision').maybeSingle();
      if (error) throw error;
      return data;
    }
  };
}
