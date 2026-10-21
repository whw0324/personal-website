# Content evidence and follow-up

Reviewed on 2026-10-19 (America/Phoenix). This file is internal project documentation, outside the published `public/` directory. Do not copy the raw résumé into the site.

## Sources

- User-provided résumé: https://docs.google.com/document/d/1e98EOFY6HRS4fQ9SC3bvQpMdeTPl3kyc/edit
  - Read successfully through the connected Google Drive tool.
  - Supports Huawei Wang, Software Engineer, professional email, LinkedIn, the listed roles/dates, education, research background, and skill groups.
  - The extractor places employer headings after the work bullet list. Company, title, and dates are explicit; individual achievements have not been attributed to an employer on the website.
  - Private telephone number excluded. No raw résumé or download link is published.
- https://github.com/whw0324/notion-knowledge-finder/blob/main/README.md
  - Read first; additionally checked `pyproject.toml` and `src/notion_knowledge_finder/workflow.py`.
  - Current repository uses Python, FastAPI, Streamlit, LangGraph, and Chroma. The code confirms relevance-based answer/no-answer routing. README confirms source links, block ingestion, and configurable OpenAI/Gemini providers.
  - The résumé describes a React/TypeScript, PostgreSQL, and persistent-chat iteration. Those features are not presented as current repository functionality.
  - Integration authorization does not establish per-user document access controls. No production-readiness or user-level security claim is made.
  - The architecture illustration is a conceptual diagram, clearly labeled; not a screenshot.
- https://github.com/whw0324/hawaii
  - Repository metadata confirms a public repository. `README.md` and `readme.md` both returned 404.
  - Read only the first 65 lines of `index.html` to confirm a travel page exists. User explicitly identifies this as a casual personal travel plan.
  - Description stays within that scope. Abstract island artwork is decorative, not a screenshot or precise map. No personal itinerary details reproduced.
- https://github.com/whw0324/Java-Mock/blob/main/README.md
  - Describes Mockbook: a local-first Java interview study app built with React, TypeScript, and Vite; practice, bookmarks, and browser-stored progress.
  - User identifies this as personal Java review and practice. No production-system claims, invented contribution metrics, or runtime Java backend claims.

## Access limitations

Direct shell HTTP initially failed with `Operation not permitted` under the execution sandbox. The connected GitHub and Google Drive tools provided the material above. The missing Hawaii README is the only unresolved source-file access issue; the repository and its HTML were accessible. No whole-codebase or history traversal was performed.

## Central TODO list

- TODO: Confirm whether the résumé's newer Notion implementation lives in another branch or repository before adding its React UI, persistence, or background-sync claims.
- TODO: Supply a public-safe résumé file if a “Download Résumé” link is desired. The source résumé contains private contact details and is intentionally not offered for download.
- TODO: Supply verified live-demo URLs if desired. A local run command or deployment instructions are not evidence of a live deployment; no demo URLs were invented.
- TODO: Confirm a production domain before adding canonical/Open Graph URL metadata. Deployment is intentionally not configured to run automatically.
- TODO: Optionally clarify which résumé achievements belong to each employer before expanding the experience entries.

No TODO text is needed in the public professional introduction: its contents are supported by the sources above. Optional, unverified material is omitted and tracked here instead.
