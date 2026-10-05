import { createContext, useContext } from '@wordpress/element';

/** Shared editor state and actions for the accordion tree, so rows do not need long prop chains. */
export const CurriculumContext = createContext(null);
export const useCurriculum = () => useContext(CurriculumContext);
