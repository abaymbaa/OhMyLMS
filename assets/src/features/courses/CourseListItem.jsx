/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseListItem(readRuntime) {
  return function CourseListItem(props) {
    const {
      Ge,
      I: Controls,
      React,
      SB,
      b: I18n,
      f: Router,
      g: ReactHooks,
      gG,
      pG,
      v,
      vG,
    } = readRuntime();
    var t,
      course = props.course,
      r = (props.isHover, (0, Router.Zp)()),
      a = (0, ReactHooks.useCallback)(
        function () {
          r('/course-edit/'.concat(null == course ? void 0 : course.id));
        },
        [null == course ? void 0 : course.id, r],
      ),
      o = (0, ReactHooks.useCallback)(
        function () {
          r('/course/'.concat(null == course ? void 0 : course.id, '/report'));
        },
        [null == course ? void 0 : course.id, r],
      );
    return (
      <React.Fragment>
        <Controls.FlexWP align={'start'} justify={'start'} gap={4}>
          <v.Link
            to={'/course-edit/'.concat(null == course ? void 0 : course.id)}
            className={'ohmylms-td-thumbnail'}
          >
            {null != course && course.image_src ? (
              <gG.A shape={'square'} src={course.image_src} size={100} />
            ) : null != course && course.video_src ? (
              <video src={course.video_src} />
            ) : (
              <span>
                <SB />
              </span>
            )}
          </v.Link>
          <Controls.FlexWP direction={'column'} className={'ohmylms-td-thumbnail-title'}>
            <v.Link
              to={'/course-edit/'.concat(null == course ? void 0 : course.id)}
              title={null == course ? void 0 : course.name}
              style={{
                textDecoration: 'none',
              }}
            >
              <Controls.TextWP
                as={'span'}
                color={'#000d25'}
                size={16}
                numberOfLines={2}
                truncate={!0}
              >
                {Ge(
                  null !== (t = null == course ? void 0 : course.name) && void 0 !== t
                    ? t
                    : null == course
                      ? void 0
                      : course.title,
                )}
              </Controls.TextWP>
            </v.Link>
            <Controls.FlexWP
              align={'center'}
              justify={'flex-start'}
              gap={1}
              className={'ohmylms-td-thumbnail-title-actions'}
            >
              <Controls.ButtonWP
                onClick={a}
                label={(0, I18n.__)('Edit', 'ohmylms')}
                variant={'text'}
                style={{
                  height: '26px',
                  padding: '5px',
                }}
              >
                <pG.A />
              </Controls.ButtonWP>
              <Controls.ButtonWP
                onClick={o}
                icon={React.createElement(vG, null)}
                label={(0, I18n.__)('Analytics', 'ohmylms')}
                variant={'text'}
                style={{
                  height: '26px',
                }}
              />
            </Controls.FlexWP>
          </Controls.FlexWP>
        </Controls.FlexWP>
      </React.Fragment>
    );
  };
}
