/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createMembershipsPage(readRuntime) {
  return function MembershipsPage() {
    const { $8: MembershipList, HG, React } = readRuntime();
    return (
      HG('creator-lms', 'memberships'),
      (
        <React.Fragment>
          <MembershipList />
        </React.Fragment>
      )
    );
  };
}
