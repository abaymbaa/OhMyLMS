import {createElement} from '@wordpress/element';
import {useSelect,useDispatch} from '@wordpress/data';
import {ExtensionBoundary} from './ExtensionBoundary';
export function QuestionEditor({entry,store}){
 const question=useSelect(select=>select(store).selectQuestion(),[store]);
 const {setQuestion}=useDispatch(store);
 return <ExtensionBoundary id={entry.id}>{createElement(entry.render,{
  question,value:question?.settings||{},
  onChange:settings=>setQuestion({settings:{...question?.settings,...settings,type:entry.id}}),
 })}</ExtensionBoundary>;
}
