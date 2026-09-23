/* An example project module. No core or generated asset edits are required. */
(() => {
  const sdk=window.ohmylms.extensions;
  const el=window.wp.element.createElement;
  sdk.registerAdminPage('example-page',{label:'Example page',render:()=>el('section',null,el('h1',null,'OhMyLMS example module'),el('p',null,'This page was added without editing the LMS application.'))});
  sdk.registerSlot('example-navigation',{label:'Example navigation',slot:'admin.screen.before',when:context=>context.route==='/',render:()=>el('a',{href:'#/extensions/example-page'},'Open example module')});
  sdk.registerEditorPanel('example-panel',{label:'Example editor panel',slot:'/course-edit/:id/:step?/:subStep?',render:()=>el('aside',null,'Example course editor panel')});
  sdk.registerMembershipSettings('example-benefit',{label:'Member benefit',render:({value,onChange})=>el('label',null,'Member benefit',el('input',{'aria-label':'Member benefit',value:value.benefit||'',onChange:event=>onChange({...value,benefit:event.target.value})}))});
  sdk.registerQuestionEditor('example-number',{label:'Example number',render:({value,onChange})=>el('label',null,'Expected number',el('input',{'aria-label':'Expected number',type:'number',step:'any',value:value.expected??'',onChange:event=>onChange({expected:event.target.value===''?undefined:Number(event.target.value)})}))});
  sdk.registerLessonEditor('example-reading',{label:'Example reading',description:'A custom reading lesson',render:({value,onChange})=>el('div',null,el('label',null,'Reading title',el('input',{'aria-label':'Reading title',value:value.name,onChange:event=>onChange({name:event.target.value})})),el('label',null,'Reading content',el('textarea',{'aria-label':'Reading content',defaultValue:value.description,onChange:event=>onChange({description:event.target.value})})))});
  sdk.registerSlot('example-student-note',{label:'Student note',slot:'student.course.after',render:()=>el('aside',null,'Example course footer')});
  sdk.registerCheckoutField('example-checkout-help',{label:'Checkout guidance',slot:'checkout.fields.after',render:()=>el('p',null,'Your optional order reference is saved with the order.')});
  sdk.registerIntegration('example-integration',{label:'Example integration',render:()=>el('p',null,'Example integration panel; no external requests are made.')});
})();
