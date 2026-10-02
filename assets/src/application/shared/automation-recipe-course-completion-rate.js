// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var JN,
  XN,
  eD,
  tD,
  nD,
  rD,
  aD,
  oD,
  iD,
  lD,
  cD,
  uD,
  sD,
  dD,
  mD,
  pD,
  fD,
  vD,
  gD,
  hD,
  yD = [{
    id: 1,
    name: (0, b.__)("Submit a assignment", "ohmylms"),
    automationDescription: (0, b.__)("When a user submit a assignment then this automation will run.", "ohmylms"),
    icon: '<svg fill="none" width="20" height="20" viewBox="0 0 20 20"><path stroke="#5D56EA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.4 14.95V6.4L10 1H2.8A1.8 1.8 0 001 2.8v14.4A1.8 1.8 0 002.8 19H10"/><path stroke="#5D56EA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 1v5.4h5.4m-3.6 4.5H4.6m7.2 3.6H4.6m1.8-7.2H4.6M19 15l-4.125 4L13 17.182"/></svg>',
    automation_data: {
      id: "154",
      name: (0, b.__)("Submit Assignment", "ohmylms"),
      author: "1",
      trigger_name: "lms_submit_assignment",
      status: "active",
      steps: [{
        id: "135",
        automation_id: "154",
        step_id: "qdp0l",
        key: "lms_submit_assignment",
        type: "trigger",
        settings: {
          ohmylms_settings: {
            assignments: []
          }
        },
        next_step_id: "lrhfd",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "136",
        automation_id: "154",
        step_id: "lrhfd",
        key: "delay",
        type: "action",
        settings: {
          delay_settings: {
            delay: "10",
            unit: "minutes"
          }
        },
        next_step_id: "w31sz",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "137",
        automation_id: "154",
        step_id: "w31sz",
        key: "sendMail",
        type: "action",
        settings: {
          message_data: {
            subject: "Congratulations on your [assignment_name] assignment submission!",
            sender_email: null === (JN = window) || void 0 === JN || null === (JN = JN.MRM_Vars) || void 0 === JN || null === (JN = JN.email_settings) || void 0 === JN ? void 0 : JN.from_email,
            sender_name: null === (XN = window) || void 0 === XN || null === (XN = XN.MRM_Vars) || void 0 === XN || null === (XN = XN.email_settings) || void 0 === XN ? void 0 : XN.from_name,
            reply_name: null === (eD = window) || void 0 === eD || null === (eD = eD.MRM_Vars) || void 0 === eD || null === (eD = eD.email_settings) || void 0 === eD ? void 0 : eD.reply_name,
            reply_email: null === (tD = window) || void 0 === tD || null === (tD = tD.MRM_Vars) || void 0 === tD || null === (tD = tD.email_settings) || void 0 === tD ? void 0 : tD.reply_email,
            email_preview_text: "",
            body: "",
            json_body: "",
            make_transactional: !1
          }
        },
        next_step_id: "l28gzh",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "138",
        automation_id: "154",
        step_id: "l28gzh",
        key: "stopAutomation",
        type: "action",
        settings: [],
        next_step_id: "a:0:{}",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }]
    }
  }],
  bD = [{
    id: 1,
    name: (0, b.__)("Course Enrollment", "ohmylms"),
    automationDescription: (0, b.__)("When a user enroll to a course this automation will run.", "ohmylms"),
    icon: '<svg fill="none" width="24" height="25" viewBox="0 0 24 25"><path fill="#7A8B9A" fill-rule="evenodd" d="M1.792 5.261a1.379 1.379 0 000 2.495l1.973.932v5.41c0 1.023.333 2.166 1.303 2.87 1.223.883 3.45 1.96 6.983 1.96 3.533 0 5.754-1.084 6.983-1.96.97-.701 1.302-1.835 1.302-2.87v-5.41l1.38-.653v6.058a.69.69 0 001.38 0v-7.59a1.38 1.38 0 00-.79-1.247L14.414 1.53a5.52 5.52 0 00-4.72 0L1.8 5.256l-.008.005zm3.353 8.832v-4.76l4.54 2.152a5.52 5.52 0 004.72 0l4.54-2.153v4.761c0 .768-.248 1.394-.731 1.74-1 .72-2.94 1.71-6.169 1.71-3.229 0-5.175-.982-6.168-1.71-.482-.349-.732-.98-.732-1.74zM10.28 2.777a4.126 4.126 0 013.533 0l7.893 3.726-7.893 3.726a4.127 4.127 0 01-3.533 0L2.385 6.503l7.894-3.726z" clip-rule="evenodd"/><path fill="#7A8B9A" d="M1.792 5.261l.042.09a.1.1 0 00.013-.006l-.055-.084zM1 6.51h.1H1zm.792 1.247l.043-.09-.043.09zm1.973.932h.1a.1.1 0 00-.057-.09l-.043.09zm1.303 8.28l-.059.08v.001l.059-.081zm13.966 0l.058.081-.058-.081zm1.302-8.28l-.042-.09a.1.1 0 00-.058.09h.1zm1.38-.653h.1a.1.1 0 00-.142-.09l.042.09zm1.38-1.532h-.1.1zm-.79-1.247l.044-.09-.043.09zM14.414 1.53l-.042.09.042-.09zm-4.72 0l.043.09-.042-.09zM1.8 5.256l-.043-.09a.1.1 0 00-.012.007l.055.083zm3.345 4.076l.043-.09a.1.1 0 00-.143.09h.1zm4.54 2.153l-.042.09.042-.09zm2.36.53v.1-.1zm2.36-.53l.043.09-.043-.09zm4.54-2.153h.1a.1.1 0 00-.143-.09l.043.09zm-.731 6.5l-.058-.081.058.081zm-12.337 0l.059-.08-.06.08zm4.402-13.055l.043.09-.043-.09zm3.533 0l-.043.09.043-.09zm7.893 3.726l.043.09a.1.1 0 000-.18l-.043.09zm-7.893 3.726l-.043-.09.043.09zm-3.533 0l.043-.09-.043.09zM2.385 6.503l-.042-.09a.1.1 0 000 .18l.042-.09zM1.75 5.171a1.49 1.49 0 00-.619.545l.17.108c.13-.205.315-.369.534-.472L1.75 5.17zm-.619.545c-.15.237-.23.512-.23.793h.2c0-.243.07-.48.2-.685l-.17-.108zM.9 6.51c0 .28.08.555.23.792l.17-.107c-.13-.205-.2-.442-.2-.685H.9zm.23.792c.15.237.365.426.62.546l.084-.181a1.279 1.279 0 01-.535-.472l-.169.107zm.62.546l1.973.931.085-.18-1.973-.932-.086.18zm1.915.84v5.41h.2v-5.41h-.2zm0 5.41c0 1.043.339 2.222 1.344 2.952l.118-.162c-.935-.678-1.262-1.784-1.262-2.79h-.2zM5.01 17.05c1.24.895 3.487 1.979 7.042 1.979v-.2c-3.511 0-5.718-1.07-6.924-1.941l-.118.162zm7.042 1.979c3.555 0 5.797-1.091 7.04-1.979l-.116-.162c-1.212.864-3.414 1.94-6.924 1.94v.2zm7.041-1.979c1.006-.727 1.344-1.898 1.344-2.951h-.2c0 1.016-.326 2.113-1.261 2.789l.117.162zm1.344-2.951v-5.41h-.2v5.41h.2zm-.057-5.32l1.38-.652-.085-.181-1.38.653.085.18zm1.237-.743v6.058h.2V8.035h-.2zm0 6.058c0 .21.084.41.232.559l.141-.141a.59.59 0 01-.173-.418h-.2zm.232.559a.79.79 0 00.558.231v-.2a.59.59 0 01-.417-.172l-.141.141zm.558.231a.79.79 0 00.559-.231l-.142-.141a.59.59 0 01-.417.172v.2zm.559-.231a.79.79 0 00.231-.559h-.2a.59.59 0 01-.172.418l.14.141zm.231-.559v-7.59h-.2v7.59h.2zm0-7.59c0-.28-.08-.554-.229-.791l-.169.107c.13.204.198.442.198.684h.2zm-.229-.791a1.48 1.48 0 00-.617-.547l-.086.181c.22.104.404.268.534.473l.169-.107zm-.617-.547L14.456 1.44l-.085.181 7.893 3.726.086-.18zM14.456 1.44A5.62 5.62 0 0012.054.9v.2a5.42 5.42 0 012.317.52l.085-.18zM12.054.9a5.62 5.62 0 00-2.403.54l.085.18a5.42 5.42 0 012.317-.52V.9zm-2.403.54L1.757 5.164l.086.181L9.736 1.62l-.085-.18zM1.745 5.172l-.009.005.111.167.009-.006-.111-.166zm3.5 8.92v-4.76h-.2v4.76h.2zm-.143-4.67l4.54 2.152.086-.18-4.54-2.153-.086.18zm4.54 2.153a5.62 5.62 0 002.403.539v-.2a5.42 5.42 0 01-2.317-.52l-.085.18zm2.403.539a5.62 5.62 0 002.403-.54l-.086-.18a5.42 5.42 0 01-2.317.52v.2zm2.403-.54l4.54-2.152-.086-.181-4.54 2.153.086.18zm4.397-2.243v4.761h.2v-4.76h-.2zm0 4.761c0 .749-.242 1.338-.69 1.658l.117.163c.519-.37.773-1.034.773-1.82h-.2zm-.69 1.658c-.983.71-2.903 1.692-6.11 1.692v.2c3.252 0 5.212-.996 6.227-1.73l-.117-.162zm-6.11 1.692c-3.207 0-5.132-.975-6.11-1.692l-.117.162c1.01.74 2.976 1.73 6.227 1.73v-.2zm-6.11-1.692c-.446-.322-.69-.916-.69-1.658h-.2c0 .78.257 1.447.773 1.82l.117-.162zm4.387-12.883a4.026 4.026 0 011.723-.388v-.2a4.24 4.24 0 00-1.809.407l.086.18zm1.723-.388c.596 0 1.185.133 1.724.388l.085-.181a4.226 4.226 0 00-1.809-.407v.2zm1.724.388l7.894 3.726.085-.181-7.894-3.726-.085.18zm7.894 3.545l-7.894 3.726.085.18 7.894-3.725-.085-.181zm-7.894 3.726a4.026 4.026 0 01-1.724.388v.2c.626 0 1.244-.14 1.81-.407l-.086-.181zm-1.724.388a4.026 4.026 0 01-1.723-.388l-.086.18a4.227 4.227 0 001.81.408v-.2zm-1.723-.388L2.428 6.413l-.085.18 7.893 3.727.085-.181zM2.428 6.594l7.894-3.726-.086-.181-7.893 3.726.085.18z"/><path fill="#fff" stroke="#7A8B9A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.72 24a5.52 5.52 0 100-11.04 5.52 5.52 0 000 11.04z"/><path stroke="#7A8B9A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.72 16.272v4.416m-2.208-2.208h4.416"/></svg>',
    automation_data: {
      id: "150",
      name: (0, b.__)("Course Enrollment", "ohmylms"),
      author: "1",
      trigger_name: "lms_course_enrollment",
      status: "active",
      steps: [{
        id: "123",
        automation_id: "150",
        step_id: "ygxr6g",
        key: "lms_course_enrollment",
        type: "trigger",
        settings: {
          ohmylms_settings: {
            courses: []
          }
        },
        next_step_id: "1kwrhk",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "124",
        automation_id: "150",
        step_id: "1kwrhk",
        key: "delay",
        type: "action",
        settings: {
          delay_settings: {
            delay: "10",
            unit: "minutes"
          }
        },
        next_step_id: "3xgh0g",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "125",
        automation_id: "150",
        step_id: "3xgh0g",
        key: "sendMail",
        type: "action",
        settings: {
          message_data: {
            subject: "Welcome To [course_name]",
            sender_email: null === (nD = window) || void 0 === nD || null === (nD = nD.MRM_Vars) || void 0 === nD || null === (nD = nD.email_settings) || void 0 === nD ? void 0 : nD.from_email,
            sender_name: null === (rD = window) || void 0 === rD || null === (rD = rD.MRM_Vars) || void 0 === rD || null === (rD = rD.email_settings) || void 0 === rD ? void 0 : rD.from_name,
            reply_name: null === (aD = window) || void 0 === aD || null === (aD = aD.MRM_Vars) || void 0 === aD || null === (aD = aD.email_settings) || void 0 === aD ? void 0 : aD.reply_name,
            reply_email: null === (oD = window) || void 0 === oD || null === (oD = oD.MRM_Vars) || void 0 === oD || null === (oD = oD.email_settings) || void 0 === oD ? void 0 : oD.reply_email,
            email_preview_text: "",
            body: "",
            json_body: "",
            make_transactional: !1
          }
        },
        next_step_id: "iaqoc",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "126",
        automation_id: "150",
        step_id: "iaqoc",
        key: "stopAutomation",
        type: "action",
        settings: [],
        next_step_id: "a:0:{}",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }]
    }
  }, {
    id: 1,
    name: (0, b.__)("Course Completes 50%", "ohmylms"),
    automationDescription: (0, b.__)("When a user completes 50% of his course then this automation will run.", "ohmylms"),
    icon: '<svg fill="none" width="16" height="24" viewBox="0 0 16 24"><path stroke="#7A8B9A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 15A7 7 0 108 1a7 7 0 000 14z"/><path stroke="#7A8B9A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.21 13.89L3 23l5-3 5 3-1.21-9.12M11 6l-4.125 4L5 8.182"/></svg>',
    automation_data: {
      id: "151",
      name: (0, b.__)("Course Completion Rate", "ohmylms"),
      author: "1",
      trigger_name: "lms_course_completion_rate",
      status: "active",
      steps: [{
        id: "127",
        automation_id: "151",
        step_id: "l9lj6",
        key: "lms_course_completion_rate",
        type: "trigger",
        settings: {
          ohmylms_settings: {
            courses: [],
            compare_with_value: "50",
            compare_with: {
              value: "equal_to",
              label: "Equal to"
            }
          }
        },
        next_step_id: "s8euk",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "128",
        automation_id: "151",
        step_id: "s8euk",
        key: "delay",
        type: "action",
        settings: {
          delay_settings: {
            delay: "10",
            unit: "minutes"
          }
        },
        next_step_id: "5ecmhj",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "129",
        automation_id: "151",
        step_id: "5ecmhj",
        key: "sendMail",
        type: "action",
        settings: {
          message_data: {
            subject: "Congratulation! You're halfway there!",
            sender_email: null === (iD = window) || void 0 === iD || null === (iD = iD.MRM_Vars) || void 0 === iD || null === (iD = iD.email_settings) || void 0 === iD ? void 0 : iD.from_email,
            sender_name: null === (lD = window) || void 0 === lD || null === (lD = lD.MRM_Vars) || void 0 === lD || null === (lD = lD.email_settings) || void 0 === lD ? void 0 : lD.from_name,
            reply_name: null === (cD = window) || void 0 === cD || null === (cD = cD.MRM_Vars) || void 0 === cD || null === (cD = cD.email_settings) || void 0 === cD ? void 0 : cD.reply_name,
            reply_email: null === (uD = window) || void 0 === uD || null === (uD = uD.MRM_Vars) || void 0 === uD || null === (uD = uD.email_settings) || void 0 === uD ? void 0 : uD.reply_email,
            email_preview_text: "",
            body: "",
            json_body: "",
            make_transactional: !1
          }
        },
        next_step_id: "p8t71j",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "130",
        automation_id: "151",
        step_id: "p8t71j",
        key: "stopAutomation",
        type: "action",
        settings: [],
        next_step_id: "a:0:{}",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }]
    }
  }],
  _D = [{
    id: 1,
    name: (0, b.__)("Completes a lesson", "ohmylms"),
    automationDescription: (0, b.__)("When a user completes a lesson then this automation will run.", "ohmylms"),
    icon: '<svg fill="none" width="22" height="18" viewBox="0 0 22 18"><path stroke="#EC57AB" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1h5.333A3.556 3.556 0 019.89 4.556V17a2.667 2.667 0 00-2.667-2.667H1V1zm6 7H4m1-3H4"/><path stroke="#EC57AB" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.556 14.333A2.667 2.667 0 009.889 17V4.556A3.556 3.556 0 0113.445 1h5.333v8.889M21 11l-4.125 4L15 13.182"/></svg>',
    automation_data: {
      id: "152",
      name: (0, b.__)("Complete Lesson", "ohmylms"),
      author: "1",
      trigger_name: "lms_complete_lesson",
      status: "active",
      steps: [{
        id: "131",
        automation_id: "152",
        step_id: "step1",
        key: "lms_complete_lesson",
        type: "trigger",
        settings: {
          ohmylms_settings: {
            lessons: []
          }
        },
        next_step_id: "step2",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "132",
        automation_id: "152",
        step_id: "step2",
        key: "delay",
        type: "action",
        settings: {
          delay_settings: {
            delay: "30",
            unit: "minutes"
          }
        },
        next_step_id: "step3",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "133",
        automation_id: "152",
        step_id: "step3",
        key: "sendMail",
        type: "action",
        settings: {
          message_data: {
            subject: "Congratulation! You have completed [lesson_name]",
            sender_email: null === (sD = window) || void 0 === sD || null === (sD = sD.MRM_Vars) || void 0 === sD || null === (sD = sD.email_settings) || void 0 === sD ? void 0 : sD.from_email,
            sender_name: null === (dD = window) || void 0 === dD || null === (dD = dD.MRM_Vars) || void 0 === dD || null === (dD = dD.email_settings) || void 0 === dD ? void 0 : dD.from_name,
            reply_name: null === (mD = window) || void 0 === mD || null === (mD = mD.MRM_Vars) || void 0 === mD || null === (mD = mD.email_settings) || void 0 === mD ? void 0 : mD.reply_name,
            reply_email: null === (pD = window) || void 0 === pD || null === (pD = pD.MRM_Vars) || void 0 === pD || null === (pD = pD.email_settings) || void 0 === pD ? void 0 : pD.reply_email,
            email_preview_text: "",
            body: "",
            json_body: "",
            make_transactional: !1
          }
        },
        next_step_id: "step4",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "134",
        automation_id: "152",
        step_id: "step4",
        key: "stopAutomation",
        type: "action",
        settings: [],
        next_step_id: "a:0:{}",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }]
    }
  }],
  wD = [{
    id: 1,
    name: (0, b.__)("Submit a quiz", "ohmylms"),
    automationDescription: (0, b.__)("When a user submit a quiz then this automation will run.", "ohmylms"),
    icon: '<svg fill="none" width="28" height="21" viewBox="0 0 28 21"><path stroke="#47B8FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M14.146 16.024l2.817 2.817 9.39-9.39m-6.573.939a9.39 9.39 0 10-9.39 9.39"/><path stroke="#47B8FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7.657 7.573a2.817 2.817 0 015.475.94c0 1.877-2.817 2.816-2.817 2.816m.075 3.756h.01"/></svg>',
    automation_data: {
      id: "154",
      name: (0, b.__)("Quiz Submit", "ohmylms"),
      author: "1",
      trigger_name: "lms_submit_quiz",
      status: "active",
      steps: [{
        id: "135",
        automation_id: "154",
        step_id: "qdp0l",
        key: "lms_submit_quiz",
        type: "trigger",
        settings: {
          ohmylms_settings: {
            quizes: []
          }
        },
        next_step_id: "lrhfd",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "136",
        automation_id: "154",
        step_id: "lrhfd",
        key: "delay",
        type: "action",
        settings: {
          delay_settings: {
            delay: "10",
            unit: "minutes"
          }
        },
        next_step_id: "w31sz",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "137",
        automation_id: "154",
        step_id: "w31sz",
        key: "sendMail",
        type: "action",
        settings: {
          message_data: {
            subject: "Congratulations on your [quiz_name] quiz submission!",
            sender_email: null === (fD = window) || void 0 === fD || null === (fD = fD.MRM_Vars) || void 0 === fD || null === (fD = fD.email_settings) || void 0 === fD ? void 0 : fD.from_email,
            sender_name: null === (vD = window) || void 0 === vD || null === (vD = vD.MRM_Vars) || void 0 === vD || null === (vD = vD.email_settings) || void 0 === vD ? void 0 : vD.from_name,
            reply_name: null === (gD = window) || void 0 === gD || null === (gD = gD.MRM_Vars) || void 0 === gD || null === (gD = gD.email_settings) || void 0 === gD ? void 0 : gD.reply_name,
            reply_email: null === (hD = window) || void 0 === hD || null === (hD = hD.MRM_Vars) || void 0 === hD || null === (hD = hD.email_settings) || void 0 === hD ? void 0 : hD.reply_email,
            email_preview_text: "",
            body: "",
            json_body: "",
            make_transactional: !1
          }
        },
        next_step_id: "l28gzh",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }, {
        id: "138",
        automation_id: "154",
        step_id: "l28gzh",
        key: "stopAutomation",
        type: "action",
        settings: [],
        next_step_id: "a:0:{}",
        automation_step_id: null,
        meta_key: null,
        meta_value: null
      }]
    }
  }];

function ED(e) {
  return function (e) {
    if (Array.isArray(e)) return SD(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return SD(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? SD(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function SD(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var RD = {
    course: ED(bD),
    lesson: ED(_D),
    quiz: ED(wD),
    assignment: ED(yD)
  },
  xD = n(99418);

function CD() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return PD(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (PD(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, PD(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, PD(d, "constructor", u), PD(u, "constructor", c), c.displayName = "GeneratorFunction", PD(u, a, "GeneratorFunction"), PD(d), PD(d, a, "Generator"), PD(d, r, function () {
    return this;
  }), PD(d, "toString", function () {
    return "[object Generator]";
  }), (CD = function () {
    return {
      w: o,
      m
    };
  })();
}

function PD(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  PD = function (e, t, n, r) {
    function o(t, n) {
      PD(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, PD(e, t, n, r);
}

function OD(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function kD(e, t) {
  return function (e) {
    if (Array.isArray(e)) return e;
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
      var r,
        a,
        o,
        i,
        l = [],
        c = !0,
        u = !1;
      try {
        if (o = (n = n.call(e)).next, 0 === t) {
          if (Object(n) !== n) return;
          c = !1;
        } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
      } catch (e) {
        u = !0, a = e;
      } finally {
        try {
          if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
        } finally {
          if (u) throw a;
        }
      }
      return l;
    }
  }(e, t) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return jD(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jD(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function jD(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var AD = function (e) {
  var t,
    n = e.recipe,
    r = e.handleCreate,
    a = e.handleToggleEditor,
    o = e.setShowPreview,
    i = kD((0, g.useState)(!1), 2),
    l = i[0],
    c = i[1],
    u = kD((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = function () {
      d(!s);
    },
    p = function () {
      var e,
        t = (e = CD().m(function e() {
          var t, a;
          return CD().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, c(!0), t = "string" == typeof (null == n ? void 0 : n.automation_data) ? JSON.parse(null == n ? void 0 : n.automation_data) : null == n ? void 0 : n.automation_data, e.n = 1, r(t);
              case 1:
                e.n = 3;
                break;
              case 2:
                e.p = 2, a = e.v, console.error(a);
              case 3:
                return e.p = 3, c(!1), e.f(3);
              case 4:
                return e.a(2);
            }
          }, e, null, [[0, 2, 3, 4]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              OD(o, r, a, i, l, "next", e);
            }
            function l(e) {
              OD(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    f = {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: "rgba(var(--ohmylms-primary-color-rgb), 0.2)",
      borderRadius: "8px",
      opacity: s ? 1 : 0,
      visibility: s ? "visible" : "hidden",
      transition: "opacity 0.3s ease"
    };
  return React.createElement(React.Fragment, null, React.createElement(I.FlexItemWP, {
    minWidth: "330px",
    maxWidth: "calc(25% - 16px)",
    onMouseEnter: m,
    onMouseLeave: m
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    padding: "24px 16px",
    fullHeight: !0
  }, React.createElement(I.FlexWP, {
    align: "center",
    justify: "start",
    gap: 2
  }, React.createElement("span", {
    style: {
      lineHeight: 0
    },
    dangerouslySetInnerHTML: {
      __html: xD.A.sanitize(null !== (t = null == n ? void 0 : n.icon) && void 0 !== t ? t : "", {
        USE_PROFILES: {
          svg: !0,
          svgFilters: !0
        }
      })
    }
  }), React.createElement(I.HeadingWP, {
    level: 4
  }, null == n ? void 0 : n.name)), React.createElement(I.SpacerWP, {
    marginTop: 4,
    marginBottom: 0
  }, React.createElement(I.TextWP, null, null == n ? void 0 : n.automationDescription)), React.createElement(I.FlexWP, {
    justify: "center",
    align: "center",
    gap: 2,
    style: f
  }, React.createElement(I.ButtonWP, {
    onClick: function () {
      var e = JSON.stringify({
        automationData: null == n ? void 0 : n.automation_data,
        isPro: null == n ? void 0 : n.isPro,
        automationDescription: null == n ? void 0 : n.automationDescription
      });
      localStorage.setItem("mint-automation-preview", e), a(), o(!0);
    },
    variant: "primary"
  }, (0, b.__)("Preview", "ohmylms")), React.createElement(I.ButtonWP, {
    onClick: p,
    isBusy: l,
    variant: "primary"
  }, (0, b.__)("Import", "ohmylms"))))));
};

const MD = (0, g.memo)(AD);
