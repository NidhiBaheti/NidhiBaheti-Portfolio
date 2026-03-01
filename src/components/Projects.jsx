import useScrollAnimation from '../hooks/useScrollAnimation';

const ProjectCard = ({ project, index }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col animate-on-scroll-scale ${cardVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      {project.image && (
        <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
            {project.date}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-3 flex-1">
          {project.description}
        </p>

        <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 px-4 py-2 mb-4">
          <p className="text-sm font-semibold text-accent-700 dark:text-accent-300">
            {project.achievement}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-center text-sm font-medium"
            >
              <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center text-sm font-medium"
            >
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });

  const projects = [
    {
      title: "HireMePls.Ai",
      description: "LeetCode won’t save you when they ask why you made that architectural decision in your last job. Interview.AI turns your resume into a full mock interview — tailored technical questions from your actual experience (powered by ElevenLabs voice agents), real-time grading across five dimensions, adaptive follow-ups, and a live coding sandbox (powered by Modal). All in one shot.",
      achievement: "Transforms resume data into adaptive mock interviews with voice-driven Q&A, live coding, and multi-dimensional real-time evaluation",
      date: "2026",
      tags: ["Interview AI", "ElevenLabs", "Modal", "Voice Agents", "Live Coding"],
      category: ["AI", "Web Development"],
      github: "https://github.com/NidhiBaheti/HireMePls.ai",
      demo: "https://www.youtube.com/watch?v=C_gfCE25pdo",
      image: null
    },
    {
      title: "CAT Inspect",
      description: "Every minute equipment sits broken, inspectors are still spending 45 minutes per job writing notes and filing reports manually. CAT AI Inspector cuts that to 5 seconds — snap a photo, speak a voice note, get a severity-ranked report instantly. It works hands-free in English and Spanish, and built with real-world industrial deployment in mind.",
      achievement: "Reduced inspection reporting time from 45 minutes to about 5 seconds with multilingual, hands-free AI-assisted defect reporting",
      date: "2026",
      tags: ["Computer Vision", "Voice Notes", "Industrial AI", "Bilingual", "Inspection Automation"],
      category: ["AI", "Computer Vision"],
      github: "https://github.com/JyotBuch/caterpillar",
      demo: null,
      image: null
    },
    {
      title: "MarketMind",
      description: "LLM-driven brand and consumer agents for SMS and Instagram campaign simulation, enabling dynamic scenario testing and influencer partnership integration for D2C brands.",
      achievement: "Tested 15+ variations and automated campaign launches; system reduced failed campaign rates by 5% and surfaced high-value audience segments from 500K+ interactions",
      date: "2025",
      tags: ["LLMs", "Campaign Analytics", "SMS", "Instagram", "Marketing"],
      category: ["NLP", "ML", "Data Science"],
      github: "https://github.com/NidhiBaheti/MarketMind-Multi-agent-marketing-simulation-",
      demo: null,
      image: null
    },
    {
      title: "DribbleAI-Soccer Video Analysis",
      description: "Developed real-time soccer video analysis pipeline using OpenCV, PyTorch, and video-language models. Designed dense captioning module with spatial-temporal representations for event-level descriptions.",
      achievement: "Optimized inference with adaptive frame sampling, event filtering, and model quantization for low-latency deployment",
      date: "2024",
      tags: ["OpenCV", "PyTorch", "Computer Vision", "Video Analysis", "Deep Learning"],
      category: ["Computer Vision", "Deep Learning"],
      github: "https://github.com/shagufta24/DribbleAI",
      demo: null,
      image: null
    },
    {
      title: "AgroTalk: LLM-Powered Agricultural Advisor",
      description: "Developed a bilingual (English/Spanish) chatbot using a fine-tuned LLM to provide US farmers personalized crop planning, tillage practices, and sustainable farming recommendations. Integrated USDA soil composition data, real-time weather APIs, and regional news feeds for field-specific advice.",
      achievement: "Validated by AGCO Corporation engineers; enabled both voice and text interfaces to improve accessibility and adoption",
      date: "2024",
      tags: ["LLMs", "Chatbot", "NLP", "Weather API", "Agriculture"],
      category: ["NLP", "ML", "Web Development"],
      github: "https://github.com/JyotBuch/AgroTalk",
      demo: "#",
      image: null
    },
    {
      title: "Virtual Health Assistant",
      description: "Virtual care platform for preliminary health screening using image-based skin analysis and conversational symptom intake. Guides users with home remedies and connects them to nearby doctors for next steps.",
      achievement: "Enabled early screening for 5 skin conditions and 10 common diseases in collaboration with doctors",
      date: "2023",
      tags: ["Computer Vision", "Conversational AI", "OpenCV", "NLP", "Python"],
      category: ["Healthcare AI", "ML"],
      github: "https://github.com/NidhiBaheti/Virtual-Health-Assistant",
      demo: null,
      image: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-pink-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 animate-on-scroll ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;