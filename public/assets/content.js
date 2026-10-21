// Public content only. Evidence and outstanding questions live in CONTENT_NOTES.md.
export const profile = {
    name: 'Huawei Wang', role: 'Software Engineer',
    title: 'Huawei Wang — Software Engineer',
    description: 'Software engineer working on backend services, data pipelines, and full-stack applications. Explore selected work and personal projects by Huawei Wang.',
    headline: 'Thoughtful systems.\nUseful software.',
    intro: 'I’m Huawei, a software engineer building backend services, data pipelines, and full-stack applications for logistics and fulfillment.',
    email: 'harvey.h.wang@outlook.com', github: 'https://github.com/whw0324', linkedin: 'https://www.linkedin.com/in/huaweiwang',
    about: ['My path into software runs through biology, statistics, and hands-on work with operational systems. That background shapes how I approach engineering: understand the problem, examine the data, and make the behavior explicit.', 'Today, my work centers on Java services, distributed workflows, and data processing. I’m also exploring retrieval-augmented generation and spec-driven development, with code review and testing as part of the process.'],
    work: {
        name: 'Notion Knowledge Finder', label: 'Knowledge retrieval · Personal project',
        summary: 'From scattered notes to answers with sources.',
        description: 'A retrieval-augmented assistant for finding internal knowledge in Notion. It syncs pages shared with a Notion integration, retrieves relevant passages, and returns answers linked to the original sources.',
        stack: ['Python', 'FastAPI', 'Streamlit', 'LangGraph', 'Chroma'],
        features: [['Connected to the source', 'Reads Notion page blocks recursively and splits their text into searchable chunks.'], ['An explicit answer boundary', 'A relevance threshold routes the workflow to an answer or a clear no-answer response.'], ['Flexible model providers', 'Supports OpenAI and Gemini for chat and embeddings, configured independently.']],
        url: 'https://github.com/whw0324/notion-knowledge-finder'
    },
    experience: [
        { company: 'Walmart (via BeaconFire)', role: 'Software Engineer', date: 'Dec 2024 — Present' },
        { company: 'PCOnline', role: 'Technical Product Manager, Backend & Data Systems', date: 'Feb 2023 — Dec 2024' },
        { company: 'University of Delaware', role: 'Research Assistant', date: 'Jun 2019 — Feb 2023' }
    ],
    education: [
        { degree: 'M.S. Statistics', school: 'University of Delaware', date: 'Aug 2021 — Dec 2022' },
        { degree: 'B.A. Biological Sciences', school: 'University of Delaware', date: 'Aug 2017 — Dec 2020', note: 'Minor in Computer Science' }
    ],
    skills: [
        { name: 'Backend & systems', tools: 'Java · Spring Boot · REST APIs · Kafka · Redis', context: 'Inventory, order, and fulfillment workflows' },
        { name: 'Data & infrastructure', tools: 'Python · SQL · Spark · Airflow · PostgreSQL · Docker', context: 'Data pipelines and operational analysis' },
        { name: 'Interfaces & retrieval', tools: 'TypeScript · React · FastAPI · LangGraph · Chroma', context: 'Full-stack interfaces and Notion knowledge retrieval' },
        { name: 'Quality & delivery', tools: 'JUnit · Mockito · Git · Jenkins · CI/CD', context: 'Testing, code review, and spec-driven development' }
    ],
    explorations: [
        { name: 'Hawaii', kind: 'A little off the clock', description: 'A small personal travel plan, made for my own trip. A place for an itinerary, a little curiosity, and time away from the editor.', tags: 'Personal travel planning', url: 'https://github.com/whw0324/hawaii', graphic: 'islands' },
        { name: 'Java-Mock', kind: 'Learning by revisiting', description: 'My Java interview study and practice project. A local-first study app with concept exercises, bookmarks, and progress saved in the browser.', tags: 'React · TypeScript · Vite', url: 'https://github.com/whw0324/Java-Mock', graphic: 'braces' }
    ]
};
