/** @jsx createElement */
import { createElement, useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { Button, Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { editorBackPath } from '../content-hub/editorNavigation.mjs';

/**
 * Resolve legacy editor routes without changing lesson IDs or extension editors.
 *
 * @param {Object} props Component properties.
 * @return {Element} Navigation status or an extension editor.
 */
export function NativeLessonRoute( props ) {
	const {
		id,
		chapterId,
		legacyEditor: LegacyEditor,
		onLessonLoaded,
		setLocalData,
		refreshChapter,
		setOpenModal,
	} = props;
	const [ lesson, setLesson ] = useState( null );
	const [ error, setError ] = useState( '' );
	useEffect( () => {
		let active = true;
		apiFetch( { path: `/ohmylms/v1/lessons/${ Number( id ) }` } )
			.then( ( data ) => {
				if ( ! active ) {
					return;
				}
				setLesson( data );
				onLessonLoaded?.( data );
				setLocalData?.( { description: data.description || '' } );
				if ( data.native_editor_url && ! chapterId ) {
					const url = new URL(
						data.native_editor_url,
						window.location.href
					);
					url.searchParams.set(
						'ohmylms_return',
						editorBackPath(
							window.location.hash,
							'/content-hub/lessons'
						)
					);
					window.location.replace( url.href );
				}
			} )
			.catch( ( failure ) => active && setError( failure.message ) );
		return () => {
			active = false;
		};
	}, [ id, chapterId, onLessonLoaded, setLocalData ] );
	if ( error ) {
		return (
			<Notice status="error" isDismissible={ false }>
				{ error }
			</Notice>
		);
	}
	if ( ! lesson ) {
		return <Spinner />;
	}
	if ( ! lesson.native_editor_url ) {
		return <LegacyEditor { ...props } />;
	}
	const url = new URL( lesson.native_editor_url, window.location.href );
	url.searchParams.set( 'ohmylms_return', window.location.hash.slice( 1 ) );
	return (
		<div>
			<p>
				{ __(
					'Edit this lesson with the WordPress block editor.',
					'ohmylms'
				) }
			</p>
			<Button
				variant="primary"
				href={ url.href }
				onClick={ () => {
					if ( chapterId && refreshChapter ) {
						window.addEventListener(
							'focus',
							() => refreshChapter( chapterId ),
							{ once: true }
						);
					}
					setOpenModal?.( false );
				} }
				target="_blank"
				rel="noopener noreferrer"
			>
				{ __( 'Open lesson editor', 'ohmylms' ) }
			</Button>
		</div>
	);
}
