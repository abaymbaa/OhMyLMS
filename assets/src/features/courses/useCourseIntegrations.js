import {useEffect,useRef,useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';

export function useCourseIntegrations({actions,isPro,enableSpin}){
 const [automation,setAutomation]=useState(null);
 const [integration,setIntegration]=useState(null);
 const listener=useRef(null);
 function openAutomation(forWhat,contentId,contentName){
  if(!isPro){actions.setIsProModalOpen(true);return;}
  if(!window.creator_lms_params?.is_mailmint_active){
   localStorage.setItem('clms_automation_for_what',forWhat);localStorage.setItem('clms_automation_content_id',contentId);localStorage.setItem('clms_automation_content_name',contentName);
   actions.setIsProModalOpen(true);
   actions.updateProModalTitle(__('Missing Mail Mint Plugin!','ohmylms'));
   actions.updateProModalContent(__('Mail Mint is required to enable automation. Please install and activate the plugin.','ohmylms'));
   actions.updateProModalButtonText(__('Install and Activate','ohmylms'));actions.updateProModalButtonAction('activate-mail-mint');
   if(listener.current)window.removeEventListener('openAutomationModal',listener.current);
   listener.current=event=>setAutomation(event.detail);
   window.addEventListener('openAutomationModal',listener.current);
   return;
  }
  setAutomation({forWhat,contentId,contentName});
 }
 function openIntegration(forWhat,contentId,contentName){
  if(isPro)setIntegration({forWhat,contentId,contentName});else actions.setIsProModalOpen(true);
 }
 useEffect(()=>{
  if(localStorage.getItem('omlms_automation_modal_open')&&!enableSpin){
   openAutomation(localStorage.getItem('clms_automation_for_what'),localStorage.getItem('clms_automation_content_id'),localStorage.getItem('clms_automation_content_name'));
   ['omlms_automation_modal_open','clms_automation_for_what','clms_automation_content_id','clms_automation_content_name'].forEach(key=>localStorage.removeItem(key));
  }
  return ()=>{if(listener.current)window.removeEventListener('openAutomationModal',listener.current);};
 },[]);
 return {automation,integration,openAutomation,openIntegration,closeAutomation:()=>setAutomation(null),closeIntegration:()=>setIntegration(null)};
}
