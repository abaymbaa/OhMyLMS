# Quiz and question modules

| Module | Implementation | Responsibility |
| --- | --- | --- |
| Quiz player | `assets/interactivity/quiz-player/` | Learner navigation, required answers, submission, timer, matching and reorder interactions |
| Quiz editor | `assets/src/features/quiz-editor/` | Quiz loading/saving/publishing, introduction/settings, question ordering and bank placement |
| Question editor | `assets/src/features/question-editor/` | Question canvas/settings, answer editors, form workspace, preview and custom editor adapter |
| Question bank | `assets/src/features/question-bank/` | Search, creation dialogs, approval, versions, sharing and skill links |

Quiz and question editors have independent `index.js` interfaces and `components.json` runtime contracts. Each factory accepts `readRuntime` and returns a React component. These bridges use the existing WordPress store; saved payloads, REST routes and grading contracts stay the same. The question canvas retains a legacy quiz-placement removal action through the quiz API.

`window.ohmylms.extensions.quizEditorComponents` and `questionEditorComponents` expose the separate factory interfaces. The existing `quizComponents` interface combines both for compatibility. Old imports under `features/quizzes/`, the moved question-bank files and `extensions/QuestionEditor.jsx` forward to the canonical implementations. Add new code to the canonical modules.

The player exports `createQuizPlayer(runtime)` from `player.js`. It returns `{ state, actions, callbacks }`; its runtime supplies context/element access, event wrappers, answer validation, event emission and the scoped expiry action. `index.js` binds that interface to the WordPress Interactivity store. `state.js` owns reactive getters, `validation.js` owns required-answer checks, and `questionControls.js` exports `createQuestionControls(root, context)` for matching/reorder. The published `assets/interactivity/quiz.js` and `questions.js` URLs still initialize their original store namespaces.

## Extend a question type

Register its server render/validate/grade definition with `ohmylms_register_question_type`, then register its React authoring component before admin bootstrap:

```js
window.ohmylms.extensions.registerQuestionEditor('my-question', {
  label: 'My question',
  render: MyQuestionEditor,
});
```

`MyQuestionEditor` receives `{ question, value, onChange }`. `value` contains question settings; `onChange(settingsPatch)` merges settings through the existing authoring store and keeps the registered type ID. The existing server manifest controls which custom types are available. Register frontend validators and dynamic mount adapters through `ohmylms/interactivity`. See [EXTENSIONS.md](EXTENSIONS.md) and [INTERACTIVITY.md](INTERACTIVITY.md) for full registration contracts. Custom types retain the current selection and preview behavior; the static form dropdown/preview renderer is not an automatic plugin registry.

For a new built-in authoring component, add its factory to the appropriate module interface and its runtime contract to that module's manifest. For question form types, update `questionBlocks.mjs`, the appropriate answer controls and preview renderer. Keep bank management in the bank module and player interactions in the player module.

## Build and verify

Run `npm run lint`, `npm test`, and `npm run build`. The build adapts both editor manifests and produces separate lazy editor chunks. Frontend player files are served as native script modules and do not need webpack output.
