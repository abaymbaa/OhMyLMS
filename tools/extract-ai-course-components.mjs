/** One-time extraction. Never part of the production build. */
import path from 'node:path';
import {
	loadApplication,
	extractComponents,
} from './component-extraction-utils.mjs';

const root = path.resolve( import.meta.dirname, '..' );
const { declarations } = loadApplication( root );
const components = [
	[ 'Zre', 'CarouselArrow' ],
	[ '$re', 'PromptCarouselNavigation' ],
	[ 'Jre', 'PromptTemplateCard' ],
	[ 'eae', 'PromptTemplateSlider' ],
	[ 'iae', 'PromptTemplateToggleIcon' ],
	[ 'lae', 'PromptTemplates' ],
	[ 'mae', 'AiPreviewHeader' ],
	[ 'fae', 'AiCourseSummary' ],
	[ 'gae', 'AiOutlineItem' ],
	[ 'yae', 'AiLessonList' ],
	[ '_ae', 'AiChapterItem' ],
	[ 'Sae', 'AiChapterList' ],
	[ 'Cae', 'AiCourseOutline' ],
	[ 'kae', 'AiAcceptIcon' ],
	[ 'jae', 'AiPreviewActions' ],
	[ 'Dae', 'AiCoursePreview' ],
	[ 'Uae', 'AiCourseGenerator' ],
	[ 'Yae', 'AiCourseGeneratorPage' ],
].map( ( [ binding, name ] ) => ( { binding, name } ) );
const dependencyNames = {
	g: 'ReactHooks',
	y: 'WordPressData',
	b: 'I18n',
	I: 'Controls',
	T: 'StoreModule',
	f: 'Router',
	L: 'Entitlements',
	z: 'Notifications',
	Zre: 'CarouselArrow',
	$re: 'PromptCarouselNavigation',
	Jre: 'PromptTemplateCard',
	Xre: 'MemoPromptTemplateCard',
	eae: 'PromptTemplateSlider',
	iae: 'PromptTemplateToggleIcon',
	lae: 'PromptTemplates',
	cae: 'MemoPromptTemplates',
	mae: 'AiPreviewHeader',
	pae: 'MemoAiPreviewHeader',
	fae: 'AiCourseSummary',
	vae: 'MemoAiCourseSummary',
	gae: 'AiOutlineItem',
	hae: 'MemoAiOutlineItem',
	yae: 'AiLessonList',
	bae: 'MemoAiLessonList',
	_ae: 'AiChapterItem',
	wae: 'MemoAiChapterItem',
	Sae: 'AiChapterList',
	Rae: 'MemoAiChapterList',
	Cae: 'AiCourseOutline',
	Pae: 'MemoAiCourseOutline',
	kae: 'AiAcceptIcon',
	jae: 'AiPreviewActions',
	Aae: 'MemoAiPreviewActions',
	Dae: 'AiCoursePreview',
	Wae: 'MemoAiCoursePreview',
	Uae: 'AiCourseGenerator',
	qae: 'MemoAiCourseGenerator',
	Yae: 'AiCourseGeneratorPage',
};
const rows = extractComponents( {
	root,
	feature: 'ai-course-outline',
	exportName: 'aiCourseComponents',
	components,
	declarations,
	dependencyNames,
} );
console.log(
	`Extracted ${ rows.length } named AI Course Outline React modules.`
);
