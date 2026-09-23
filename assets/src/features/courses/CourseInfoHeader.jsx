import {createElement} from '@wordpress/element';
import {useSelect} from '@wordpress/data';
import {__} from '@wordpress/i18n';

export function createCourseInfoHeader(readRuntime){
 return function CourseInfoHeader({handleInputChange,onContentChange,handleRemoveMedia,handleUploadComplete}){
  const {Qp:Media,re:{A:TitleInput},ne:RichText,T:{default:store},Ze:useAiMode,Ge:decode}=readRuntime();
  const isAi=useAiMode();
  const course=useSelect(select=>isAi?select(store).getAISuggestedCourses():select(store).getCourse(),[store,isAi]);
  const {name,description,video_src:video,image_src:image}=course||{};
  return <div className={`omlms-course-info-header ${video||image?'omlms-has-media':''} ${video?'omlms-thumb-video-wrapper':''} ${image?'omlms-thumb-img-wrapper':''}`}>
   <Media videoSrc={video} imageSrc={image} handleRemoveMedia={handleRemoveMedia} handleUploadComplete={handleUploadComplete}/>
   <div className="omlms-course-content-info"><div className="omlms-title-input-wrapper omlms-course-title">
    <TitleInput value={name!=='Untitled'?decode(name):''} onChange={handleInputChange} placeholder={__('Enter Course Title','ohmylms')}
     name="name" className="omlms-course-title" style={{fontSize:30,fontWeight:'bold',border:'none',background:'transparent',padding:0,textAlign:'left',lineHeight:1.2,boxShadow:'none'}}
     size="large" autoComplete="off" autoFocus={!isAi} variant="borderless"/>
   </div><RichText onContentChange={onContentChange} placeholder={__('Add course description ...','ohmylms')}
    content={description} showAddButton showTextAlign autofocus={false} editorFor="course"/></div>
  </div>;
 };
}
