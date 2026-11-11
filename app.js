'use strict';
const slides=[['หน้าปก','Cover'],['หน้า 1 · Overview','Overview'],['หน้า 2 · Introduction','Introduction'],['หน้า 3 · Methods','Methods'],['หน้า 4 · Bench-scale','Bench-scale'],['หน้า 5 · Rate constant k','Rate k'],['หน้า 6 · Pilot-scale','Pilot-scale'],['หน้า 7 · Indicators','Indicators'],['หน้า 8 · Indicators 0.05%','0.05% NaOH'],['หน้า 9 · Indicators 0.5%','0.5% NaOH'],['หน้า 10 · Conclusion','Conclusion'],['หน้า 11 · Reference','Reference'],['Thank You','Thank You']];
// Prepared answers supplied by the presenter. Notes are separate from answer text.
let questions=[
{s:0,q:'ทำไมเลือกเปเปอร์นี้?',a:'At Nestlé, dairy and beverage lines use CIP every day. This paper shows how to reuse cleaning solution safely to save water, chemicals, and cost.'},
{s:2,q:'ทำไมการดูสีหรือกลิ่นถึงเป็นปัญหา?',a:'Because color and smell are subjective—different workers might judge it differently. So we need a clear number from a sensor instead.'},
{s:3,q:'ทำไมใช้ที่ 45 องศาเซลเซียส และทำไมต้องเก็บน้ำยาไว้ 24 ชม. ก่อนใช้ซ้ำ?',a:'45 °C is the standard temperature for this commercial detergent. They stored it for 24 hours to copy real factories that clean once a day.'},
{s:3,q:'เขาสร้างคราบนมขึ้นมาทดลองยังไง?',a:'They put skim milk on stainless steel and baked it at 75 °C so it sticks like real factory fouling.'},
{s:4,q:'RF (%) ที่แกน Y คืออะไร?',a:'RF stands for Residual Film. It is the percentage of milk protein left on the steel. Lower means cleaner.'},
{s:4,q:'ทำไมคราบถึงพุ่งสูงขึ้นมากในครั้งที่ 4 และ 5?',a:"Because the NaOH kept reacting with the old milk protein, so there wasn't enough active chemical left to clean well."},
{s:5,q:'ค่า k คืออะไร และตัวอักษร a กับ b หมายถึงอะไร?',a:"k shows how fast the solution cleans. The same letter 'a' means uses 1 to 3 have the same cleaning speed. Letter 'b' means it gets significantly slower on uses 4 and 5.",n:'เวลาตอบเชิงสถิติ ใช้ “not significantly different” แทนการบอกว่าความเร็วเท่ากันทุกประการ'},
{s:6,q:'ทำไม 0.05% NaOH ในหน้านี้ใช้ได้ตั้ง 6 รอบ ทั้งที่หน้าเมื่อกี้ได้แค่ 3 รอบ?',a:'Two reasons. The pilot pipe had 100 times less protein to start with, and the fast pipe flow washed the dirt away much better than a beaker.'},
{s:6,q:'Nd ย่อมาจากอะไร และได้ตรวจเชื้อแบคทีเรียไหม?',a:'Nd means Not Detected—no protein was found. No, they only checked protein and chemicals, not bacteria.',n:'Not detected หมายถึงตรวจไม่พบด้วยวิธีที่ใช้ ไม่ได้ยืนยันว่าไม่มีโปรตีนเหลืออยู่เลย'},
{s:8,related:[9],q:'ทำไมค่าการนำไฟฟ้าถึงดีกว่าค่า pH?',a:'Because pH is a log scale, so it barely changes. Conductivity drops very clearly as the chemical gets used up, and factories can measure it in-line with a sensor.'},
{s:8,related:[9],q:'ทำไมแท่ง Before กับ After ในวันเดียวกันถึงแทบไม่ต่างกัน แต่มันไปลดลงข้ามวันแทน?',a:'Because the chemical reaction with milk protein takes time. Most of the NaOH gets used up while sitting in the tank for 24 hours between cleanings.'},
{s:10,q:'ทำไมคำนวณต้นทุนที่ 0.5% NaOH แทนที่จะเป็น 0.05%?',a:'Because 0.5% is the standard concentration used in real food factories. It is safer and stayed completely clean for all 7 uses.',n:'ผลที่ยืนยันในสไลด์คือไม่พบโปรตีนตลอด 7 ครั้ง ยังไม่ได้ตรวจจุลินทรีย์ และความเข้มข้นที่โรงงานใช้ต้องขึ้นกับกระบวนการจริง'},
{s:10,q:'ทำไมค่าไฟถึงประหยัดได้ 0%?',a:'Because we still need to run the pump and heater for every cleaning cycle, even if we reuse the water.'},
{s:10,q:'ข้อสุดท้ายที่บอกว่าต้อง validate ในโรงงานจริง หมายความว่ายังไง?',a:'It means before using this in a real factory like Nestlé, we must test it on our own pipes and also check bacteria counts to be 100% sure it is safe.',n:'การ validate คือยืนยันด้วยเกณฑ์และการทดสอบที่เหมาะสมกับโรงงานจริง ควรหลีกเลี่ยงการรับรองความปลอดภัยแบบ 100%'},
{s:3,g:true,q:'ทำไมใช้ซ้ำได้ โปรตีนไม่เกาะซ้ำ และทำไมพลังลดลง?',a:"NaOH dissolves the milk protein into the water, so it doesn't stick back. But while sitting in the tank, the chemical keeps reacting with that protein, so less active NaOH is left for the next use."},
{s:3,g:true,q:'ความแตกต่างของ Contact Time และสภาวะการล้าง?',a:'Both used 45 °C. Bench-scale stirred for 10 minutes in a beaker, while pilot-scale pumped fast through a real pipe for only 2 minutes.',n:'Bench-scale มีการทดสอบที่ 1, 5 และ 10 นาทีด้วย ส่วน 10 นาทีคือเวลาที่ใช้เปรียบเทียบผลการใช้ซ้ำ'},
{s:6,g:true,q:'ทำไม Pilot-scale (0.05%) ล้างได้ 6 รอบ แต่ Bench-scale ได้แค่ 3 รอบ?',a:'Two reasons: the pilot pipe started with 100 times less protein, and the fast pipe flow washed the dirt away much better than stirring.'},
{s:8,g:true,q:'ทำไมถึงเลือกจุดตัด (Threshold) ที่ 0.538 mS/cm หรือ 0.0029 mol/L?',a:'Because in the 0.05% pilot test, protein residue appeared on the 7th use right when conductivity hit 0.538 mS/cm and active alkali hit 0.0029 mol/L. So factories must stop before reaching those numbers.',n:'ตัวเลขนี้มาจาก pilot-scale ที่ 0.05% ในการทดลองนี้ ต้อง validate ก่อนใช้เป็นเกณฑ์ในโรงงานอื่น'}
].map((q,i)=>({...q,id:i+1}));
const $=s=>document.querySelector(s);const el=(tag,cls,txt)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(txt!==undefined)n.textContent=txt;return n;};
let state={};let storageOk=true;try{const saved=JSON.parse(localStorage.getItem('cip-practice-v1')||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved))state=saved;}catch{storageOk=false;}
function normalizeQuestions(items) {
  if (!Array.isArray(items)) return null;
  const ids = new Set();
  const normalized = [];
  for (const item of items) {
    if (!item || !Number.isSafeInteger(item.id) || item.id < 1 || ids.has(item.id)
      || !Number.isInteger(item.s) || item.s < 0 || item.s >= slides.length
      || typeof item.q !== 'string' || !item.q.trim()
      || typeof item.a !== 'string' || !item.a.trim()) return null;
    ids.add(item.id);
    const related = Array.isArray(item.related) ? item.related.filter(
      index => Number.isInteger(index) && index >= 0 && index < slides.length
    ) : [];
    normalized.push({
      id: item.id, s: item.s, q: item.q, a: item.a, g: Boolean(item.g),
      n: typeof item.n === 'string' ? item.n : '', related
    });
  }
  return normalized;
}

const initialQuestions = normalizeQuestions(questions);
let legacyQuestions = null;
let legacyImported = false;
try {
  legacyQuestions = normalizeQuestions(JSON.parse(localStorage.getItem('cip-questions-v1')));
  legacyImported = localStorage.getItem('kt-legacy-imported-v1') === 'yes';
} catch {
  // The original questions are still available if browser storage is unavailable.
}
if (legacyQuestions) questions = legacyQuestions;
const legacyChanges = legacyQuestions && JSON.stringify(legacyQuestions) !== JSON.stringify(initialQuestions);

function questionContent({ id, ...content }) {
  return JSON.stringify(content);
}

function questionsToImport() {
  if (!legacyChanges || legacyImported || bankRevision === null) return null;
  if (bankRevision === 0) return legacyQuestions;

  const originals = new Map(initialQuestions.map(item => [item.id, questionContent(item)]));
  const merged = questions.slice();
  const current = new Set(questions.map(questionContent));
  let nextId = Math.max(Date.now(), ...questions.map(item => item.id + 1));
  for (const local of legacyQuestions) {
    const content = questionContent(local);
    if (originals.get(local.id) === content || current.has(content)) continue;
    const index = merged.findIndex(item => item.id === local.id);
    if (index >= 0 && questionContent(merged[index]) === originals.get(local.id)) {
      merged[index] = local;
    } else {
      merged.push({ ...local, id: nextId++ });
    }
    current.add(content);
  }
  return JSON.stringify(merged) !== JSON.stringify(questions) ? merged : null;
}

let questionSync;
let editorId;
let bankRevision = null;
let editingRevision;
let readingBank = false;
let savingBank = false;
let syncStatus = 'กำลังโหลดคำถามกลาง…';
let syncError = '';

function canEditQuestions() {
  return Boolean(questionSync && editorId === questionSync.ownerId && bankRevision !== null);
}

function updateSyncControls() {
  const editor = canEditQuestions();
  $('#addQuestion').disabled = !questionSync || savingBank;
  $('#addQuestion').textContent = editor ? '＋ เพิ่มคำถาม' : 'เข้าสู่ระบบเพื่อแก้ไข';
  $('#sharedActions').hidden = !editor;
  $('#importQuestions').hidden = !editor || !questionsToImport();
  $('#importQuestions').disabled = savingBank;
  $('#editorSignOut').disabled = savingBank;
  $('#undoDelete').disabled = savingBank || !editor;
  $('#saveNote').textContent = syncError || syncStatus;
}

function applyQuestionBank(record) {
  const items = record?.revision === 0 && record.questions === null
    ? initialQuestions
    : normalizeQuestions(record?.questions);
  if (!items || !Number.isSafeInteger(record.revision) || record.revision < 0) {
    throw new Error('ข้อมูลคำถามกลางไม่ถูกต้อง');
  }
  if (bankRevision !== null && record.revision < bankRevision) return;
  const latestById = new Map(items.map(item => [item.id, item]));
  const skippedBeforeCurrent = deck.slice(0, position).filter(item => !latestById.has(item.id)).length;
  deck = deck.filter(item => latestById.has(item.id)).map(item => latestById.get(item.id));
  position = Math.min(position - skippedBeforeCurrent, deck.length);
  bankRevision = record.revision;
  questions = items;
  syncStatus = 'คำถามชุดเดียวกันทุกเครื่อง · สถานะการซ้อมเก็บในเครื่องนี้';
  syncError = '';
  render();
}

async function refreshQuestionBank() {
  if (!questionSync || readingBank || savingBank || document.hidden || $('#questionDialog').open) return;
  readingBank = true;
  try {
    const record = await questionSync.read();
    if (!savingBank && !$('#questionDialog').open && record.revision !== bankRevision) {
      applyQuestionBank(record);
    } else if (record.revision === bankRevision) {
      syncStatus = 'คำถามชุดเดียวกันทุกเครื่อง · สถานะการซ้อมเก็บในเครื่องนี้';
      updateSyncControls();
    }
  } catch {
    syncStatus = 'ติดต่อคลังคำถามกลางไม่ได้ · กำลังแสดงคำถามที่มีอยู่';
    updateSyncControls();
  } finally {
    readingBank = false;
  }
}

async function saveQuestionBank(next, revision = bankRevision) {
  if (!canEditQuestions() || savingBank) return false;
  savingBank = true;
  syncError = '';
  updateSyncControls();
  try {
    const saved = await questionSync.write(next, revision);
    if (!saved) {
      applyQuestionBank(await questionSync.read());
      syncError = 'มีการแก้ไขจากอีกเครื่อง กรุณาเปิดคำถามล่าสุดแล้วลองอีกครั้ง';
      return false;
    }
    applyQuestionBank(saved);
    return true;
  } catch {
    syncError = 'บันทึกคำถามไม่ได้ กรุณาตรวจการเชื่อมต่อหรือเข้าสู่ระบบใหม่แล้วลองอีกครั้ง';
    return false;
  } finally {
    savingBank = false;
    updateSyncControls();
  }
}

function openSignIn() {
  if (!questionSync) return;
  if (editorId === questionSync.ownerId) {
    refreshQuestionBank();
    return;
  }
  $('#signInError').hidden = true;
  $('#signInSent').hidden = true;
  $('#signInDialog').showModal();
}

function initializeQuestionSync() {
  if (!window.ktQuestionBankConfig || !window.supabase) {
    syncStatus = 'ยังไม่ได้เชื่อมคลังคำถามกลาง';
    updateSyncControls();
    return;
  }
  questionSync = createQuestionSync(window.ktQuestionBankConfig);
  questionSync.auth.onAuthStateChange((_event, session) => {
    editorId = session?.user.id;
    render();
  });
  $('#cancelSignIn').onclick = () => $('#signInDialog').close();
  $('#editorSignIn').onsubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const submit = form.querySelector('[type="submit"]');
    const errorMessage = $('#signInError');
    const sentMessage = $('#signInSent');
    submit.disabled = true;
    errorMessage.hidden = true;
    sentMessage.hidden = true;
    try {
      const { error } = await questionSync.auth.signInWithOtp({
        email: form.elements.email.value.trim(),
        options: {
          shouldCreateUser: false,
          emailRedirectTo: new URL('./', window.location.href).href
        }
      });
      if (error) throw error;
      sentMessage.textContent = 'ส่งลิงก์แล้ว กรุณาเปิดลิงก์ในอีเมลด้วยเบราว์เซอร์นี้';
      sentMessage.hidden = false;
    } catch {
      errorMessage.textContent = 'ส่งลิงก์ไม่ได้ กรุณาตรวจอีเมลหรือรอสักครู่แล้วลองอีกครั้ง';
      errorMessage.hidden = false;
    } finally {
      submit.disabled = false;
    }
  };
  $('#editorSignOut').onclick = async () => {
    try {
      const { error } = await questionSync.auth.signOut({ scope: 'local' });
      if (error) throw error;
    } catch {
      syncError = 'ออกจากระบบไม่ได้ กรุณาลองอีกครั้ง';
      updateSyncControls();
    }
  };
  $('#importQuestions').onclick = async () => {
    const next = questionsToImport();
    if (!next) return;
    const prompt = bankRevision === 0
      ? 'ใช้ชุดคำถามจากเครื่องนี้เป็นชุดกลางสำหรับทุกคนที่เปิดลิงก์เว็บหรือไม่?'
      : 'รวมคำถามที่เพิ่มหรือแก้ไขบนเครื่องนี้เข้าชุดกลางสำหรับทุกคนที่เปิดลิงก์เว็บหรือไม่?';
    if (!window.confirm(prompt) || !await saveQuestionBank(next)) return;
    legacyImported = true;
    try {
      localStorage.setItem('kt-legacy-imported-v1', 'yes');
    } catch {
      // The current tab still remembers that the import succeeded.
    }
    updateSyncControls();
  };
  document.addEventListener('visibilitychange', refreshQuestionBank);
  window.addEventListener('focus', refreshQuestionBank);
  window.setInterval(refreshQuestionBank, 30000);
  refreshQuestionBank();
  updateSyncControls();
}

let mode='slides',slide=0,deck=[],position=0;const opened=new Set();
const imagePath=i=>`assets/slide-${String(i+1).padStart(2,'0')}.jpg`;
function save(){try{localStorage.setItem('cip-practice-v1',JSON.stringify(state));}catch{storageOk=false;}updateCounts();}
function updateCounts(){$('#totalCount').textContent=questions.length;$('#generalCount').textContent=questions.filter(q=>q.g).length;$('#knownCount').textContent=questions.filter(q=>state[q.id]==='known').length;$('#reviewCount').textContent=questions.filter(q=>state[q.id]==='review').length;updateSyncControls();}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function setMode(next){mode=next;opened.clear();if(next==='random'){deck=shuffle(questions);position=0;}if(next==='review'){deck=shuffle(questions.filter(q=>state[q.id]==='review'));position=0;}render();}
function setSlide(i){slide=Math.max(0,Math.min(slides.length-1,i));renderSlide();if(mode==='slides')renderQuestions();}
function renderSlide(){$('#slideSelect').value=String(slide);$('#slideCounter').textContent=`${slide+1} / ${slides.length}`;$('#slideImage').src=imagePath(slide);$('#slideImage').alt=slides[slide][0];$('#prevSlide').disabled=slide===0;$('#nextSlide').disabled=slide===slides.length-1;document.querySelectorAll('.thumb').forEach((b,i)=>{b.classList.toggle('selected',i===slide);b.setAttribute('aria-pressed',i===slide?'true':'false');});}
function card(q){const root=el('article','qcard');const top=el('div','qtop');top.append(el('span','qtag',`${q.g?'ภาพรวม':slides[q.s][0]}`));const status=el('span','status');top.append(status);root.append(top,el('h3','',q.q));const reveal=el('button','reveal');reveal.type='button';reveal.setAttribute('aria-controls',`answer-${q.id}`);root.append(reveal);const answer=el('div','answer');answer.id=`answer-${q.id}`;answer.append(el('p','english',q.a));if(q.n){const note=el('details','note');note.append(el('summary','','หมายเหตุเตรียมตอบ'),el('p','',q.n));answer.append(note);}const ratings=el('div','rating');const buttons=[];[['review','♡ ยังไม่คล่อง'],['known','✓ คล่องแล้ว']].forEach(([value,label])=>{const b=el('button','',label);b.dataset.rating=value;b.onclick=()=>{if(state[q.id]===value)delete state[q.id];else state[q.id]=value;save();syncStatus();};ratings.append(b);buttons.push(b);});answer.append(ratings);root.append(answer);
function syncStatus(){const value=state[q.id];status.textContent=value==='known'?'✓ คล่องแล้ว':value==='review'?'♡ ซ้อมอีกนิด':'';status.classList.toggle('good',value==='known');buttons.forEach(b=>{b.classList.toggle('chosen',state[q.id]===b.dataset.rating);b.setAttribute('aria-pressed',state[q.id]===b.dataset.rating?'true':'false');});}
function syncOpen(){const yes=opened.has(q.id);root.classList.toggle('open',yes);answer.hidden=!yes;reveal.textContent=yes?'ซ่อนคำตอบ ↑':'เปิดคำตอบ ↓';reveal.setAttribute('aria-expanded',yes?'true':'false');}
reveal.onclick=()=>{if(opened.has(q.id))opened.delete(q.id);else opened.add(q.id);syncOpen();};syncOpen();syncStatus();if(mode!=='slides'){const link=el('button','source-link',`ดูสไลด์ที่เกี่ยวข้อง ↗ ${slides[q.s][0]}`);link.onclick=()=>{$('#slideImageButton').dataset.returnFocus='true';setSlide(q.s);showImage(link);};root.append(link);}const tools=el('div','question-tools');const edit=el('button','','แก้ไข');edit.setAttribute('aria-label',`แก้ไขคำถาม: ${q.q}`);edit.onclick=()=>openEditor(q);const remove=el('button','delete-question','ลบคำถาม');remove.setAttribute('aria-label',`ลบคำถาม: ${q.q}`);remove.onclick=()=>deleteQuestion(q.id);tools.append(edit,remove);if (canEditQuestions()) root.append(tools);return root;}
function empty(title,text,label,action){const n=el('div','empty');n.append(el('b','',title),el('p','',text));if(label){const b=el('button','primary',label);b.onclick=action;n.append(b);}return n;}
function renderQuestions(){const list=$('#questionList'),area=$('#practiceArea');list.replaceChildren();area.replaceChildren();const practice=mode==='random'||mode==='review';list.hidden=practice;area.hidden=!practice;const labels={slides:['PRACTICE BY SLIDE','คำถามประจำสไลด์'],general:['THE BIG PICTURE','คำถามภาพรวม'],random:['REHEARSE & REPEAT','สุ่มคำถาม'],review:['A LITTLE MORE PRACTICE','ยังไม่คล่อง']};$('#questionHeading').textContent=labels[mode][1];if(!practice){const items=mode==='general'?questions.filter(q=>q.g):questions.filter(q=>!q.g&&(q.s===slide||q.related?.includes(slide)));$('#questionCount').textContent=`${items.length} คำถาม`;if(!items.length)list.append(empty('หน้านี้ไม่มีคำถามที่เตรียมไว้','เลือกสไลด์ถัดไป หรือซ้อมคำถามภาพรวมได้เลย','ไปที่คำถามภาพรวม',()=>setMode('general')));else items.forEach(q=>list.append(card(q)));return;}
$('#questionCount').textContent=mode==='review'?`${deck.length} ข้อในรอบนี้`:`${deck.length} คำถาม`;if(!deck.length){area.append(mode==='review'?empty('ยังไม่มีข้อที่ทำเครื่องหมายไว้','เปิดคำตอบแล้วแตะ “ยังไม่คล่อง” เพื่อเก็บข้อที่อยากกลับมาซ้อม','เริ่มสุ่มซ้อม',()=>setMode('random')):empty('ยังไม่มีคำถามให้สุ่ม','เพิ่มคำถามและคำตอบเพื่อเริ่มซ้อม','เพิ่มคำถาม',()=>openEditor()));return;}
if(position>=deck.length){const left=deck.filter(q=>state[q.id]==='review').length;area.append(empty('ซ้อมครบแล้ว',`ซ้อมครบ ${deck.length} ข้อในรอบนี้ · ยังอยากซ้อมต่อ ${left} ข้อ`, 'สุ่มซ้อมอีกรอบ',()=>setMode(mode)));return;}
const progress=el('div','round-progress');const bar=el('div');bar.style.width=`${position/deck.length*100}%`;progress.append(bar);area.append(progress,card(deck[position]));const nav=el('div','practice-nav');const prev=el('button','','← ก่อนหน้า');prev.disabled=position===0;prev.onclick=()=>{position--;opened.clear();setSlide(deck[position].s);renderQuestions();};const next=el('button','',position===deck.length-1?'จบรอบ ✓':'ข้อต่อไป →');next.onclick=()=>{position++;opened.clear();if(position<deck.length)setSlide(deck[position].s);renderQuestions();};nav.append(prev,el('span','',`${position+1} / ${deck.length}`),next);area.append(nav);}
function render(){document.querySelectorAll('[data-mode]').forEach(b=>{b.classList.toggle('active',b.dataset.mode===mode);b.setAttribute('aria-pressed',b.dataset.mode===mode?'true':'false');});$('.workspace').classList.toggle('focus-mode',mode!=='slides');if((mode==='random'||mode==='review')&&deck[position])slide=deck[position].s;renderSlide();renderQuestions();updateCounts();}
slides.forEach((s,i)=>{const option=el('option','',s[0]);option.value=String(i);$('#slideSelect').append(option);});$('#slideSelect').onchange=e=>setSlide(Number(e.target.value));
slides.forEach((s,i)=>{const b=el('button','thumb');b.setAttribute('aria-label',s[0]);const img=el('img');img.src=imagePath(i);img.alt='';img.loading='lazy';b.append(img,el('small','',s[0]));b.onclick=()=>setSlide(i);$('#thumbnails').append(b);});
let editingId=null,lastDeleted=null,editorTrigger=null;
slides.forEach((s,i)=>{const option=el('option','',s[0]);option.value=String(i);$('#questionSlide').append(option);});
function openEditor(q){if (!canEditQuestions()) { openSignIn(); return; } editingRevision = bankRevision; editingId=q?.id??null;editorTrigger=document.activeElement;$('#editorTitle').textContent=q?'แก้ไขคำถาม':'เพิ่มคำถาม';$('#questionType').value=q?(q.g?'general':'slide'):(mode==='general'?'general':'slide');$('#questionSlide').value=String(q?.s??slide);$('#questionText').value=q?.q??'';$('#answerText').value=q?.a??'';$('#noteText').value=q?.n??'';$('#formError').hidden=true;$('#questionDialog').showModal();$('#questionText').focus();}
async function deleteQuestion(id) {
  const index = questions.findIndex(question => question.id === id);
  if (index < 0) return;
  const deleted = { question: questions[index], index, status: state[id] };
  if (!await saveQuestionBank(questions.filter(question => question.id !== id))) return;
  lastDeleted = deleted;
  delete state[id];
  opened.delete(id);
  save();
  $('#deleteNotice').hidden = false;
}

$('#undoDelete').onclick = async () => {
  if (!lastDeleted) return;
  const { question, index, status } = lastDeleted;
  if (questions.some(item => item.id === question.id)) return;
  const restored = questions.slice();
  restored.splice(Math.min(index, restored.length), 0, question);
  if (!await saveQuestionBank(restored)) return;
  if (status) state[question.id] = status;
  lastDeleted = null;
  $('#deleteNotice').hidden = true;
  save();
  render();
};

$('#questionForm').onsubmit = async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = $('#formError');
  const submit = form.querySelector('[type="submit"]');
  const q = $('#questionText').value.trim();
  const a = $('#answerText').value.trim();
  const s = Number($('#questionSlide').value);
  if (!q || !a || !Number.isInteger(s) || s < 0 || s >= slides.length) {
    message.textContent = 'กรุณาระบุคำถาม คำตอบ และสไลด์ที่เกี่ยวข้อง';
    message.hidden = false;
    return;
  }
  if (!canEditQuestions() || savingBank) return;
  const previous = questions.find(item => item.id === editingId);
  if (editingId !== null && (!previous || editingRevision !== bankRevision)) {
    message.textContent = 'มีการแก้ไขจากอีกเครื่อง กรุณาเปิดคำถามล่าสุดแล้วลองอีกครั้ง';
    message.hidden = false;
    return;
  }
  const item = {
    id: previous?.id ?? Math.max(Date.now(), ...questions.map(item => item.id + 1)),
    s, q, a, g: $('#questionType').value === 'general',
    n: $('#noteText').value.trim(),
    related: previous?.s === s ? previous.related : []
  };
  const next = previous ? questions.map(question => question.id === item.id ? item : question) : [...questions, item];
  submit.disabled = true;
  message.hidden = true;
  try {
    if (!await saveQuestionBank(next, bankRevision)) {
      message.textContent = syncError || 'กรุณาเข้าสู่ระบบเพื่อแก้ไขอีกครั้ง';
      message.hidden = false;
      return;
    }
    $('#questionDialog').close();
    if (item.g) setMode('general');
    else {
      slide = s;
      setMode('slides');
    }
    opened.add(item.id);
    renderQuestions();
  } finally {
    submit.disabled = false;
  }
};

$('#addQuestion').onclick=()=>openEditor();$('#closeEditor').onclick=()=>$('#questionDialog').close();$('#cancelEditor').onclick=()=>$('#questionDialog').close();$('#questionDialog').addEventListener('close',()=>{if(editorTrigger?.isConnected)editorTrigger.focus();else $('#addQuestion').focus();});
document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));$('#prevSlide').onclick=()=>setSlide(slide-1);$('#nextSlide').onclick=()=>setSlide(slide+1);$('#progressButton').onclick=()=>setMode('review');
let imageTrigger=null;function showImage(trigger){imageTrigger=trigger;$('#largeImage').src=imagePath(slide);$('#largeImage').alt=slides[slide][0];$('#imageDialog').showModal();}$('#slideImageButton').onclick=()=>showImage($('#slideImageButton'));$('#closeImage').onclick=()=>$('#imageDialog').close();$('#imageDialog').addEventListener('click',e=>{if(e.target===$('#imageDialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});$('#imageDialog').addEventListener('close',()=>imageTrigger?.focus());render();

initializeQuestionSync();
