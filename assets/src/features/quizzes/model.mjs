/** Keep saved option IDs and extension settings; remove only temporary UI IDs. */
export function prepareQuizPayload(quiz, questions) {
 const clean = item => {
  const copy={...item};
  if(copy.temp){delete copy.temp;delete copy.id;}
  return copy;
 };
 return {...quiz,content:questions.map(question=>({...clean(question),questions:(question.questions||[]).map(clean)}))};
}
export function canLeaveQuestion(question, validate) {
 return !question?.settings?.type || validate(question).isValid;
}
/** Reorder without mutating the store's option objects. */
export function moveOption(options,from,to){
 if(!Number.isInteger(from)||!Number.isInteger(to)||from<0||to<0||from>=options.length||to>=options.length)return options;
 const reordered=[...options];
 const [moved]=reordered.splice(from,1);
 reordered.splice(to,0,moved);
 return reordered.map((option,index)=>({...option,order_number:index+1}));
}
