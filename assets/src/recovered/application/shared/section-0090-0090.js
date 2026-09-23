// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Uz,
  qz,
  Yz,
  Qz,
  Zz,
  $z = (null === (Uz = window.creator_lms_params) || void 0 === Uz ? void 0 : Uz.plugin_assets) + "images/",
  Kz = $z + "seal.svg",
  Jz = $z + "instructor-signature.png",
  Xz = $z + "director-signature.png",
  eB = $z + "design.svg",
  tB = {
    id: 1,
    name: "certificate title",
    slug: null,
    status: "publish",
    date_created: {
      date: "2025-01-01 22:00:07.000000",
      timezone_type: 1,
      timezone: "+00:00"
    },
    contents: {
      background_color: "#f5f5f5",
      font_family: "Arial, sans-serif",
      elements: [{
        element_type: "div",
        x_pos: 0,
        y_pos: 0,
        style: {
          "background-color": "#0E325F",
          padding: "20px",
          width: "976px",
          boxSizing: "border-box",
          height: "692px",
          overflow: "auto"
        },
        children: [{
          element_type: "div",
          x_pos: 0,
          y_pos: 0,
          style: {
            "background-color": "#FFFFFF",
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "70px",
            boxSizing: "border-box",
            minWidth: "926px"
          },
          children: [{
            element_type: "img",
            x_pos: 15,
            y_pos: 15,
            src: "".concat($z + "pattern.svg"),
            alt: "Certificate Pattern",
            style: {
              position: "absolute",
              top: "15px",
              left: "15px"
            }
          }, {
            element_type: "div",
            x_pos: 0,
            y_pos: 0,
            style: {
              "text-align": "center"
            },
            children: [{
              element_type: "h2",
              x_pos: 0,
              y_pos: 0,
              content: "Certificate",
              selector: "title_text",
              style: {
                color: "#DD9C19",
                "font-family": "Quattrocento",
                "font-size": "60px",
                "font-weight": "700",
                "line-height": "1.16",
                "text-transform": "uppercase",
                margin: "0"
              }
            }, {
              element_type: "p",
              x_pos: 0,
              y_pos: 0,
              content: "This Certificate Is Proudly Presented To",
              selector: "subtitle_text",
              style: {
                "font-size": "18px",
                "line-height": "1",
                "margin-top": "0px",
                "margin-left": "0px",
                "margin-right": "0px",
                "margin-bottom": "22px",
                color: "#426176 !important"
              }
            }, {
              element_type: "img",
              x_pos: 0,
              y_pos: 0,
              src: "".concat(eB),
              alt: "Course Instructor Signature"
            }, {
              element_type: "p",
              x_pos: 0,
              y_pos: 0,
              content: "This certificate presented to",
              selector: "description_text",
              style: {
                "font-family": "Quattrocento",
                "font-size": "18px",
                "font-weight": "700",
                "line-height": "normal",
                "letter-spacing": "0.72px",
                "text-transform": "uppercase",
                "margin-left": "0px",
                "margin-right": "0px",
                "margin-top": "30px",
                "margin-bottom": "8px",
                color: "#426176 !important"
              }
            }, {
              element_type: "p",
              x_pos: 0,
              y_pos: 0,
              content: "Name Surname",
              selector: "surname_text",
              style: {
                padding: "0 25px 10px",
                margin: "auto",
                "border-bottom": "2px dashed #A1A1AA",
                width: "fit-content",
                "font-family": "Fleur De Leah",
                "font-size": "70px",
                color: "#DD9C19 !important",
                "font-style": "normal",
                "font-weight": "400",
                "line-height": "normal",
                "word-break": "break-all"
              }
            }, {
              element_type: "p",
              x_pos: 0,
              y_pos: 0,
              content: "In recognition of their exceptional dedication and remarkable performance in successfully completing the [course_name]",
              selector: "recognition_text",
              style: {
                "text-align": "center",
                "font-size": "14px",
                "line-height": "1.57",
                width: "100%",
                "max-width": "500px",
                margin: "13px auto 20px",
                color: "#426176 !important"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              style: {
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                gap: "100px"
              },
              children: [{
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {},
                children: [{
                  element_type: "img",
                  x_pos: 0,
                  y_pos: 0,
                  src: "".concat(Jz),
                  alt: "Course Instructor Signature",
                  selector: "instructor_signature_img",
                  style: {
                    "max-width": "117px",
                    "max-height": "35px"
                  }
                }, {
                  element_type: "p",
                  x_pos: 0,
                  y_pos: 0,
                  content: "Course Instructor",
                  selector: "instructor_signature_text",
                  style: {
                    "font-size": "15px",
                    "line-height": "normal",
                    "padding-top": "10px",
                    "border-top": "1px dashed #A1A1AA",
                    "margin-top": "8px",
                    color: "#426176 !important"
                  }
                }]
              }, {
                element_type: "img",
                x_pos: 0,
                y_pos: 0,
                src: "".concat(Kz),
                alt: "Certificate Seal"
              }, {
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {},
                children: [{
                  element_type: "img",
                  x_pos: 0,
                  y_pos: 0,
                  src: "".concat(Xz),
                  alt: "Director Signature",
                  selector: "director_signature_img",
                  style: {
                    "max-width": "117px",
                    "max-height": "35px"
                  }
                }, {
                  element_type: "p",
                  x_pos: 0,
                  y_pos: 0,
                  content: "Director",
                  selector: "director_signature_text",
                  style: {
                    "font-size": "15px",
                    "line-height": "normal",
                    "padding-top": "10px",
                    "border-top": "1px dashed #A1A1AA",
                    "margin-top": "8px",
                    color: "#426176 !important"
                  }
                }]
              }]
            }]
          }]
        }]
      }]
    }
  },
  nB = (null === (qz = window.creator_lms_params) || void 0 === qz ? void 0 : qz.plugin_assets) + "images/certificate2/",
  rB = nB + "certificate-2-divider.svg",
  aB = nB + "certificate-2-best-quality-logo.svg",
  oB = nB + "director-signature.svg",
  iB = {
    id: 1,
    name: "certificate title",
    slug: null,
    status: "publish",
    date_created: {
      date: "2025-01-01 22:00:07.000000",
      timezone_type: 1,
      timezone: "+00:00"
    },
    contents: {
      background_color: "#f5f5f5",
      font_family: "DM Sans, sans-serif",
      elements: [{
        element_type: "div",
        x_pos: 0,
        y_pos: 0,
        style: {
          position: "relative",
          "background-color": "#fff",
          width: "976px",
          height: "692px",
          padding: "40px",
          boxSizing: "border-box",
          overflow: "auto"
        },
        children: [{
          element_type: "div",
          x_pos: 0,
          y_pos: 0,
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            padding: "12px",
            boxSizing: "border-box"
          },
          children: [{
            element_type: "img",
            x_pos: 0,
            y_pos: 0,
            src: "".concat(nB + "certificate-2-border.svg"),
            alt: "Certificate Border",
            style: {
              width: "100%",
              height: "100%",
              display: "block",
              margin: "0 auto"
            }
          }]
        }, {
          element_type: "div",
          x_pos: 0,
          y_pos: 0,
          style: {
            display: "flex",
            "flex-flow": "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            boxSizing: "border-box"
          },
          children: [{
            element_type: "div",
            x_pos: 0,
            y_pos: 0,
            style: {
              textAlign: "center",
              padding: "30px",
              position: "relative",
              zIndex: "1",
              boxSizing: "border-box",
              "-webkitFontSmoothing": "antialiased",
              "-mozOsxFontSmoothing": "grayscale",
              textRendering: "optimizeLegibility"
            },
            children: [{
              element_type: "h1",
              x_pos: 0,
              y_pos: 0,
              content: "Certificate",
              selector: "title_text",
              style: {
                color: "#373737",
                fontFamily: "Quattrocento",
                fontSize: "70px",
                fontWeight: "700",
                lineHeight: "0.8",
                textTransform: "uppercase",
                margin: "0",
                boxSizing: "border-box"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              content: "Of Appreciation",
              style: {
                "font-size": "20px",
                "line-height": "1",
                "font-weight": "700",
                "text-transform": "uppercase",
                margin: "15px 0 18px",
                color: "#373737",
                "font-family": "DM Sans",
                "letter-spacing": "2px",
                "box-sizing": "border-box"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              style: {
                "text-align": "center",
                "box-sizing": "border-box"
              },
              children: [{
                element_type: "img",
                x_pos: 0,
                y_pos: 0,
                src: "".concat(rB),
                alt: "Divider",
                style: {
                  display: "block",
                  margin: "0 auto"
                }
              }]
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              content: "This certificate IS presented to",
              selector: "subtitle_text",
              style: {
                "font-size": "18px",
                "line-height": "1",
                "font-weight": "700",
                margin: "42px 0 41px",
                color: "#373737",
                "letter-spacing": "1.8px",
                "text-transform": "uppercase",
                "font-family": "DM Sans",
                "box-sizing": "border-box"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              style: {
                "text-align": "center",
                "box-sizing": "border-box"
              },
              children: [{
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                content: "Name Surname",
                selector: "surname_text",
                style: {
                  padding: "0 20px 15px",
                  "border-bottom": "2px dashed #A1A1AA",
                  "font-family": "'Great Vibes', cursive",
                  "font-size": "80px",
                  color: "#DD9C19",
                  "font-weight": "400",
                  "line-height": "1",
                  "box-sizing": "border-box",
                  display: "inline-block",
                  margin: "0 50px",
                  "word-break": "break-all"
                }
              }]
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              content: "In recognition of their exceptional dedication and remarkable performance in successfully completing the [course_name]",
              selector: "recognition_text",
              style: {
                "box-sizing": "border-box",
                "font-size": "14px",
                "font-family": "'DM Sans'",
                color: "#777",
                margin: "15px auto 0",
                "line-height": "1.57",
                "font-weight": "500",
                width: "100%",
                "max-width": "608px"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              style: {
                "box-sizing": "border-box",
                display: "flex",
                "align-items": "flex-end",
                "justify-content": "space-between",
                gap: "70px",
                margin: "46px auto 0",
                width: "608px"
              },
              children: [{
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {
                  "box-sizing": "border-box",
                  width: "152px",
                  "text-align": "center",
                  color: "#777777",
                  "font-family": "'DM Sans'",
                  "font-size": "16px",
                  "font-weight": "500",
                  "line-height": "1",
                  transform: "translateY(-47px)"
                },
                children: [{
                  element_type: "span",
                  x_pos: 0,
                  y_pos: 0,
                  content: "January 10, 2025"
                }, {
                  element_type: "div",
                  x_pos: 0,
                  y_pos: 0,
                  content: "DATE",
                  style: {
                    "box-sizing": "border-box",
                    width: "152px",
                    "border-top": "1px solid #BFBFBF",
                    "padding-top": "10px",
                    "margin-top": "10px",
                    "text-align": "center",
                    color: "#373737",
                    "font-family": "'DM Sans'",
                    "font-size": "16px",
                    "font-weight": "700",
                    "line-height": "1",
                    "letter-spacing": "1.6px",
                    "text-transform": "uppercase"
                  }
                }]
              }, {
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {
                  "box-sizing": "border-box"
                },
                children: [{
                  element_type: "img",
                  x_pos: 0,
                  y_pos: 0,
                  src: "".concat(aB),
                  alt: "Certificate Seal",
                  style: {
                    display: "block",
                    margin: "0 auto",
                    "box-sizing": "border-box",
                    width: "160px",
                    height: "auto"
                  }
                }]
              }, {
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {
                  "box-sizing": "border-box",
                  width: "152px",
                  "text-align": "center",
                  transform: "translateY(-47px)"
                },
                children: [{
                  element_type: "img",
                  x_pos: 0,
                  y_pos: 0,
                  src: "".concat(oB),
                  alt: "Director Signature",
                  selector: "director_signature_img",
                  style: {
                    display: "block",
                    margin: "0 auto 10px",
                    "box-sizing": "border-box",
                    "max-width": "117px",
                    "max-height": "35px"
                  }
                }, {
                  element_type: "div",
                  x_pos: 0,
                  y_pos: 0,
                  content: "DIRECTOR",
                  selector: "director_signature_text",
                  style: {
                    "box-sizing": "border-box",
                    width: "152px",
                    "border-top": "1px solid #BFBFBF",
                    "padding-top": "10px",
                    "text-align": "center",
                    color: "#373737",
                    "font-family": "'DM Sans'",
                    "font-size": "16px",
                    "font-weight": "700",
                    "line-height": "1",
                    "letter-spacing": "1.6px",
                    "text-transform": "uppercase"
                  }
                }]
              }]
            }]
          }]
        }]
      }]
    }
  },
  lB = (null === (Yz = window.creator_lms_params) || void 0 === Yz ? void 0 : Yz.plugin_assets) + "images/certificate3/",
  cB = lB + "certificate-3-border.svg",
  uB = lB + "certificate-3-best-quality-logo.svg",
  sB = lB + "director-signature.svg",
  dB = {
    id: 1,
    name: "certificate title",
    slug: null,
    status: "publish",
    date_created: {
      date: "2025-01-01 22:00:07.000000",
      timezone_type: 1,
      timezone: "+00:00"
    },
    contents: {
      background_color: "#f5f5f5",
      font_family: "DM Sans, sans-serif",
      elements: [{
        element_type: "div",
        style: {
          position: "relative",
          height: "692px",
          width: "976px",
          "padding-top": "45px",
          "padding-right": "55px",
          "padding-bottom": "45px",
          "padding-left": "55px",
          "background-color": "rgb(255, 255, 255)",
          "box-sizing": "border-box"
        },
        x_pos: 0,
        y_pos: 0,
        children: [{
          element_type: "div",
          x_pos: 0,
          y_pos: 0,
          style: {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            "box-sizing": "border-box"
          },
          children: [{
            element_type: "img",
            src: "".concat(lB + "bg-pattern.svg"),
            alt: "bg-pattern",
            style: {
              width: "100%",
              height: "100%",
              "object-fit": "cover"
            }
          }]
        }, {
          element_type: "div",
          x_pos: 0,
          y_pos: 0,
          style: {
            display: "flex",
            "flex-direction": "column",
            "flex-wrap": "nowrap",
            "align-items": "center",
            "justify-content": "center",
            "box-sizing": "border-box",
            height: "100%",
            width: "100%",
            position: "relative",
            "z-index": "1"
          },
          children: [{
            element_type: "div",
            x_pos: 0,
            y_pos: 0,
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0px",
              left: "0px",
              "box-sizing": "border-box"
            },
            children: [{
              element_type: "img",
              src: "".concat(cB),
              alt: "border",
              x_pos: 0,
              y_pos: 0,
              style: {
                width: "100%",
                height: "100%"
              }
            }]
          }, {
            element_type: "div",
            x_pos: 0,
            y_pos: 0,
            style: {
              "text-align": "center",
              "padding-top": "30px",
              "padding-right": "30px",
              "padding-bottom": "30px",
              "padding-left": "30px",
              position: "relative",
              "z-index": "1",
              "box-sizing": "border-box",
              "-webkit-font-smoothing": "antialiased",
              "text-rendering": "optimizelegibility"
            },
            children: [{
              element_type: "h1",
              x_pos: 0,
              y_pos: 0,
              content: "Certificate",
              selector: "title_text",
              style: {
                "font-family": "Quattrocento, serif",
                "font-size": "70px",
                "margin-top": "0px",
                "margin-right": "0px",
                "margin-bottom": "0px",
                "margin-left": "0px",
                "font-weight": "700",
                color: "rgb(12, 117, 123)",
                "text-transform": "uppercase",
                "box-sizing": "border-box",
                "line-height": "0.8"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              content: "This diploma is presented to",
              selector: "subtitle_text",
              style: {
                "margin-top": "50px",
                "margin-right": "0px",
                "margin-bottom": "0px",
                "margin-left": "0px",
                "font-size": "18px",
                color: "rgb(55, 55, 55)",
                "font-weight": "500",
                "line-height": "1",
                "font-family": "DM Sans",
                "box-sizing": "border-box"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              style: {
                "text-align": "center",
                "box-sizing": "border-box",
                "margin-top": "22px",
                "margin-right": "0px",
                "margin-bottom": "0px",
                "margin-left": "0px"
              },
              children: [{
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                content: "Name Surname",
                selector: "surname_text",
                style: {
                  "font-family": '"Dancing Script"',
                  "font-size": "80px",
                  color: "rgb(12, 117, 123)",
                  "font-weight": "400",
                  "line-height": "1",
                  "box-sizing": "border-box",
                  "border-bottom-width": "2px",
                  "border-bottom-style": "dashed",
                  "border-bottom-color": "rgb(161, 161, 170)",
                  display: "inline-block",
                  "padding-top": "0px",
                  "padding-right": "20px",
                  "padding-bottom": "15px",
                  "padding-left": "20px",
                  margin: "0 50px",
                  "word-break": "break-all"
                }
              }]
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              content: "In recognition of their exceptional dedication and remarkable performance in successfully completing the [course_name]",
              selector: "recognition_text",
              style: {
                "box-sizing": "border-box",
                "font-size": "14px",
                "font-family": '"DM Sans"',
                color: "rgb(119, 119, 119)",
                "margin-top": "20px",
                "margin-right": "auto",
                "margin-bottom": "0px",
                "margin-left": "auto",
                "line-height": "1.57",
                "font-weight": "500",
                width: "100%",
                "max-width": "608px"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              style: {
                "box-sizing": "border-box",
                display: "flex",
                "align-items": "flex-end",
                "justify-content": "space-between",
                "row-gap": "70px",
                "column-gap": "70px",
                "margin-top": "50px",
                "margin-right": "auto",
                "margin-bottom": "0px",
                "margin-left": "auto",
                width: "608px"
              },
              children: [{
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {
                  "box-sizing": "border-box",
                  width: "152px",
                  "text-align": "center",
                  color: "rgb(119, 119, 119)",
                  "font-family": '"DM Sans"',
                  "font-size": "16px",
                  "font-weight": "500",
                  "line-height": "1",
                  transform: "translateY(-58px)"
                },
                children: [{
                  element_type: "span",
                  x_pos: 0,
                  y_pos: 0,
                  content: "January 10, 2025",
                  style: {
                    display: "block"
                  }
                }, {
                  element_type: "div",
                  x_pos: 0,
                  y_pos: 0,
                  content: "DATE",
                  style: {
                    "box-sizing": "border-box",
                    width: "152px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "rgb(191, 191, 191)",
                    "padding-top": "10px",
                    "margin-top": "10px",
                    "text-align": "center",
                    color: "rgb(55, 55, 55)",
                    "font-family": '"DM Sans"',
                    "font-size": "16px",
                    "font-weight": "700",
                    "line-height": "1",
                    "letter-spacing": "1.6px",
                    "text-transform": "uppercase"
                  }
                }]
              }, {
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {
                  "box-sizing": "border-box"
                },
                children: [{
                  element_type: "img",
                  x_pos: 0,
                  y_pos: 0,
                  src: "".concat(uB),
                  alt: "Certificate Seal",
                  style: {
                    display: "block",
                    "margin-top": "0px",
                    "margin-right": "auto",
                    "margin-bottom": "0px",
                    "margin-left": "auto",
                    "box-sizing": "border-box",
                    width: "160px",
                    height: "auto"
                  }
                }]
              }, {
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {
                  "box-sizing": "border-box",
                  width: "152px",
                  "text-align": "center",
                  transform: "translateY(-58px)"
                },
                children: [{
                  element_type: "img",
                  x_pos: 0,
                  y_pos: 0,
                  src: "".concat(sB),
                  alt: "Director Signature",
                  selector: "director_signature_img",
                  style: {
                    display: "block",
                    "margin-top": "0px",
                    "margin-right": "auto",
                    "margin-bottom": "10px",
                    "margin-left": "auto",
                    "box-sizing": "border-box",
                    "max-width": "117px",
                    "max-height": "35px"
                  }
                }, {
                  element_type: "div",
                  x_pos: 0,
                  y_pos: 0,
                  content: "DIRECTOR",
                  selector: "director_signature_text",
                  style: {
                    "box-sizing": "border-box",
                    width: "152px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "rgb(191, 191, 191)",
                    "padding-top": "10px",
                    "text-align": "center",
                    color: "rgb(55, 55, 55)",
                    "font-family": '"DM Sans"',
                    "font-size": "16px",
                    "font-weight": "700",
                    "line-height": "1",
                    "letter-spacing": "1.6px",
                    "text-transform": "uppercase"
                  }
                }]
              }]
            }]
          }]
        }]
      }]
    }
  },
  mB = (null === (Qz = window.creator_lms_params) || void 0 === Qz ? void 0 : Qz.plugin_assets) + "images/certificate4/",
  pB = mB + "certificate-4-best-quality-logo.svg",
  fB = mB + "director-signature.svg",
  vB = {
    id: 1,
    name: "certificate title",
    slug: null,
    status: "publish",
    date_created: {
      date: "2025-01-01 22:00:07.000000",
      timezone_type: 1,
      timezone: "+00:00"
    },
    contents: {
      background_color: "#f5f5f5",
      font_family: "DM Sans, sans-serif",
      elements: [{
        element_type: "div",
        style: {
          position: "relative",
          height: "692px",
          width: "976px",
          "padding-top": "45px",
          "padding-right": "55px",
          "padding-bottom": "45px",
          "padding-left": "55px",
          "background-color": "rgb(255, 255, 255)",
          "box-sizing": "border-box"
        },
        x_pos: 0,
        y_pos: 0,
        children: [{
          element_type: "div",
          x_pos: 0,
          y_pos: 0,
          style: {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            "box-sizing": "border-box"
          },
          children: [{
            element_type: "img",
            src: "".concat(mB + "bg-pattern.svg"),
            alt: "bg-pattern",
            style: {
              width: "100%",
              height: "100%",
              "object-fit": "cover"
            }
          }]
        }, {
          element_type: "div",
          x_pos: 0,
          y_pos: 0,
          style: {
            display: "flex",
            "flex-direction": "column",
            "flex-wrap": "nowrap",
            "align-items": "center",
            "justify-content": "center",
            "box-sizing": "border-box",
            height: "100%",
            width: "100%",
            position: "relative",
            "z-index": "1"
          },
          children: [{
            element_type: "div",
            x_pos: 0,
            y_pos: 0,
            style: {
              "text-align": "center",
              "padding-top": "30px",
              "padding-right": "30px",
              "padding-bottom": "30px",
              "padding-left": "30px",
              position: "relative",
              "z-index": "1",
              "box-sizing": "border-box",
              "-webkit-font-smoothing": "antialiased",
              "text-rendering": "optimizelegibility"
            },
            children: [{
              element_type: "h1",
              x_pos: 0,
              y_pos: 0,
              content: "Certificate",
              selector: "title_text",
              style: {
                "font-family": "'Raleway'",
                "font-size": "70px",
                margin: "0",
                "font-weight": "600",
                color: "#296780",
                "text-transform": "uppercase",
                "box-sizing": "border-box",
                "line-height": "0.8",
                "letter-spacing": "2.8px"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              content: "This diploma is presented to",
              selector: "subtitle_text",
              style: {
                margin: "50px 0 0",
                "font-size": "18px",
                color: "#373737",
                "font-weight": "500",
                "line-height": "1",
                "text-transform": "capitalize",
                "font-family": "'DM Sans'",
                "box-sizing": "border-box"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              style: {
                "text-align": "center",
                "box-sizing": "border-box",
                "margin-top": "22px",
                "margin-right": "0px",
                "margin-bottom": "0px",
                "margin-left": "0px"
              },
              children: [{
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                content: "Name Surname",
                selector: "surname_text",
                style: {
                  "font-family": "'Dancing Script'",
                  color: "#BAD432",
                  "font-weight": "400",
                  "line-height": "1",
                  "box-sizing": "border-box",
                  "font-size": "70px",
                  "border-bottom": "1px solid #CACDD4",
                  display: "inline-block",
                  padding: "0 20px 15px",
                  margin: "0 50px",
                  width: "80%",
                  "word-break": "break-all"
                }
              }]
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              content: "In recognition of their exceptional dedication and remarkable performance in successfully completing the [course_name]",
              selector: "recognition_text",
              style: {
                "box-sizing": "border-box",
                "font-size": "14px",
                "font-family": "'DM Sans'",
                color: "#777",
                margin: "16px auto 0",
                "line-height": "1.57",
                "font-weight": "500",
                width: "100%",
                "max-width": "500px"
              }
            }, {
              element_type: "div",
              x_pos: 0,
              y_pos: 0,
              style: {
                "box-sizing": "border-box",
                display: "flex",
                "align-items": "flex-end",
                "justify-content": "space-between",
                "row-gap": "70px",
                "column-gap": "70px",
                "margin-top": "50px",
                "margin-right": "auto",
                "margin-bottom": "0px",
                "margin-left": "auto",
                width: "608px"
              },
              children: [{
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {
                  "box-sizing": "border-box",
                  width: "152px",
                  "text-align": "center",
                  color: "rgb(119, 119, 119)",
                  "font-family": '"DM Sans"',
                  "font-size": "16px",
                  "font-weight": "500",
                  "line-height": "1",
                  transform: "translateY(-70px)"
                },
                children: [{
                  element_type: "span",
                  x_pos: 0,
                  y_pos: 0,
                  content: "January 10, 2025",
                  style: {
                    display: "block"
                  }
                }, {
                  element_type: "div",
                  x_pos: 0,
                  y_pos: 0,
                  content: "DATE",
                  style: {
                    "box-sizing": "border-box",
                    width: "152px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#CACDD4",
                    "padding-top": "10px",
                    "margin-top": "10px",
                    "text-align": "center",
                    color: "rgb(55, 55, 55)",
                    "font-family": '"DM Sans"',
                    "font-size": "16px",
                    "font-weight": "700",
                    "line-height": "1",
                    "letter-spacing": "1.6px",
                    "text-transform": "uppercase"
                  }
                }]
              }, {
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {
                  "box-sizing": "border-box"
                },
                children: [{
                  element_type: "img",
                  x_pos: 0,
                  y_pos: 0,
                  src: "".concat(pB),
                  alt: "Certificate Seal",
                  style: {
                    display: "block",
                    "margin-top": "0px",
                    "margin-right": "auto",
                    "margin-bottom": "0px",
                    "margin-left": "auto",
                    "box-sizing": "border-box",
                    width: "160px",
                    height: "auto"
                  }
                }]
              }, {
                element_type: "div",
                x_pos: 0,
                y_pos: 0,
                style: {
                  "box-sizing": "border-box",
                  width: "152px",
                  "text-align": "center",
                  transform: "translateY(-70px)"
                },
                children: [{
                  element_type: "img",
                  x_pos: 0,
                  y_pos: 0,
                  src: "".concat(fB),
                  alt: "Director Signature",
                  selector: "director_signature_img",
                  style: {
                    display: "block",
                    "margin-top": "0px",
                    "margin-right": "auto",
                    "margin-bottom": "10px",
                    "margin-left": "auto",
                    "box-sizing": "border-box",
                    "max-width": "117px",
                    "max-height": "35px"
                  }
                }, {
                  element_type: "div",
                  x_pos: 0,
                  y_pos: 0,
                  content: "DIRECTOR",
                  selector: "director_signature_text",
                  style: {
                    "box-sizing": "border-box",
                    width: "152px",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#CACDD4",
                    "padding-top": "10px",
                    "text-align": "center",
                    color: "rgb(55, 55, 55)",
                    "font-family": '"DM Sans"',
                    "font-size": "16px",
                    "font-weight": "700",
                    "line-height": "1",
                    "letter-spacing": "1.6px",
                    "text-transform": "uppercase"
                  }
                }]
              }]
            }]
          }]
        }]
      }]
    }
  },
  gB = (null === (Zz = window.creator_lms_params) || void 0 === Zz ? void 0 : Zz.plugin_assets) + "images/",
  hB = [{
    id: 1,
    image_src: gB + "default-certificate-template.png",
    isPaid: !1,
    contents: tB.contents,
    editor: "classic"
  }, {
    id: 2,
    image_src: gB + "certificate2/certificate-2-thumbnail.webp",
    isPaid: !1,
    contents: iB.contents,
    editor: "classic"
  }, {
    id: 3,
    image_src: gB + "certificate3/certificate-3-thumbnail.webp",
    isPaid: !1,
    contents: dB.contents,
    editor: "classic"
  }, {
    id: 4,
    image_src: gB + "certificate4/certificate-4-thumbnail.webp",
    isPaid: !1,
    contents: vB.contents,
    editor: "classic"
  }],
  yB = function () {
    return React.createElement("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("g", {
      transform: "translate(0 1)",
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("ellipse", {
      fill: "#f5f5f5",
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }), React.createElement("g", {
      fillRule: "nonzero",
      stroke: "#d9d9d9"
    }, React.createElement("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }), React.createElement("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: "#fafafa"
    }))));
  };
