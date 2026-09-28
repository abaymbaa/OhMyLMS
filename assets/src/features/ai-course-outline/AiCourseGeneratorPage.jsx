/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiCourseGeneratorPage(readRuntime) {
  return function AiCourseGeneratorPage() {
    const { L: Entitlements, React, f: Router, qae: MemoAiCourseGenerator } = readRuntime();
    return (0, Entitlements.useIsPro)() ? (
      <React.Fragment>
        <MemoAiCourseGenerator />
      </React.Fragment>
    ) : (
      <Router.C5 to={'/'} />
    );
  };
}
