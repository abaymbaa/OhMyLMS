import {useEffect,useState} from '@wordpress/element';
import {useSelect,useDispatch} from '@wordpress/data';
import {prepareQuizPayload,canLeaveQuestion} from './model.mjs';
import {loadQuiz,saveQuiz} from './api.mjs';
import {__} from '@wordpress/i18n';

export function useQuizEditor({store,chapterId,validate,registerTypes}) {
 const state=useSelect(select=>{
  const data=select(store);
  return {quizId:data.getSelectedQuizId(),quiz:data.getQuiz(),question:data.selectQuestion(),
   questions:data.getAllQuestions()||[],types:data.getQuizTypes(),
   notice:data.getNotificationMessage(),noticeStatus:data.getNotificationStatus()};
 },[store]);
 const actions=useDispatch(store);
 const [loading,setLoading]=useState(false);
 const [saving,setSaving]=useState(false);
 const [error,setError]=useState(null);
 const [savedNotice,setSavedNotice]=useState('');
 useEffect(()=>{
  let active=true;
  if(!state.types.length)registerTypes();
  if(state.quizId){
   setLoading(true);setError(null);
   loadQuiz(state.quizId).then(loaded=>{
    if(!active)return;
    actions.setQuiz(loaded);actions.setAllQuestions(loaded.content||[]);
    actions.setSelectedQuestionId(loaded?.content?.[0]?.id);
    actions.setQuestion(loaded?.content?.[0]);
   }).catch(cause=>{if(active)setError(cause.message||'Could not load quiz.');})
    .finally(()=>{if(active)setLoading(false);});
  }
  else setLoading(false);
  return ()=>{active=false;};
 },[state.quizId,store]);
 useEffect(()=>()=>{actions.resetQuizState();actions.resetQuestionState();},[store]);
 function validateCurrentQuestion(){
  if(canLeaveQuestion(state.question,validate))return true;
  actions.setQuizError(true);return false;
 }
 async function save(){
  if(saving||!validateCurrentQuestion())return;
  setSaving(true);setError(null);setSavedNotice('');
  try{if(!chapterId){
   const saved=await saveQuiz(state.quiz.id,prepareQuizPayload(state.quiz,state.questions));
   actions.setQuiz(saved);actions.setAllQuestions(saved.content||[]);
   const selected=saved.content?.find(question=>question.id===state.question?.id)||saved.content?.[0];
   actions.setSelectedQuestionId(selected?.id);actions.setQuestion(selected);
   setSavedNotice(__('Saved Successfully','ohmylms'));
  }}
  catch(cause){setError(cause.message||'Could not save quiz.');}
  finally{setSaving(false);}
 }
 return {...state,notice:savedNotice||state.notice,noticeStatus:savedNotice?'status':state.noticeStatus,loading,saving,error,save,validateCurrentQuestion,
  updateField:(field,value)=>actions.setQuiz({[field]:value})};
}
