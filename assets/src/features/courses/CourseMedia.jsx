/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createCourseMedia(readRuntime) {
  return function CourseMedia(props) {
    const {
      Bp,
      Er,
      Gp,
      He,
      I: Controls,
      Ie,
      L: Entitlements,
      M,
      Np,
      React,
      T: StoreModule,
      Up,
      Vp,
      Wp,
      b: I18n,
      g: ReactHooks,
      gr,
      wr,
      y: WordPressData
    } = readRuntime();
    var t = (0, Entitlements.useIsPro)();
    M().noConflict();
    var videoSrc = props.videoSrc,
      imageSrc = props.imageSrc,
      handleRemoveMedia = props.handleRemoveMedia,
      handleUploadComplete = props.handleUploadComplete,
      i = (0, WordPressData.useDispatch)(StoreModule.default),
      l = Up((0, ReactHooks.useState)(imageSrc), 2),
      c = l[0],
      u = l[1],
      s = Up((0, ReactHooks.useState)(videoSrc), 2),
      d = s[0],
      m = s[1],
      p = Up((0, ReactHooks.useState)(null), 2),
      f = p[0],
      v = p[1],
      h = Up((0, ReactHooks.useState)(!1), 2),
      _ = h[0],
      w = h[1],
      E = Up((0, ReactHooks.useState)(!1), 2),
      S = E[0],
      R = E[1],
      x = Up((0, ReactHooks.useState)(null), 2),
      C = x[0],
      P = x[1],
      O = (0, ReactHooks.useRef)(null),
      k = (0, ReactHooks.useRef)(null),
      j = Up((0, ReactHooks.useState)(!1), 2),
      A = j[0],
      F = j[1],
      N = Up((0, ReactHooks.useState)(!1), 2),
      D = N[0],
      W = N[1],
      z = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAISettings();
      }, []),
      B = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAllIntegrations();
      }, []),
      V = function () {
        var e;
        w(!1), null === (e = O.current) || void 0 === e || e.pause(), O.current.currentTime = 0;
      },
      H = function (e) {
        var t = ["jpg", "jpeg", "png", "gif", "svg", "webp"],
          n = ["mp4", "mov", "avi", "mkv"],
          r = ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp"].join(","),
          a = ["video/mp4", "video/quicktime", "video/x-msvideo", "video/x-matroska"].join(","),
          i = wp.media({
            title: "Select or Upload Media",
            button: {
              text: "Use this media"
            },
            multiple: !1,
            library: {
              type: e
            }
          });
        i.on("open", function () {
          i.content.mode("upload"), i.on("uploader:ready", function () {
            document.querySelectorAll('.moxie-shim-html5 input[type="file"]').forEach(function (t) {
              t.setAttribute("tabIndex", "-1"), t.setAttribute("multiple", "false"), t.setAttribute("aria-hidden", "true"), "video" === e ? t.setAttribute("accept", a) : t.setAttribute("accept", r);
            });
          });
        }), i.on("select", function () {
          var r = i.state().get("selection").first(),
            a = r.get("filesizeInBytes"),
            l = r.toJSON(),
            c = t.some(function (e) {
              return l.url.toLowerCase().endsWith(e);
            });
          "video" === e && (c = n.some(function (e) {
            return l.url.toLowerCase().endsWith(e);
          }));
          var s = "image" === e && "image" === l.type || "video" === e && "video" === l.type || l.type === e;
          "image" === e && a > 5242880 ? alert((0, I18n.__)("Image exceeds the 5MB size limit. Please choose a smaller file.", "ohmylms")) : c && s ? ("image" === e ? u(l.url) : "video" === e && m(l.url), handleUploadComplete && handleUploadComplete(l, e)) : alert("Invalid file type or media type.");
        }), i.open();
      },
      G = function (e) {
        v(e);
      },
      U = function (e) {
        handleRemoveMedia && handleRemoveMedia(e), u(null), m(null), v(null);
      };
    (0, ReactHooks.useEffect)(function () {
      imageSrc && u(imageSrc), videoSrc && m(videoSrc);
    }, [imageSrc, videoSrc]), (0, ReactHooks.useEffect)(function () {
      var e = function (e) {
        !A || !k.current || k.current.contains(e.target) || e.target.closest(".omlms-history-list") || e.target.closest(".omlms-tooltip-box") || e.target.closest(".omlms-ai-image-prompt") || (F(!1), G(null));
      };
      return document.addEventListener("mousedown", e), function () {
        document.removeEventListener("mousedown", e);
      };
    }, [A, k]);
    var q = {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      borderRadius: "8px"
    };
    return <React.Fragment><div className={"omlms-course-thumb-wrapper"}><div className={"omlms-course-thumb-media"}>{d ? <React.Fragment><video ref={O} src={d} controls={_} controlsList={"nodownload noplaybackrate"} poster={c || ""} disablePictureInPicture={!0} onPause={V} onEnded={V} /></React.Fragment> : f ? <React.Fragment><img style={q} src={f} alt={"Course Thumb"} /></React.Fragment> : c ? <React.Fragment><img style={q} src={c} alt={"Course Thumb"} /></React.Fragment> : <React.Fragment><div className={"omlms-course-thumb-placeholder"}><svg fill={"none"} width={"88"} height={"88"} viewBox={"0 0 88 88"} xmlns={"http://www.w3.org/2000/svg"}><g clipPath={"url(#clip0_3016_26872)"}><path fill={"#DEE0E4"} d={"M38.5 13.75a13.75 13.75 0 11-27.5 0 13.75 13.75 0 0127.5 0zm23.237 22.291a2.75 2.75 0 00-3.173.512L38.159 62.458l-14.63-15.246a2.75 2.75 0 00-3.465.341L.01 71.5v11a5.5 5.5 0 005.5 5.5h77a5.5 5.5 0 005.5-5.5V57.75L61.737 36.041z"} /></g><defs><clipPath id={"clip0_3016_26872"}><path fill={"#fff"} d={"M0 0h88v88H0z"} /></clipPath></defs></svg></div></React.Fragment>}{!_ && <div className={"omlms-course-thumb-controls"}>{(c || d) && <div className={"clrms-course-thumb-controls-btns"}>{c && d ? <Controls.TooltipWP text={(0, I18n.__)("Delete Thumb Image/Video", "ohmylms")}><Controls.DropdownMenuWP controls={[{
                  title: (0, I18n.__)("Delete Image", "ohmylms"),
                  key: "delete-image",
                  onClick: function () {
                    P({
                      type: "image",
                      title: (0, I18n.__)("Remove Image", "ohmylms"),
                      description: (0, I18n.__)("Are you sure you want to remove this image?", "ohmylms")
                    }), R(!0);
                  }
                }, {
                  title: (0, I18n.__)("Delete Video", "ohmylms"),
                  key: "delete-video",
                  onClick: function () {
                    P({
                      type: "video",
                      title: (0, I18n.__)("Remove Video", "ohmylms"),
                      description: (0, I18n.__)("Are you sure you want to remove this video?", "ohmylms")
                    }), R(!0);
                  }
                }]} icon={<Vp />} /></Controls.TooltipWP> : <React.Fragment><Controls.TooltipWP text={(0, I18n.__)("Delete Thumb ".concat(d ? "Video" : "Image"), "ohmylms")}>{React.createElement(gr, {
                    onOK: function () {
                      return U(d ? "video" : "image");
                    },
                    alertTitle: (0, I18n.__)("Remove the ".concat(d ? "video" : "image"), "ohmylms"),
                    alertDescription: (0, I18n.__)("Are you sure you want to remove this ".concat(d ? "video" : "image", "?"), "ohmylms"),
                    iconOnly: !0,
                    Icon: Vp
                  })}</Controls.TooltipWP></React.Fragment>}</div>}{d && <React.Fragment><Controls.FlexWP justify={"flex-start"} align={"center"} gap={2} className={"omlms-thumb-video-player"}><Controls.TooltipWP text={(0, I18n.__)("Play Thumb Video", "ohmylms")}><Controls.ButtonWP variant={"text"} icon={<Gp />} onClick={function () {
                    var e;
                    w(!0), null === (e = O.current) || void 0 === e || e.play();
                  }} padding={"0px"} /></Controls.TooltipWP><span className={"omlms-thumb-video-player-line"} /></Controls.FlexWP></React.Fragment>}</div>}</div><Controls.SpacerWP marginBottom={1.5} /><Controls.FlexWP justify={"flex-start"} gap={1} className={"omlms-course-thumb-actions"}>{d && c && <React.Fragment><Controls.TooltipWP text={(0, I18n.__)("Replace Thumbnail Image/Video", "ohmylms")}><Controls.DropdownMenuWP controls={[{
                title: (0, I18n.__)("Replace Image", "ohmylms"),
                key: "replace-image",
                onClick: function () {
                  return H("image");
                }
              }, {
                title: (0, I18n.__)("Replace Video", "ohmylms"),
                key: "replace-video",
                onClick: function () {
                  return H("video");
                }
              }]} icon={<Bp />} /></Controls.TooltipWP></React.Fragment>}{(c || d) && !(c && d) && <Controls.TooltipWP text={(0, I18n.__)("Replace Thumbnail ".concat(d ? "Video" : "image"), "ohmylms")}><Controls.ButtonWP variant={"text"} icon={<Bp />} onClick={function () {
              return H(d ? "video" : "image");
            }} padding={"0px"} /></Controls.TooltipWP>}{!c && <React.Fragment><Controls.TooltipWP text={(0, I18n.__)("Upload Thumbnail Image", "ohmylms")}><Controls.ButtonWP variant={"text"} icon={<Np />} onClick={function () {
                return H("image");
              }} padding={"0px"} /></Controls.TooltipWP></React.Fragment>}{!d && <React.Fragment><Controls.TooltipWP text={(0, I18n.__)("Upload Thumbnail Video", "ohmylms")}><Controls.ButtonWP variant={"text"} icon={<Wp />} onClick={function () {
                return H("video");
              }} padding={"0px"} /></Controls.TooltipWP></React.Fragment>}<Controls.TooltipWP text={(0, I18n.__)("Generate Image with AI", "ohmylms")}><Controls.ButtonWP variant={"text"} icon={<wr.A />} onClick={function () {
              return function () {
                var e;
                if (t) return null != B && null !== (e = B.ai_model) && void 0 !== e && e.is_enable ? null != z && z.self || "anthropic" !== (null == z ? void 0 : z.platform) ? null != z && z.self || null != z && z.api_key ? void F(!0) : (i.updateProModalTitle((0, I18n.__)("Please configure AI Model API Key", "ohmylms")), i.updateProModalContent((0, I18n.__)("Go to addons page and configure the AI Model API Key to use this feature.", "ohmylms")), i.updateProModalButtonText(null), void W(!0)) : (i.updateProModalTitle((0, I18n.__)("Anthropic does not support image generation", "ohmylms")), i.updateProModalContent((0, I18n.__)("Image generation is not available with Anthropic. Please use a different model (Self hosted or Open AI).", "ohmylms")), i.updateProModalButtonText(null), void W(!0)) : (W(!0), i.updateProModalTitle((0, I18n.__)("Please enable AI Suite", "ohmylms")), i.updateProModalContent((0, I18n.__)("Go to addons page and enable the AI Suite to use this feature. You can use self hosted AI model, Open AI, Anthropic or Gemini.", "ohmylms")), void i.updateProModalButtonText(null));
                W(!0);
              }();
            }} padding={"0px"} /></Controls.TooltipWP>{A && <Er.default promptBoxRef={k} onPreview={G} onInsert={function (e) {
            handleUploadComplete({
              id: null == e ? void 0 : e.id,
              url: null == e ? void 0 : e.source_url
            }, "image"), v(null), F(!1);
          }} onClose={function () {
            return F(!1);
          }} />}</Controls.FlexWP></div>{D && <React.Fragment><He.default isOpen={D} onClose={W} /></React.Fragment>}{S && <Ie title={null == C ? void 0 : C.title} description={null == C ? void 0 : C.description} onClose={function () {
        P(null), R(!1);
      }} onDelete={function () {
        U(null == C ? void 0 : C.type), R(!1), P(null);
      }} isOpen={S} isDelete={!0} />}</React.Fragment>;
  };
}
