/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createEmailPreview(readRuntime) {
  return function EmailPreview(props) {
    const {
      Cee,
      Ea,
      I: Controls,
      React,
      T: StoreModule,
      b: I18n,
      g: ReactHooks,
      y: WordPressData,
    } = readRuntime();
    var t,
      n,
      r,
      a,
      o,
      i,
      l,
      c = props.selected,
      u = props.content,
      s = props.footerText,
      d = props.courseSuggestionText,
      m = (0, ReactHooks.useRef)(null),
      p = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getEmail();
      }, []),
      f = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectSettingsMap();
      }, []),
      v = {
        title: (null == p ? void 0 : p.heading) || '',
        for:
          'creator_new_order' ===
          (null == p || null === (t = p.basic) || void 0 === t ? void 0 : t.id)
            ? (0, I18n.__)('creator', 'ohmylms')
            : (0, I18n.__)('student', 'ohmylms'),
        content: u || '',
        button_text: (null == p ? void 0 : p.button_text) || '',
        button_link: (null == p ? void 0 : p.button_link) || '',
        footer_text: s || '',
        button_position: (null == f ? void 0 : f.creator_lms_email_button_possition) || 'center',
        course_suggestion_text: d || '',
        img_url: (null == f ? void 0 : f.creator_lms_email_branding_image) || '',
        base_color: (null == f ? void 0 : f.creator_lms_email_base_color) || '',
        background_color: (null == f ? void 0 : f.creator_lms_email_background_color) || '',
        body_background_color:
          (null == f ? void 0 : f.creator_lms_email_body_background_color) || '',
        color: (null == f ? void 0 : f.creator_lms_email_body_text_color) || '',
      },
      h = (function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.img_url,
          n = void 0 === t ? Cee : t,
          r = e.title,
          a = void 0 === r ? 'Congratulations on completing the course!' : r,
          o = e.content,
          i =
            void 0 === o
              ? '<div style="text-align: left;"><div>Hi {student_name},</div><div><br></div><div>Well done on successfully finishing the course, {course_name}! We hope you found it both enjoyable and enriching.</div><div><br></div><div><font size="4"><b>Student info\u2028</b></font></div><div>{student_name}</div><div>{student_email}</div><div><br></div><div>We’d love to hear your thoughts! Leaving a review about the course and instructor will not only help us enhance our content but also improve the learning experience for future students.</div></div>'
              : o,
          l = e.button_text,
          c = void 0 === l ? 'Share Your Feedback!' : l,
          u = e.button_link,
          s = void 0 === u ? '#' : u,
          d = e.footer_text,
          m = void 0 === d ? 'Thank you for choosing us for your learning journey' : d,
          p = e.background_color,
          f = void 0 === p ? '#F4F5F7' : p,
          v = e.body_background_color,
          g = void 0 === v ? '#F4F5F7' : v,
          h = e.color,
          y = void 0 === h ? '#6e42d3' : h,
          b = e.base_color,
          _ = void 0 === b ? '#6e42d3' : b;
        return '\n        <!doctype html>\n<html lang="und" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n  <head>\n    <title></title>\n    \x3c!--[if !mso]>\x3c!--\x3e\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    \x3c!--<![endif]--\x3e\n    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <style type="text/css">\n      #outlook a { padding:0; }\n      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }\n      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }\n      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }\n      p { display:block;margin:13px 0; }\n    </style>\n    \x3c!--[if mso]>\n    <noscript>\n    <xml>\n    <o:OfficeDocumentSettings>\n      <o:AllowPNG/>\n      <o:PixelsPerInch>96</o:PixelsPerInch>\n    </o:OfficeDocumentSettings>\n    </xml>\n    </noscript>\n    <![endif]--\x3e\n    \x3c!--[if lte mso 11]>\n    <style type="text/css">\n      .mj-outlook-group-fix { width:100% !important; }\n    </style>\n    <![endif]--\x3e\n    \n    \n    <style type="text/css">\n      @media only screen and (min-width:480px) {\n        .mj-column-per-100 { width:100% !important; max-width: 100%; }\n      }\n    </style>\n    <style media="screen and (min-width:480px)">\n      .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }\n    </style>\n    \n    \n  \n    \n    <style type="text/css">\n\n    @media only screen and (max-width:479px) {\n      table.mj-full-width-mobile { width: 100% !important; }\n      td.mj-full-width-mobile { width: auto !important; }\n      .omlms-email-template-body{padding: 0 20px 20px 20px  !important}\n      td.omlms-email-template-heading-wrapper{padding: 10px  0 !important}\n      td.omlms-email-template-heading-wrapper  div {font-size: 20px  !important; line-height: 1.5 !important; text-align: left !important}\n    }\n  \n    </style>\n    \n    \n  </head>\n  <body style="word-spacing:normal;background-color:'
          .concat(f || '#F4F5F7;', '">\n    \n    \n      <div\n         style="background-color:')
          .concat(
            f || '#F4F5F7;',
            '; padding: 24px; border-radius: 20px;" lang="und" dir="auto"\n      >\n        \n      \n      \x3c!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-heightRule:exactly;"><![endif]--\x3e\n    \n      \n      <div  style="margin:0px auto;max-width:600px;">\n        \n        <table\n           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"\n        >\n          <tbody>\n            <tr>\n              <td\n                 style="direction:ltr;font-size:0px;padding:0px;text-align:left;"\n              >\n                \x3c!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--\x3e\n            \n      <div\n         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"\n      >\n        \n      <table\n         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"\n      >\n        <tbody>\n          \n              <tr>\n                <td\n                   align="center" style="background:',
          )
          .concat(
            g || '#FFFFFF',
            ';font-size:0px;padding:17px 0px 17px 0px;word-break:break-word;border-radius: 20px 20px 0 0"\n                >\n                  \n      <table\n         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"\n      >\n        <tbody>\n          <tr>\n            <td  style="width:100px;">\n              \n      <img\n         alt="" src=\'',
          )
          .concat(
            n || Cee,
            '\' style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100" height="auto"\n      />\n    \n            </td>\n          </tr>\n        </tbody>\n      </table>\n    \n                </td>\n              </tr>\n            \n        </tbody>\n      </table>\n    \n      </div>\n    \n          \x3c!--[if mso | IE]></td></tr></table><![endif]--\x3e\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        \n      </div>\n    \n      \n      \x3c!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-heightRule:exactly;"><![endif]--\x3e\n    \n      \n      <div  style="margin:0px auto;max-width:600px;">\n        \n        <table\n           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"\n        >\n          <tbody>\n            <tr>\n              <td\n                 style="direction:ltr;font-size:0px;padding:0px;text-align:left;background: #FFF"\n              >\n                \x3c!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--\x3e\n            \n      <div\n         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"\n      >\n        \n      <table\n         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"\n      >\n        <tbody>\n          \n              <tr>\n                <td\n                   align="center" style="background:',
          )
          .concat(
            g || '#FFFFFF',
            ';font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;"\n                >\n                  \n      <p\n         style="border-top:solid 1px #EBECED;font-size:1px;margin:0px auto;width:100%;"\n      >\n      </p>\n      \n      \x3c!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #EBECED;font-size:1px;margin:0px auto;width:600px;" role="presentation" width="600px" ><tr><td style="height:0;line-height:0;"> &nbsp;\n</td></tr></table><![endif]--\x3e\n    \n    \n                </td>\n              </tr>\n            \n        </tbody>\n      </table>\n    \n      </div>\n    \n          \x3c!--[if mso | IE]></td></tr></table><![endif]--\x3e\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        \n      </div>\n    \n      \n      \x3c!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0;font-size:0;mso-line-heightRule:exactly;"><v:image style="border:0;mso-position-horizontal:center;position:absolute;top:0;width:600px;z-index:-3;" xmlns:v="urn:schemas-microsoft-com:vml" /><![endif]--\x3e\n      <div\n         style="margin:0 auto;max-width:600px;"\n      >\n        <table\n           border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"\n        >\n          <tbody>\n            <tr\n               style="vertical-align:top;"\n            >\n              \n          <td  style="width:0.01%;padding-bottom:NaN%;mso-padding-bottom-alt:0;" />\n          <td class="omlms-email-template-body" style="background:',
          )
          .concat(
            g || '#FFFFFF',
            ';background-position:center center;background-repeat:no-repeat;padding:0px 40px 30px 40px;vertical-align:top;border-radius: 0 0 20px 20px;">\n            \n      \x3c!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" ><tr><td style=""><![endif]--\x3e\n      <div\n         class="mj-hero-content" style="margin:0px auto;"\n      >\n        <table\n           border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;"\n        >\n          <tbody>\n            <tr>\n              <td  style="" >\n                <table\n                   border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;"\n                >\n                  <tbody>\n                    \n                        <tr>\n                          <td\n                             align="center" style="font-size:0px;padding:29px 0px 28px 0px;word-break:break-word;"\n                             class="omlms-email-template-heading-wrapper"\n                          >\n                            \n      <div\n         style="font-family:Arial;font-size:38px;font-weight:800;line-height:48px;text-align:center;color:',
          )
          .concat(_ || '#6e42d3', ';"\n      >')
          .concat(
            a,
            '</div>\n    \n                          </td>\n                        </tr>\n                      \n                        <tr>\n                          <td\n                             align="center" style="font-size:0px;padding:0px 0px 28px 0px;word-break:break-word;"\n                          >\n                            \n      <div\n         style="font-family:Arial;font-size:15px;font-weight:normal;line-height:30px;text-align:left;color:',
          )
          .concat(y || '#1F2328', ';"\n      >\n      ')
          .concat(
            i,
            '\n      </div>\n    \n                          </td>\n                        </tr>\n                      \n                        <tr>\n                          <td\n                             align="left" style="font-size:0px;padding:0px 0px 30px 0px;word-break:break-word;"\n                          >\n                            \n      <table\n         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"\n      >\n        <tbody>\n          <tr>\n            <td\n               align="center" bgcolor="#6e42d3" role="presentation" style="border:none;border-radius:12px;cursor:auto;mso-padding-alt:14px 20px 14px 20px;text-align:center;background:#6e42d3;" valign="middle"\n            >\n              <a\n                 href="',
          )
          .concat(s, '" style="display:inline-block;background:')
          .concat(
            _ || '#6e42d3',
            ';color:#ffffff;font-family:Arial;font-size:15px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:14px 20px 14px 20px;mso-padding-alt:0px;border-radius:12px;" target="_blank"\n              >\n                ',
          )
          .concat(
            c,
            '\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    \n                          </td>\n                        </tr>\n                      \n                        <tr>\n                          <td\n                             align="left" background="#F4F5F7" style="background:#F4F5F7;font-size:0px;padding:10px 25px 10px 25px;word-break:break-word;border-radius: 10px;padding: 20px;"\n                          >\n                            \n      <div\n         style="font-family:Arial;font-size:13px;font-weight:400;line-height:1.7;text-align:left;color:#8A8A97;"\n      ><div style="text-align: center;"><span style="word-spacing: normal;">',
          )
          .concat(
            m,
            '</span></div></div>\n    \n                          </td>\n                        </tr>\n                      \n                  </tbody>\n                </table>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      \x3c!--[if mso | IE]></td></tr></table><![endif]--\x3e\n    \n          </td>\n          <td  style="width:0.01%;padding-bottom:NaN%;mso-padding-bottom-alt:0;" />\n        \n            </tr>\n          </tbody>\n      </table>\n    </div>\n    \x3c!--[if mso | IE]></td></tr></table><![endif]--\x3e\n    \n      </div>\n    \n  </body>\n</html>\n    ',
          );
      })(v);
    return (
      'student_new_order' ===
        (null == p || null === (n = p.basic) || void 0 === n ? void 0 : n.id) ||
      'creator_new_order' === (null == p || null === (r = p.basic) || void 0 === r ? void 0 : r.id)
        ? (h = (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.img_url,
              n = void 0 === t ? Cee : t,
              r = e.title,
              a = void 0 === r ? 'Order Confirmed: Your Course Awaits!' : r,
              o = e.content,
              i =
                void 0 === o
                  ? '<p style="margin: 0 0 15px 0; padding:0; color: #1F2328; font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; font-size: 15px; line-height: 1.6;">Dear [student_name],</p><p style="margin: 0 0 15px 0; padding:0; color: #1F2328; font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; font-size: 15px; line-height: 1.6;">Thank you for your purchase! We\'ve successfully received your order and are processing it. Below are the details for your reference.</p>'
                  : o,
              l = e.button_text,
              c =
                void 0 === l
                  ? 'creator' !== (null == e ? void 0 : e.for)
                    ? 'View My Course'
                    : ''
                  : l,
              u = (e.button_link, e.footer_text),
              s =
                void 0 === u
                  ? 'creator' !== (null == e ? void 0 : e.for)
                    ? 'You can access your course(s) and view your full order details by clicking the button below.'
                    : ''
                  : u,
              d = e.background_color,
              m = void 0 === d ? '#F4F5F7' : d,
              p = e.body_background_color,
              f = void 0 === p ? '#FFFFFF' : p,
              v = e.color,
              g = void 0 === v ? '#6e42d3' : v,
              h = e.base_color,
              y = void 0 === h ? '#6e42d3' : h,
              b = e.button_position,
              _ = '<div style="text-align: '
                .concat(
                  (void 0 === b ? 'center' : b) || 'center',
                  '; margin: 25px 0 0;">\n                        <a href="#" style="background: ',
                )
                .concat(
                  y || '#6e42d3',
                  ';#6e42d3; color: #ffffff; padding: 14px 25px; font-size: 15px; font-weight: 500; line-height:1; text-transform: capitalize; text-decoration: none; border-radius: 12px; display: inline-block;">\n                            ',
                )
                .concat(c, '\n                        </a>\n                    </div>');
            return '\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>New Order #12345</title>\n</head>\n\n<body>\n    <div class="creator-lms-email-container">\n        <table class="creator-lms-table-main" style="width: 100%; border-spacing: 0; background: '
              .concat(
                m || '#F4F5F7',
                '; border:0;">\n            <tr style="background: transparent; border: none; border-radius: 0;">\n                <td style="background: transparent; border: none; border-radius: 0; padding: 40px;">\n                    <table class="creator-lms-table2" style="border-spacing: 0; max-width: 600px; width: 100%; margin-left: auto; margin-right: auto; border-collapse: separate;">\n                        <tr>\n                            <td style="border: 5px solid ',
              )
              .concat(y || '#6e42d3', '; background: ')
              .concat(
                f || '#FFFFFF',
                '; border-radius: 20px;">\n                                <table class="creator-lms-table3" style="width: 100%; border-collapse: collapse;">\n                                    \x3c!-- Header with Logo --\x3e\n                                    <tr class="creator-lms-email-header">\n                                        <td style="border: none; border-bottom: 1px solid #eee; padding: 16px 20px; text-align: center; background: ',
              )
              .concat(
                f || '#FFFFFF',
                '; border-radius: 20px 20px 0 0;">\n                                            <img src="',
              )
              .concat(
                n || Cee,
                '" alt="Your Logo" width="auto" height="auto" style="border: 0; display: block; margin: 0 auto;">\n                                        </td>\n                                    </tr>\n                                    \x3c!-- Main Content --\x3e\n                                    <tr>\n                                        <td style="padding: 25px 35px 30px; background: ',
              )
              .concat(
                f || '#FFFFFF',
                '; border: 0; border-radius: 0 0 20px 20px;">\n                                            <div class="body-content-inner" style="color: #1F2328; font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; font-size: 15px; line-height: 1.6; text-align: ',
              )
              .concat(
                'rtl' === document.dir ? 'right' : 'left',
                ';">\n                                                <h1 style="padding: 0; color: ',
              )
              .concat(
                y || '#6e42d3',
                ';; font-size: 28px; line-height: 1.3; margin: 0; font-weight: bold; text-align: center; margin-bottom: 20px;">\n                                                    ',
              )
              .concat(
                a,
                '\n                                                </h1>\n                                                <div style="color: ',
              )
              .concat(g || '#1F2328', '">\n                                                ')
              .concat(
                i,
                '\n                                                </div>\n\n                                                <h2 style="color: ',
              )
              .concat(
                y || '#6e42d3',
                ';; font-size: 16px; line-height: 1.3; margin-bottom: 20px; font-weight: bold;">\n                                                  [order_id] [order_date]\n                                                </h2>\n\n                                              <table class="creator-lms-order-items-table" style="width: 100%; border: 0; border-collapse: separate; border-radius: 0; background: transparent; margin: 0 0 20px">\n                                                <tr>\n                                                  <td style="border: 1px solid #EBECED; border-radius: 10px; overflow: hidden; background: transparent;">\n                                                    <table style="width: 100%; border: 0; border-collapse: collapse; border-radius: 0; background: transparent;">\n                                                      <thead>\n                                                        <tr>\n                                                          <th style="background: ',
              )
              .concat(
                f || '#FFFFFF',
                '; color: #7A8B9A; font-size: 14px; line-height: 1; padding: 13px 20px; border: none; border-bottom: 1px solid #EBECED; text-align: left; border-radius: 10px 0 0 0; font-weight: 500;">\n                                                            [course_name]\n                                                          </th>\n                                                          <th style="background: ',
              )
              .concat(
                f || '#FFFFFF',
                '; color: #7A8B9A; font-size: 14px; line-height: 1; padding: 13px 20px; border: none; border-bottom: 1px solid #EBECED; text-align: left; font-weight: 500;">\n                                                            Quantity\n                                                          </th>\n                                                          <th style="background: ',
              )
              .concat(
                f || '#FFFFFF',
                '; color: #7A8B9A; font-size: 14px; line-height: 1; padding: 13px 20px; border: none; border-bottom: 1px solid #EBECED; text-align: left; border-radius: 0 10px 0 0; font-weight: 500;">\n                                                            Price\n                                                          </th>\n                                                        </tr>\n                                                      </thead>\n                                                      <tbody>\n                                                        \x3c!-- Replace these rows with actual data --\x3e\n                                                        <tr>\n                                                          <td style="background: transparent; padding: 14px 20px; border:none; border-bottom: 1px solid #EBECED; color: #000D25; font-size: 14px; font-weight: 400; line-height: 1.3;">\n                                                            UX design for virtual reality\n                                                          </td>\n                                                          <td style="background: transparent; padding: 14px 20px; border:none; border-bottom: 1px solid #EBECED; color: #000D25; font-size: 14px; font-weight: 400; line-height: 1.3;">\n                                                            1\n                                                          </td>\n                                                          <td style="background: transparent; padding: 14px 20px; border:none; border-bottom: 1px solid #EBECED; color: #000D25; font-size: 14px; font-weight: 400; line-height: 1.3; width: 110px;">\n                                                            $100.00\n                                                          </td>\n                                                        </tr>\n                                                        \x3c!-- Add more rows as needed --\x3e\n                                                      </tbody>\n                                                      <tfoot>\n                                                        <tr>\n                                                          <th colspan="2" style="background: transparent; padding: 14px 20px 7px; color: ',
              )
              .concat(
                g || '#1F2328',
                '; border: none; text-align: right; font-size: 14px; font-weight: 500; line-height: 1;">\n                                                            Subtotal:\n                                                          </th>\n                                                          <td style="background: transparent; padding: 14px 20px 7px; color: ',
              )
              .concat(
                g || '#1F2328',
                '; border: none; font-size: 14px; font-weight: 400; line-height: 1; width: 110px;">\n                                                            $100.00\n                                                          </td>\n                                                        </tr>\n                                                        <tr>\n                                                          <th colspan="2" style="background: transparent; padding: 7px 20px 14px; color: ',
              )
              .concat(
                g || '#1F2328',
                '; border: none; text-align: right; font-size: 14px; font-weight: 500; line-height: 1;">\n                                                            Payment method:\n                                                          </th>\n                                                          <td style="background: transparent; padding: 7px 20px 14px; color: ',
              )
              .concat(
                g || '#1F2328',
                '; border: none; font-size: 14px; font-weight: 400; line-height: 1; width: 110px;">\n                                                            Credit Card\n                                                          </td>\n                                                        </tr>\n                                                        <tr>\n                                                          <th colspan="2" style="background: transparent; padding: 14px 20px; color: ',
              )
              .concat(
                g || '#1F2328',
                '; border: none; border-top: 1px solid #EBECED; text-align: right; font-size: 14px; font-weight: 500; line-height: 1;">\n                                                            Total:\n                                                          </th>\n                                                          <td style="background: transparent; padding: 14px 20px; color: ',
              )
              .concat(
                g || '#1F2328',
                '; border: none; border-top: 1px solid #EBECED; font-size: 14px; font-weight: 400; line-height: 1; width: 110px;">\n                                                            $100.00\n                                                          </td>\n                                                        </tr>\n                                                      </tfoot>\n                                                    </table>\n                                                  </td>\n                                                </tr>\n                                              </table>\n\n\n                                                <div style="margin: 0 0 15px 0; padding:0; color: ',
              )
              .concat(
                g || '#1F2328',
                '; font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; font-size: 15px; line-height: 1.6;">\n                                                    ',
              )
              .concat(
                s,
                '\n                                                </div>\n\n                                                ',
              )
              .concat(
                c && _,
                '\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n    </div>\n</body>\n</html>\n    ',
              );
          })(v))
        : 'student_confirm_enrollment' ===
            (null == p || null === (a = p.basic) || void 0 === a ? void 0 : a.id)
          ? (h = (function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.img_url,
                n = void 0 === t ? Cee : t,
                r = e.title,
                a = void 0 === r ? 'Enrollment Complete: <br> Welcome to Your Course!' : r,
                o = e.content,
                i =
                  void 0 === o
                    ? '<p style="margin: 0 0 15px 0; padding:0; color: #1F2328;">Dear [student_name],</p><p style="margin: 0 0 15px 0; padding:0; color: #1F2328;">Your enrollment in <strong>[course_name]</strong> is confirmed! We’re excited to have you on this journey of learning and growth.</p>'
                    : o,
                l = e.button_text,
                c = void 0 === l ? 'Access My Course' : l,
                u = (e.button_link, e.footer_text),
                s =
                  void 0 === u
                    ? 'You can access your course(s) and view your full order details by clicking the button below.'
                    : u,
                d = e.background_color,
                m = void 0 === d ? '#F4F5F7' : d,
                p = e.body_background_color,
                f = void 0 === p ? '#FFFFFF' : p,
                v = e.color,
                g = void 0 === v ? '#6e42d3' : v,
                h = e.base_color,
                y = void 0 === h ? '#6e42d3' : h,
                b = e.button_position,
                _ = '<div style="text-align: '
                  .concat(
                    (void 0 === b ? 'center' : b) || 'center',
                    '; margin: 25px 0 0;">\n                        <a href="#" style="background: ',
                  )
                  .concat(
                    y || '#6e42d3',
                    ';#6e42d3; color: #ffffff; padding: 14px 25px; font-size: 15px; font-weight: 500; line-height:1; text-transform: capitalize; text-decoration: none; border-radius: 12px; display: inline-block;">\n                            ',
                  )
                  .concat(c, '\n                        </a>\n                    </div>');
              return '\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Confirm Enrollment</title>\n</head>\n<body>\n    <div class="creator-lms-email-container">\n        <table class="creator-lms-table-main" style="width: 100%; border-spacing: 0; background: background: '
                .concat(
                  m || '#F4F5F7',
                  '; border:0;">\n            <tr style="background: transparent; border: none; border-radius: 0;">\n                <td style="background: transparent; border: none; border-radius: 0; padding: 40px;">\n                    <table class="creator-lms-table2" style="border-spacing: 0; max-width: 600px; width: 100%; margin-left: auto; margin-right: auto; border-collapse: separate;">\n                        <tr>\n                            <td style="border: 5px solid ',
                )
                .concat(y || '#6e42d3', '; background: ')
                .concat(
                  f || '#FFFFFF',
                  '; border-radius: 20px;">\n                                <table class="creator-lms-table3" style="width: 100%; border-collapse: collapse;">\n                                    \x3c!-- Header with Logo --\x3e\n                                    <tr class="creator-lms-email-header">\n                                        <td style="border: none; border-bottom: 1px solid #eee; padding: 16px 20px; text-align: center; background: ',
                )
                .concat(
                  f || '#FFFFFF',
                  '; border-radius: 20px 20px 0 0;">\n                                            <img src="',
                )
                .concat(
                  n || Cee,
                  '" alt="Your Logo" width="auto" height="auto" style="border: 0; display: block; margin: 0 auto;">\n                                        </td>\n                                    </tr>                                    \n                                    \x3c!-- Main Content --\x3e\n                                    <tr>\n                                        <td style="padding: 25px 35px 30px; background: ',
                )
                .concat(
                  f || '#FFFFFF',
                  '; border: 0; border-radius: 0 0 20px 20px;">\n                                            <div class="body-content-inner" style="color: ',
                )
                .concat(
                  g || '#1f2328',
                  '; font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; font-size: 15px; line-height: 1.6; text-align: ',
                )
                .concat(
                  'rtl' === document.dir ? 'right' : 'left',
                  ';">\n                                                <h1 style="padding: 0; color: ',
                )
                .concat(
                  y || '#6e42d3',
                  '; font-size: 28px; line-height: 1.3; margin: 0; font-weight: bold; text-align: center; margin-bottom: 20px;">\n                                                    ',
                )
                .concat(
                  a,
                  '\n                                                </h1>\n                                                <div style="color: ',
                )
                .concat(g || '#1f2328', ';">\n                                                    ')
                .concat(
                  i,
                  '\n                                                </div>\n                                                <table class="creator-lms-order-items-table" style="width: 100%; border: 0; border-collapse: separate; border-radius: 0; background: transparent; margin: 0 0 20px;">\n                                                    <tr>\n                                                        <td style="border: 1px solid #EBECED; border-radius: 10px; overflow: hidden; background: transparent;">\n                                                            <table style="width: 100%; border: 0; border-collapse: collapse; border-radius: 0; background: transparent;">\n                                                                <tbody>\n                                                                    <tr>\n                                                                        <td style="background: transparent; padding: 14px 20px; border:none; border-bottom: 1px solid #EBECED;">\n                                                                            <span style="color: #7A8B9A;">Course Name:</span>\n                                                                            [course_name]\n                                                                        </td>\n                                                                    </tr>\n                                                                    <tr>\n                                                                        <td style="background: transparent; padding: 14px 20px; border:none; border-bottom: 1px solid #EBECED;">\n                                                                            <span style="color: #7A8B9A;">Enrollment Date:</span>\n                                                                            [start_date]\n                                                                        </td>\n                                                                    </tr>\n                                                                    <tr>\n                                                                        <td style="background: transparent; padding: 14px 20px; border:none;">\n                                                                            <span style="color: #7A8B9A;">Access Duration:</span>\n                                                                            [course_access_duration]\n                                                                        </td>\n                                                                    </tr>\n                                                                </tbody>\n                                                            </table>\n                                                        </td>\n                                                    </tr>\n                                                </table>\n                                                <div style="margin: 0 0 15px 0; padding:0; color: ',
                )
                .concat(g || '#1f2328', '">\n                                                    ')
                .concat(
                  s,
                  '\n                                                </div>\n                                                ',
                )
                .concat(
                  c && _,
                  '\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n    </div>\n</body>\n</html>\n\n    ',
                );
            })(v))
          : 'student_cancel_enrollment' ===
                (null == p || null === (o = p.basic) || void 0 === o ? void 0 : o.id) ||
              'creator_cancelled_order' ===
                (null == p || null === (i = p.basic) || void 0 === i ? void 0 : i.id)
            ? (h = (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.img_url,
                  n = void 0 === t ? Cee : t,
                  r = e.title,
                  a = void 0 === r ? 'Enrollment Cancelled: Need Assistance?' : r,
                  o = e.content,
                  i =
                    void 0 === o
                      ? '<p>Hi [student_name],</p><p style="margin: 0 0 15px 0; padding:0; color: #1F2328;">We noticed your enrollment for <strong>[course_name]</strong> was canceled.</p>'
                      : o,
                  l = (e.button_text, e.button_link, e.footer_text),
                  c =
                    void 0 === l
                      ? '<p>Your refund will be processed as soon as possible, and you will receive an e-mail notification once it has been completed. Please allow <strong>[expected_processing_time]</strong> for the refund to reflect in your account.</p><p>Thank you for choosing <strong>[store_name]</strong>, and we look forward to serving you better in the future. If you\'d like to explore more of our courses or re-enroll, contact us at<a href="mailto:[email@example.com]" style="color: var(--omlms-primary-color); font-weight: 500;">[email@example.com]</a>.</p><p >Best,<strong>[site_name]</strong></p>'
                      : l,
                  u = e.background_color,
                  s = void 0 === u ? '#F4F5F7' : u,
                  d = e.body_background_color,
                  m = void 0 === d ? '#FFFFFF' : d,
                  p = e.color,
                  f = void 0 === p ? '#6e42d3' : p,
                  v = e.base_color,
                  g = void 0 === v ? '#6e42d3' : v;
                return (
                  e.button_position,
                  '\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Confirm Enrollment</title>\n</head>\n\n<body>\n    <div class="creator-lms-email-container">\n        <table class="creator-lms-table-main" style="width: 100%; border-spacing: 0; background: '
                    .concat(
                      s || '#F4F5F7',
                      '; border:0;">\n            <tr style="background: transparent; border: none; border-radius: 0;">\n                <td style="background: transparent; border: none; border-radius: 0; padding: 40px;">\n                    <table class="creator-lms-table2" style="border-spacing: 0; max-width: 600px; width: 100%; margin-left: auto; margin-right: auto; border-collapse: separate;">\n                        <tr>\n                            <td style="border: 5px solid ',
                    )
                    .concat(g || '#6e42d3', '; background: ')
                    .concat(
                      m || '#FFFFFF',
                      '; border-radius: 20px;">\n                                <table class="creator-lms-table3" style="width: 100%; border-collapse: collapse;">\n                                    \x3c!-- Header with Logo --\x3e\n                                    <tr class="creator-lms-email-header">\n                                        <td style="border: none; border-bottom: 1px solid #eee; padding: 16px 20px; text-align: center; background: ',
                    )
                    .concat(
                      m || '#FFFFFF',
                      '; border-radius: 20px 20px 0 0;">\n                                            <img src="',
                    )
                    .concat(
                      n || Cee,
                      '" alt="Your Logo" width="auto" height="auto" style="border: 0; display: block; margin: 0 auto;">\n                                        </td>\n                                    </tr>\n                                    \x3c!-- Main Content --\x3e\n                                    <tr>\n                                        <td style="padding: 25px 35px 30px; background: ',
                    )
                    .concat(
                      m || '#FFFFFF',
                      '; border: 0; border-radius: 0 0 20px 20px;">\n                                            <div class="body-content-inner" style="color: ',
                    )
                    .concat(
                      f || '#1f2328',
                      '"; font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; font-size: 15px; line-height: 1.6; text-align: ',
                    )
                    .concat(
                      'rtl' === document.dir ? 'right' : 'left',
                      ';">\n                                                <h1 style="padding: 0; color: ',
                    )
                    .concat(
                      g || '#6e42d3',
                      '; font-size: 28px; line-height: 1.3; margin: 0; font-weight: bold; text-align: center; margin-bottom: 20px;">\n                                                    ',
                    )
                    .concat(
                      a,
                      '\n                                                </h1>\n\n                                                <div style="margin: 0 0 15px 0; padding:0; color: ',
                    )
                    .concat(
                      f || '#1f2328',
                      '";">\n                                                    ',
                    )
                    .concat(
                      i,
                      '\n                                                </div>\n\n                                                <div style="box-shadow: 0px 1px 4px #D3D6DD; background: ',
                    )
                    .concat(
                      m || '#FFFFFF',
                      '; padding: 20px; border-radius: 12px; margin: 0 0 20px;">\n                                                    <p style="color: ',
                    )
                    .concat(
                      f || '#1f2328',
                      '; font-size: 16px; font-weight: 500; margin: 0 0 10px;">\n                                                        Enrollment Canceled\n                                                    </p>\n\n                                                    <ul style="padding: 0 0 0 35px;">\n                                                        <li style="color: ',
                    )
                    .concat(
                      f || '#1f2328',
                      '"; margin: 0 0 5px;">\n                                                            Order Date:\n                                                            <strong style="color: ',
                    )
                    .concat(
                      f || '#1f2328',
                      '">[start_date]</strong>\n                                                        </li>\n\n                                                        <li style="color: ',
                    )
                    .concat(
                      f || '#1f2328',
                      '"; margin: 0 0 5px;">\n                                                            Status:\n                                                            <strong style="color: ',
                    )
                    .concat(
                      f || '#1f2328',
                      '">Canceled</strong>\n                                                        </li>\n\n                                                        <li style="color: ',
                    )
                    .concat(
                      f || '#1f2328',
                      '";">\n                                                            Reason (if provided):\n                                                            <strong style="color: ',
                    )
                    .concat(
                      f || '#1f2328',
                      '">[reason_for_cancellation]</strong>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n\n                                                <div style="margin: 0 0 15px 0; padding:0; color: ',
                    )
                    .concat(
                      f || '#1f2328',
                      '";">\n                                                    ',
                    )
                    .concat(
                      c,
                      '\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n    </div>\n</body>\n\n</html>\n\n\n    ',
                    )
                );
              })(v))
            : 'student_course_completed' ===
                (null == p || null === (l = p.basic) || void 0 === l ? void 0 : l.id) &&
              (h = (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.img_url,
                  n = void 0 === t ? Cee : t,
                  r = e.title,
                  a = void 0 === r ? 'Congratulations! You’ve Completed' : r,
                  o = e.content,
                  i =
                    void 0 === o
                      ? '<p>Hi [student_name],</p><p style="margin: 0 0 15px 0; padding:0; color: #1F2328;">We noticed your enrollment for <strong>[course_name]</strong> was cancelled.</p>'
                      : o,
                  l = e.button_text,
                  c = void 0 === l ? 'Access My Certificate' : l,
                  u = (e.button_link, e.footer_text),
                  s =
                    void 0 === u
                      ? 'Click below to view your course and access your certificate:'
                      : u,
                  d = e.background_color,
                  m = void 0 === d ? '#F4F5F7' : d,
                  p = e.body_background_color,
                  f = void 0 === p ? '#FFFFFF' : p,
                  v = e.color,
                  g = void 0 === v ? '#6e42d3' : v,
                  h = e.base_color,
                  y = void 0 === h ? '#6e42d3' : h,
                  b = e.button_position,
                  _ = void 0 === b ? 'center' : b,
                  w = e.course_suggestion_text,
                  E =
                    void 0 === w
                      ? 'To continue on your implementation journey, we recommend you take the following courses next:'
                      : w,
                  S = '<div style="text-align: '
                    .concat(
                      _ || 'center',
                      '; margin: 25px 0 0;">\n                        <a href="#" style="background: ',
                    )
                    .concat(
                      y || '#6e42d3',
                      ';#6e42d3; color: #ffffff; padding: 14px 25px; font-size: 15px; font-weight: 500; line-height:1; text-transform: capitalize; text-decoration: none; border-radius: 12px; display: inline-block;">\n                            ',
                    )
                    .concat(c, '\n                        </a>\n                    </div>');
                return '\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Complete Course #</title>\n</head>\n\n<body>\n    <div class="creator-lms-email-container">\n        <table class="creator-lms-table-main" style="width: 100%; border-spacing: 0; background: '
                  .concat(
                    m || '#F4F5F7',
                    '; border:0;">\n            <tr style="background: transparent; border: none; border-radius: 0;">\n                <td style="background: transparent; border: none; border-radius: 0; padding: 40px;">\n                    <table class="creator-lms-table2" style="border-spacing: 0; max-width: 600px; width: 100%; margin-left: auto; margin-right: auto; border-collapse: separate;">\n                        <tr>\n                            <td style="border: 5px solid ',
                  )
                  .concat(y || '#6e42d3', '; background: ')
                  .concat(
                    f || '#FFFFFF',
                    '; border-radius: 20px;">\n                                <table class="creator-lms-table3" style="width: 100%; border-collapse: collapse;">\n                                    \x3c!-- Header with Logo --\x3e\n                                    <tr class="creator-lms-email-header">\n                                        <td style="border: none; border-bottom: 1px solid #eee; padding: 16px 20px; text-align: center; background: ',
                  )
                  .concat(
                    f || '#FFFFFF',
                    '; border-radius: 20px 20px 0 0;">\n                                            <img src="',
                  )
                  .concat(
                    n || Cee,
                    '" alt="Your Logo" width="auto" height="auto" style="border: 0; display: block; margin: 0 auto;">\n                                        </td>\n                                    </tr>\n                                    \x3c!-- Main Content --\x3e\n                                    <tr>\n                                        <td style="padding: 25px 35px 30px; background: ',
                  )
                  .concat(
                    f || '#FFFFFF',
                    '; border: 0; border-radius: 0 0 20px 20px;">\n                                            <div class="body-content-inner" style="color: ',
                  )
                  .concat(
                    g || '#1f2328',
                    '; font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; font-size: 15px; line-height: 1.6; text-align: ',
                  )
                  .concat(
                    'rtl' === document.dir ? 'right' : 'left',
                    ';">\n                                                <h1 style="padding: 0; color: ',
                  )
                  .concat(
                    y || '#6e42d3',
                    '; font-size: 28px; line-height: 1.3; margin: 0; font-weight: bold; text-align: center; margin-bottom: 20px;">\n                                                    ',
                  )
                  .concat(
                    a,
                    '\n                                                </h1>\n                                                <div style="margin: 0 0 15px 0; padding:0; color: ',
                  )
                  .concat(g || '#1f2328', ';">\n                                                  ')
                  .concat(
                    i,
                    '\n                                                </div>\n                                              \n                                                <p style="color: ',
                  )
                  .concat(
                    g || '#1f2328',
                    '; font-size: 16px; font-weight: 500; margin: 0 0 10px;">\n                                                    Completion Details:\n                                                </p>\n\n                                                <table class="creator-lms-order-items-table" style="width: 100%; border: 0; border-collapse: separate; margin: 0 0 20px">\n                                                    <tr>\n                                                        <td style="border: 1px solid #EBECED; border-radius: 10px; overflow: hidden;">\n                                                            <table style="width: 100%; border: 0; border-collapse: collapse;">\n                                                                <tbody>\n                                                                    <tr>\n                                                                        <td style="padding: 14px 20px; border-bottom: 1px solid #EBECED;">\n                                                                            <span style="color: #7A8B9A;">Course Name:</span>\n                                                                            <strong>[course_name]</strong>\n                                                                        </td>\n                                                                    </tr>\n                                                                    <tr>\n                                                                        <td style="padding: 14px 20px; border-bottom: 1px solid #EBECED;">\n                                                                            <span style="color: #7A8B9A;">Enrollment Date:</span>\n                                                                            <strong>[enrollment_date]</strong>\n                                                                        </td>\n                                                                    </tr>\n                                                                    <tr>\n                                                                        <td style="padding: 14px 20px;">\n                                                                            <span style="color: #7A8B9A;">Certificate:</span>\n                                                                            <a href="/path/to/certificate" style="color: ',
                  )
                  .concat(
                    y || '#6e42d3',
                    ';" download>Download Certificate</a>\n                                                                        </td>\n                                                                    </tr>\n                                                                </tbody>\n                                                            </table>\n                                                        </td>\n                                                    </tr>\n                                                </table>\n\n                                                <div style="margin: 0 0 15px 0; padding:0;">\n                                                    ',
                  )
                  .concat(
                    E,
                    '\n                                                </div>\n\n                                                <ul class="related-course" style="padding: 0 0 0 35px; margin: 15px 0;">\n                                                    <li style="margin: 0 0 5px;"><a href="#" style="color: ',
                  )
                  .concat(
                    y || '#6e42d3',
                    ';">UX Design for Virtual Reality</a></li>\n                                                    <li style="margin: 0 0 5px;"><a href="#" style="color: ',
                  )
                  .concat(
                    y || '#6e42d3',
                    ';">AI for Designers</a></li>\n                                                </ul>\n\n                                                <div style="margin: 0 0 15px 0; padding:0; color: ',
                  )
                  .concat(
                    g || '#1f2328',
                    '">\n                                                    ',
                  )
                  .concat(
                    s,
                    '\n                                                </div>\n\n                                                ',
                  )
                  .concat(
                    c && S,
                    '\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n    </div>\n</body>\n\n</html>\n    ',
                  );
              })(v)),
      (0, ReactHooks.useEffect)(
        function () {
          var e = m.current;
          e && ((e.contentDocument || e.contentWindow.document).body.innerHTML = h);
        },
        [h],
      ),
      (
        <React.Fragment>
          <Ea
            style={{
              backgroundColor: (null == v ? void 0 : v.background_color) || '#F4F5F7',
            }}
          >
            <Controls.FlexWP justify={'center'} align={'center'}>
              <iframe
                ref={m}
                width={'100%'}
                height={'667px'}
                style={
                  'mobile' === c
                    ? {
                        width: '515px',
                      }
                    : {}
                }
              />
            </Controls.FlexWP>
          </Ea>
        </React.Fragment>
      )
    );
  };
}
