/** One-time, scope-aware extraction. Never part of the production build. */
import fs from 'node:fs';
import path from 'node:path';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import generatorModule from '@babel/generator';
import * as t from '@babel/types';
const traverse = traverseModule.default || traverseModule,
	generate = generatorModule.default || generatorModule;
const root = path.resolve( import.meta.dirname, '..' );
const source = path.join( root, 'assets/src' );
const manifest = JSON.parse(
	fs.readFileSync( path.join( source, 'manifest.json' ) )
);
const factory = manifest.assets
	.find( ( a ) => a.output === 'assets/dist/admin/ohmylms.js' )
	.factories.find( ( f ) => f.id === '1841' );
const ast = parse(
	factory.fragments
		.map( ( f ) => fs.readFileSync( path.join( source, f ), 'utf8' ) )
		.join( '\n' )
);
const declarations = new Map();
for ( const statement of ast.program.body )
	if ( t.isVariableDeclaration( statement ) )
		for ( const d of statement.declarations )
			if ( t.isIdentifier( d.id ) ) declarations.set( d.id.name, d.init );
for ( const statement of ast.program.body )
	if ( t.isFunctionDeclaration( statement ) )
		declarations.set( statement.id.name, statement );
const unwrap = ( value ) => {
	for ( let i = 0; i < 6; i++ ) {
		if (
			t.isFunctionExpression( value ) ||
			t.isArrowFunctionExpression( value ) ||
			t.isFunctionDeclaration( value )
		)
			return value;
		if ( t.isIdentifier( value ) ) value = declarations.get( value.name );
		else if ( t.isCallExpression( value ) ) value = value.arguments[ 0 ];
		else break;
	}
	throw Error( 'Cannot resolve component' );
};
const components = new Map( [
	[ 'fU', 'Dashboard' ],
	[ 'NG', 'DashboardOverview' ],
	[ 'mG', 'EarningsSummaryCards' ],
	[ 'wG', 'DashboardStats' ],
	[ 'MG', 'TopCoursePerformance' ],
	[ '_G', 'RecentCourses' ],
	[ 'fG', 'AnalyticsLinkIcon' ],
	[ 'LG', 'CourseImportDialog' ],
	[ 'bq', 'CourseReport' ],
	[ 'vU', 'ReportMetricCard' ],
	[ 'LU', 'EarningsChart' ],
	[ 'lq', 'CourseStudentsReport' ],
	[ 'XU', 'ReportStudentCell' ],
	[ 'GU', 'StudentReminderDialog' ],
	[ 'QU', 'AnalyticsDateFilter' ],
	[ 'Wq', 'EarningsReportPage' ],
	[ 'Nq', 'EarningsReport' ],
	[ 'Sq', 'TransactionHistory' ],
] );
const output = path.join( root, 'assets/src/features/analytics' );
if (
	fs.existsSync( path.join( output, 'components.json' ) ) &&
	! process.argv.includes( '--replace-generated' )
)
	throw Error( 'Already extracted; edit the feature source directly.' );
fs.mkdirSync( output, { recursive: true } );
const dependencyNames = {
	g: 'ReactHooks',
	y: 'WordPressData',
	b: 'I18n',
	I: 'Controls',
	T: 'StoreModule',
	D: 'Buttons',
	L: 'Entitlements',
	f: 'Router',
	z: 'Notifications',
	NG: 'DashboardOverview',
	mG: 'EarningsSummaryCards',
	wG: 'DashboardStats',
	MG: 'TopCoursePerformance',
	_G: 'RecentCourses',
	yG: 'CourseListItem',
	vG: 'AnalyticsLinkIcon',
	VG: 'CourseImportDialog',
	gU: 'ReportMetricCard',
	LU: 'EarningsChart',
	cq: 'CourseStudentsReport',
	eq: 'ReportStudentCell',
	UU: 'StudentReminderDialog',
	ZU: 'AnalyticsDateFilter',
	Dq: 'EarningsReport',
	Rq: 'TransactionHistory',
	sN: 'TableModule',
	uf: 'EmptyState',
	df: 'EmptyIcon',
	YG: 'PageHeader',
	YH: 'Price',
	Nr: 'BackButton',
	lU: 'CourseCreateDialog',
};
const rows = [];
for ( const [ binding, name ] of components ) {
	const original = unwrap( declarations.get( binding ) );
	const fn = t.functionExpression(
		null,
		original.params.map( ( p ) => t.cloneNode( p, true ) ),
		t.cloneNode( original.body, true )
	);
	const componentAst = t.file( t.program( [ t.expressionStatement( fn ) ] ) );
	traverse( componentAst, {
		CallExpression( p ) {
			if (
				t.isIdentifier( p.node.callee, { name: 'h' } ) &&
				! p.scope.hasBinding( 'h' )
			)
				p.replaceWith( t.identifier( 'React' ) );
		},
	} );
	const dependencies = new Set();
	traverse( componentAst, {
		ReferencedIdentifier( p ) {
			if (
				! p.scope.hasBinding( p.node.name ) &&
				( declarations.has( p.node.name ) || p.node.name === 'n' )
			)
				dependencies.add( p.node.name );
		},
	} );
	// React is a WordPress-provided global in the original application.
	dependencies.add( 'React' );
	const dependencyList = [ ...dependencies ].sort();
	const dependencyDeclaration = t.variableDeclaration( 'const', [
		t.variableDeclarator(
			t.objectPattern(
				dependencyList.map( ( id ) =>
					t.objectProperty(
						t.identifier( id ),
						t.identifier( id ),
						false,
						true
					)
				)
			),
			t.callExpression( t.identifier( 'readRuntime' ), [] )
		),
	] );
	const named = t.functionDeclaration(
		t.identifier( name ),
		fn.params,
		fn.body
	);
	const wrapper = t.functionDeclaration(
		t.identifier( 'create' + name ),
		[ t.identifier( 'readRuntime' ) ],
		t.blockStatement( [
			t.returnStatement(
				t.functionExpression(
					t.identifier( name ),
					fn.params,
					t.blockStatement( [
						dependencyDeclaration,
						...fn.body.body,
					] )
				)
			),
		] )
	);
	const result = t.file(
		t.program( [ t.exportNamedDeclaration( wrapper ) ] )
	);
	traverse( result, {
		FunctionExpression( p ) {
			if ( p.node.id?.name !== name ) return;
			for ( const [ id, alias ] of Object.entries( dependencyNames ) )
				if (
					dependencyList.includes( id ) &&
					p.scope.hasOwnBinding( id )
				)
					p.scope.rename( id, alias );
			if (
				p.node.params.length === 1 &&
				t.isIdentifier( p.node.params[ 0 ] )
			)
				p.scope.rename( p.node.params[ 0 ].name, 'props' );
		},
	} );
	const jsxName = ( node ) => {
		if ( t.isStringLiteral( node ) && /^[a-z][\w-]*$/.test( node.value ) )
			return t.jsxIdentifier( node.value );
		if ( t.isIdentifier( node ) && ! /^[a-z]/.test( node.name ) )
			return t.jsxIdentifier( node.name );
		if (
			t.isMemberExpression( node ) &&
			! node.computed &&
			t.isIdentifier( node.object ) &&
			t.isIdentifier( node.property )
		)
			return t.jsxMemberExpression(
				t.jsxIdentifier( node.object.name ),
				t.jsxIdentifier( node.property.name )
			);
		return null;
	};
	traverse( result, {
		CallExpression: {
			exit( p ) {
				const call = p.node;
				if (
					! t.isMemberExpression( call.callee ) ||
					call.callee.property.name !== 'createElement' ||
					! t.isIdentifier( call.callee.object, { name: 'React' } )
				)
					return;
				const tag = jsxName( call.arguments[ 0 ] );
				if ( ! tag ) return;
				const attributes = [];
				const props = call.arguments[ 1 ];
				if ( t.isObjectExpression( props ) ) {
					for ( const prop of props.properties ) {
						if ( t.isSpreadElement( prop ) ) {
							attributes.push(
								t.jsxSpreadAttribute( prop.argument )
							);
							continue;
						}
						if (
							! t.isObjectProperty( prop ) ||
							prop.computed ||
							! [ 'Identifier', 'StringLiteral' ].includes(
								prop.key.type
							)
						)
							return;
						attributes.push(
							t.jsxAttribute(
								t.jsxIdentifier(
									prop.key.name ?? prop.key.value
								),
								t.jsxExpressionContainer( prop.value )
							)
						);
					}
				} else if ( props && ! t.isNullLiteral( props ) )
					attributes.push( t.jsxSpreadAttribute( props ) );
				const children = call.arguments
					.slice( 2 )
					.map( ( child ) =>
						t.isJSXElement( child )
							? child
							: t.jsxExpressionContainer( child )
					);
				p.replaceWith(
					t.jsxElement(
						t.jsxOpeningElement(
							tag,
							attributes,
							children.length === 0
						),
						children.length
							? t.jsxClosingElement( t.cloneNode( tag ) )
							: null,
						children
					)
				);
			},
		},
	} );
	const file = name + '.jsx';

	fs.writeFileSync(
		path.join( output, file ),
		'/** Reconstructed React source. Runtime dependencies are explicit in components.json. */\nimport {createElement} from "@wordpress/element";\n' +
			generate( result, { comments: true } ).code +
			'\n'
	);
	rows.push( { binding, name, file, dependencies: dependencyList } );
}
fs.writeFileSync(
	path.join( output, 'components.json' ),
	JSON.stringify( rows, null, 2 ) + '\n'
);
fs.writeFileSync(
	path.join( output, 'index.js' ),
	rows
		.map(
			( row ) => `import {create${ row.name }} from './${ row.name }';`
		)
		.join( '\n' ) +
		'\nexport const analyticsComponents={' +
		rows.map( ( row ) => `${ row.name }:create${ row.name }` ).join( ',' ) +
		'};\n'
);
console.log( `Extracted ${ rows.length } named analytics React modules.` );
