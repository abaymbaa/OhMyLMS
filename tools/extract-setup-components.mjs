/** One-time extraction. Never part of the production build. */
import path from 'node:path';
import {
	loadApplication,
	extractComponents,
} from './component-extraction-utils.mjs';

const root = path.resolve( import.meta.dirname, '..' );
const { declarations } = loadApplication( root );
const components = [
	[ 'Qte', 'SetupWelcome' ],
	[ 'rne', 'SetupLevelSelection' ],
	[ 'gne', 'SetupPreferences' ],
	[ 'kne', 'SetupNiche' ],
	[ 'Une', 'CourseMigration' ],
	[ '$ne', 'ScormImport' ],
	[ 'lre', 'CourseImport' ],
	[ 'Ine', 'SetupCompletion' ],
	[ 'gre', 'SetupWizardController' ],
	[ 'yre', 'SetupWizard' ],
	[ '_re', 'SetupWizardPage' ],
].map( ( [ binding, name ] ) => ( { binding, name } ) );
const dependencyNames = {
	g: 'ReactHooks',
	y: 'WordPressData',
	b: 'I18n',
	I: 'Controls',
	T: 'StoreModule',
	f: 'Router',
	Qte: 'SetupWelcome',
	Zte: 'MemoSetupWelcome',
	rne: 'SetupLevelSelection',
	ane: 'MemoSetupLevelSelection',
	gne: 'SetupPreferences',
	hne: 'MemoSetupPreferences',
	kne: 'SetupNiche',
	jne: 'MemoSetupNiche',
	Une: 'CourseMigration',
	Yne: 'MemoCourseMigration',
	$ne: 'ScormImport',
	Kne: 'MemoScormImport',
	lre: 'CourseImport',
	cre: 'MemoCourseImport',
	Ine: 'SetupCompletion',
	Fne: 'MemoSetupCompletion',
	gre: 'SetupWizardController',
	hre: 'MemoSetupWizardController',
	yre: 'SetupWizard',
	bre: 'MemoSetupWizard',
	_re: 'SetupWizardPage',
};
const rows = extractComponents( {
	root,
	feature: 'setup',
	exportName: 'setupComponents',
	components,
	declarations,
	dependencyNames,
} );
console.log( `Extracted ${ rows.length } named Setup Wizard React modules.` );
