import {createElement,createPortal,useEffect,useRef,useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {submitRegistration,registrationRedirect} from './registration-api.mjs';

/** React fields inside the original PHP form retain third-party hook markup. */
export function RegistrationForm({form,countries,submitHost,noticeHost,icons,initialValues}){
 const [values,setValues]=useState(initialValues);
 const [visible,setVisible]=useState(false);
 const [accepted,setAccepted]=useState(Boolean(form.elements['tnc-accept']?.checked));
 const [busy,setBusy]=useState(false);
 const [error,setError]=useState('');
 const [pending,setPending]=useState('');
 const inFlight=useRef(false);
 useEffect(()=>{
  const changed=()=>setAccepted(Boolean(form.elements['tnc-accept']?.checked));
  async function submit(event){
   event.preventDefault();event.stopImmediatePropagation();
   if(inFlight.current||!form.reportValidity())return;
   if(!form.elements['tnc-accept']?.checked){setError(__('Please accept the Privacy Policy.','ohmylms'));return;}
   inFlight.current=true;setBusy(true);setError('');
   try{
    const result=await submitRegistration(window.omlms_frontend_params?.ajax_url||window.omlms_checkout_params?.ajax_url,new FormData(form));
    if(result.status==='pending_verification'){setPending(result.message);form.style.display='none';}
    else{
     const redirect=registrationRedirect(result.redirect_url,window.location.href);
     if(!redirect)throw Error(__('Your account was created, but the redirect is unavailable. Please log in.','ohmylms'));
     window.location.assign(redirect);
    }
   }catch(cause){
    // WordPress may include formatting in validation messages; render only text.
    const text=new DOMParser().parseFromString(cause.message||__('Registration failed. Please try again.','ohmylms'),'text/html').body.textContent;
    setError(text);
   }finally{inFlight.current=false;setBusy(false);}
  }
  form.addEventListener('submit',submit,true);form.addEventListener('change',changed);
  form.dataset.ohmylmsRegistration='react';
  return ()=>{form.removeEventListener('submit',submit,true);form.removeEventListener('change',changed);};
 },[form]);
 const update=event=>setValues(current=>({...current,[event.target.name]:event.target.value}));
 function field(name,label,type='text',required=false){
  const id='signup-'+name.replace('_','-');
  return <p className={`creator-lms-form-row row-${name.replace('_','-')}`}><span className="creator-lms-input-wrapper">
   <label htmlFor={id} className="creator-lms-input-label">{label}{required&&<span className="required" aria-hidden="true"> *</span>}</label>
   <input type={type} name={name} id={id} className={`creator-lms-input-text ${name}`} value={values[name]||''} onChange={update} required={required} aria-required={required}/>
  </span></p>;
 }
 return <>
  {error&&<p role="alert" className="omlms-registration-error">{error}</p>}
  <div className="creator-lms-form-row creator-lms-form-names-row">{field('first_name',__('First Name','ohmylms'),'text',true)}{field('last_name',__('Last Name','ohmylms'),'text',true)}</div>
  {field('email',__('Email','ohmylms'),'email',true)}
  <p className="creator-lms-form-row row-password"><span className="creator-lms-input-wrapper"><label htmlFor="signup-password" className="creator-lms-input-label">{__('Password','ohmylms')} <span className="required" aria-hidden="true">*</span></label>
   <span className="creator-lms-password-show"><input id="signup-password" name="password" type={visible?'text':'password'} className="creator-lms-input-text password" required aria-required="true" minLength={8} autoComplete="new-password" value={values.password||''} onChange={update}/>
    <label className="show-password-icon"><input type="checkbox" name="show-password-checkbox" className="show-password-checkbox" checked={visible} onChange={event=>setVisible(event.target.checked)} aria-label={__('Show password','ohmylms')}/>
     <span className="show-password"><span className="eye-on" dangerouslySetInnerHTML={{__html:icons.on}}/><span className="eye-off" dangerouslySetInnerHTML={{__html:icons.off}}/></span>
    </label>
   </span>
  </span></p>
  {field('phone',__('Phone Number','ohmylms'))}
  <p className="creator-lms-form-row row-country"><span className="creator-lms-input-wrapper"><label htmlFor="signup-country" className="creator-lms-input-label">{__('Country','ohmylms')}</label>
   <select id="signup-country" name="country" className="creator-lms-input-text" value={values.country||''} onChange={update}>{countries.map(country=><option key={country.value} value={country.value}>{country.label}</option>)}</select>
  </span></p>
  {createPortal(<button type="submit" className="creator-lms-button creator-lms-form-signup-submit" name="signup" value={__('Sign Up','ohmylms')} disabled={!accepted||busy} aria-busy={busy}>{busy?__('Signing up…','ohmylms'):__('Sign Up','ohmylms')}</button>,submitHost)}
  {pending&&createPortal(<div className="omlms-email-pending-notice" role="status"><h3>{__('Check your inbox!','ohmylms')}</h3><p>{pending}</p></div>,noticeHost)}
 </>;
}
