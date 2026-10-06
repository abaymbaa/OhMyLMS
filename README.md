# OhMyLMS

WordPress LMS with editable React feature modules and a reproducible source build.

- [React development guide](docs/REACT-DEVELOPMENT.md): component boundaries, conversion contracts and the feature workflow.
- [Build and local setup](docs/DEVELOPMENT.md): commands, isolated testing and source-asset activation.
- [Extension SDK](docs/EXTENSIONS.md): supported extension points.
- [Content Hub](docs/CONTENT-HUB.md): one place for courses (grades, exams and subjects built from chapters and skills), the lesson library and the skill library. Skills are a core feature.
- [Curriculum and Learning Tracks](docs/CURRICULUM-TRACKS.md): curriculum structures (which replace course categories), Learning Tracks (which replace course tags), shared-skill mappings and the learner dashboard.
- [Syllabuses](docs/SYLLABUS.md): turn any curriculum item into a syllabus with skill groups and skills, and import it from a CSV file.
- [MCP connections](docs/MCP.md): authenticated LMS tools for OpenAI, Anthropic, and Gemini.
- [Acceptance status](docs/ACCEPTANCE.md): tested scope and compatibility limitations.

Run `npm run format` to format authored React source and `npm run check` to validate formatting, contracts, tests and the production build.
