# Extension API version 1

Feature code can live in `modules/<id>/` or a separate plugin. Internal modules load only via `OHMYLMS_ENABLED_MODULES` or `ohmylms_enabled_modules`. The examples module is disabled by default.

## Load and register

Register PHP definitions on `ohmylms_register_extensions`. Enqueue editor scripts on `ohmylms_enqueue_extension_scripts`, depending on its SDK handle argument. Those scripts load before the admin app.

```php
add_action('ohmylms_enqueue_extension_scripts', function ($sdk) {
    wp_enqueue_script('my-lms-extension', plugins_url('editor.js', __FILE__), [$sdk], '1', true);
});
```

Use `window.ohmylms.extensions` (`version === 1`) after that dependency loads, or listen for `ohmylms:extensions-ready`. The SDK currently requires the opt-in source build. Register pages and editor types before app bootstrap; late page/menu registration is unsupported. Slots update reactively.

All registration methods accept `(id, definition)` and return an unregister function. Definitions require `label` and React `render`. IDs are lowercase slugs, unique within each category; prefix yours with your plugin name. Optional fields: `apiVersion: 1`, finite `priority` (default 10), `enabled`, `slot`, `when(context)`. Order is priority then ID. Duplicate IDs/unsupported versions throw; disabled entries do not render.

| Method | Surface |
| --- | --- |
| registerAdminPage | `/extensions/<id>` in the admin hash router |
| registerEditorPanel | Existing route path in `slot`; context has route/hash/props |
| registerQuestionEditor | Matching PHP question ID; existing authoring store |
| registerLessonEditor | Matching PHP lesson ID; existing save callbacks |
| registerSlot | Named insertion point |
| registerMembershipSettings | Namespaced plan values and update callback |
| registerCheckoutField | Checkout UI guidance; register server fields separately |
| registerIntegration | Integrations screen panel |

Read `modules/examples/editor.js` and the small components in `assets/src/extensions/` for exact render props. `list`, `get`, `subscribe` and `getRevision` support custom consumers. `renderSlot(name,context,kind)` returns React; `mount(element,name,context,kind)` mounts outside admin. Rendering failures show a per-extension alert and emit `ohmylms:extension-error`. Async/event handlers and trusted PHP callbacks handle their own errors.

## Slots and settings

Named slots: `admin.screen.before`, `admin.screen.after`, `student.course.before`, `student.course.after`, `checkout.fields.after`, `checkout.summary.after`. Editor-panel slots use actual route paths listed in the recovery manifest. PHP `ohmylms_render_slot($name,$context)` also emits a server-rendering hook. Context must be public, JSON-safe data.

```php
ohmylms_register_extension_settings('my-benefit', [
    'contexts' => ['membership'],
    'schema' => ['type'=>'object', 'properties'=>[
        'label'=>['type'=>'string', 'maxLength'=>200]
    ]]
]);
```

Supported contexts: course, lesson, quiz, question, membership, assignment, certificate, session. Root unknown keys are rejected; constrain nested objects explicitly. Core single-object authoring endpoints accept `extension_settings: {"my-benefit":{"label":"..."}}`. Invalid settings reject before core fields save. Omitted namespaces are retained. GET exposes settings only to editors.

GET/PUT `/ohmylms/v1/extension-settings/<type>/<id>` accepts `{settings:{...}}`, requires `edit_post` and exact post type. The SDK `api` uses WordPress apiFetch/nonce middleware. `/ohmylms/v1/extensions` exposes definitions, not saved private data. Client visibility is not authorization.

## Question/lesson lifecycle

`ohmylms_register_question_type` requires label, render, validate and grade callbacks. Optional `editor.schema` validates saved settings. JS editor IDs must match server manifest IDs. Updates go through the existing question store/save API.

`validate($answer,$question)` returns bool and should accept empty answer shape for timeouts; required-answer enforcement is separate. `grade` returns `correct`, finite `fraction` (clamped 0..1), and `manual`. The server checks enrollment, ownership, timer, question membership and repeated submissions. Scores are server-derived; current storage awards whole points.

`ohmylms_register_lesson_type` requires label/render. Its matching JS editor uses supplied authoring callbacks. The example persists normal WordPress content. Existing `ohmylms_register_layout` and `ohmylms_register_activity` remain; layouts accept course/chapter/lesson/quiz contexts. Avoid recursively invoking a layout hook from its renderer.

## Checkout/integrations

`ohmylms_register_checkout_field` accepts label, type (text/textarea/email/number/select), required and scalar JSON schema. It adds `ohmylms_extension_<id>` to billing, validates data and persists `_ohmylms_extension_fields` after the order gets its ID. JS registration alone is not a trusted server field.

Prices, coupons, payment verification and enrollment remain server-side. Integration panels need permission-checked endpoints; never expose provider secrets. Examples demonstrate every category without core edits. Disabling a module hides UI but retains saved metadata. A quiz with an unavailable question extension fails safely.
