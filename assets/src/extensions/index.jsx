import {createElement,createRoot,render} from '@wordpress/element';
import {createRegistry} from './registry.mjs';
import {ExtensionSlot} from './ExtensionSlot';
import * as api from './api.mjs';
import {MembershipSettingsPanels} from './MembershipSettingsPanels';
import {QuestionEditor} from './QuestionEditor';
import {LessonEditor} from './LessonEditor';
import {wrapScreen,extensionPage} from './ScreenExtensions';
import {validateMembership} from '../features/memberships/validateMembership.mjs';
const registry=createRegistry();
const roots=new WeakMap();
const publicApi={...registry,api,validateMembership,
 extendRoutes(routes){
   return [...routes.map(route=>route.path==='*'?route:{...route,element:wrapScreen(route.element,route.path,registry)}),...registry.list('admin-page').map(entry=>({path:`/extensions/${entry.id}`,element:extensionPage(entry)}))];
 },
 membershipPanels:props=>createElement(MembershipSettingsPanels,{registry,...props}),
 lessonEditor(editor,fallback){
   const entry=registry.get('lesson-editor',editor.lesson?.type);
   return entry?.enabled?createElement(LessonEditor,{entry,editor}):fallback;
 },
 questionTypes(store){
   const manifest=window.ohmylmsExtensionManifest?.question||{};
   return registry.list('question-editor').filter(entry=>manifest[entry.id]).map(entry=>({
     type:entry.id,name:entry.label,subTitle:entry.description||'',isPro:false,
     icon:()=>createElement('span',{'aria-hidden':true},'?'),thumbIcon:()=>null,
     edit:()=>createElement(QuestionEditor,{entry,store}),settings:{required:true,score:true},
   }));
 },
 lessonTypes(onSelect){
   const manifest=window.ohmylmsExtensionManifest?.lesson||{};
   return registry.list('lesson-editor').filter(entry=>manifest[entry.id]).map(entry=>({key:`extension-${entry.id}`,lessonType:entry.id,type:'lesson',title:entry.label,description:entry.description||'',icon:createElement('span',null,'+'),onClick:()=>onSelect(entry.id)}));
 },
 renderSlot:(name,context={},kind='slot')=>createElement(ExtensionSlot,{registry,name,context,kind}),
 renderEditor:(kind,id,context)=>{
   const entry=registry.get(kind,id);
   return entry&&entry.enabled?createElement(ExtensionSlot,{registry,name:id,context:{...context,type:id},kind,onlyId:id}):null;
 },
 mount(element,name,context={},kind='slot'){
   const view=createElement(ExtensionSlot,{registry,name,context,kind});
   if(createRoot){if(!roots.has(element))roots.set(element,createRoot(element));roots.get(element).render(view);}
   else render(view,element);
 },
};
window.ohmylms={...(window.ohmylms||{}),extensions:Object.freeze(publicApi)};
window.dispatchEvent(new CustomEvent('ohmylms:extensions-ready',{detail:publicApi}));
function mountSlots(){document.querySelectorAll('[data-ohmylms-slot]').forEach(element=>{
 let context={};try{context=JSON.parse(element.dataset.ohmylmsContext||'{}');}catch{return;}
 publicApi.mount(element,element.dataset.ohmylmsSlot,context,element.dataset.ohmylmsKind||'slot');
});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mountSlots,{once:true});else mountSlots();
export default publicApi;
