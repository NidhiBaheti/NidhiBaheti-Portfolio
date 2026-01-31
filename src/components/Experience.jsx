import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Experience = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Pinpoint",
      duration: "July 2025 – Sep 2025",
      location: "Remote",
      type: "Internship",
      logo: "/NidhiBaheti-Portfolio/logos/pinpoint.png",
      achievements: [
        "Developed multi-agent LLM system with brand and consumer agents to simulate SMS and Instagram campaigns, testing 15+ variations and reducing failed campaign rates by 5% for D2C brands",
        "Automated campaign launches and added influencer partnership tracking to better gauge campaign effectiveness and messaging strategies",
        "Built Python pipelines to analyze 500K+ social interactions across Instagram, TikTok and SMS, identifying 3 high-value audience segments that increased campaign CTR by 8%"
      ],
      tags: [	"Multi-Agent LLM Systems","Generative AI for Marketing","Marketing Automation Pipelines","Audience Segmentation & Analytics"]
    },
    {
      title: "Research Assistant",
      company: "iSTEM - University of Illinois Urbana-Champaign",
      duration: "Jan 2025 – Present",
      location: "Champaign, IL",
      type: "Research",
      logo: "/NidhiBaheti-Portfolio/logos/uiuc.png",
      achievements: [
        "Designed and executed a quasi-experimental evaluation of STEM summer programs using a difference-in-differences framework to measure program impact",
        "Applied NLP and statistical analysis to survey and focus group responses, identifying themes and barriers that informed curriculum improvements",
        "Generated evidence-based recommendations leading to targeted module redesigns"
      ],
      tags: ["Python", "NLP", "Statistical Analysis", "Causal Inference", "Power BI"]
    },
    {
      title: "Data Scientist",
      company: "Accelirate Softech",
      duration: "Feb 2024 – Aug 2024",
      location: "Pune, India",
      type: "Full-time",
      logo: "/NidhiBaheti-Portfolio/logos/accelirate.png",
      achievements: [
        "Built automated budget variance pipeline integrating OCR-extracted invoices (1,200+ monthly) with Salesforce CRM using Python and SQL stored procedures, reducing manual reconciliation from 20+ hours to ~2 hours weekly",
        "Evaluated ARIMA, Prophet, and LSTM on 24 months of spend data; deployed ARIMA achieving ~12% improved forecast accuracy",
        "Enabled early detection of budget overruns 2–3 weeks in advance for finance teams"
      ],
      tags: ["Python", "SQL", "Salesforce CRM", "ARIMA", "OCR", "Forecasting"]
    },
    {
      title: "Co-Founder & President",
      company: "Statistics in the Community (StatCom)",
      duration: "May 2025 – Present",
      location: "Champaign, IL",
      type: "Leadership",
      logo: "/NidhiBaheti-Portfolio/logos/statcom.png",
      achievements: [
        "Founded StatCom and built a team of 150+ members, launching data science projects that help students get consulting experience and solve community challenges",
        "Led technical workshops and managed outreach, forming partnerships across campus and with city agencies; equipped students to present results and communicate insights to stakeholders",
        "Coordinated 8 active projects with community partners; invited to present analytics recommendations at the Urbana mayor's office"
      ],
      tags: ["Team Leadership", "Community Engagement", "Data Science Consulting", "Workshop Development"]
    },
    {
      title: "Machine Learning Intern",
      company: "Nonstop IO Technologies",
      duration: "Aug 2022 – Dec 2022",
      location: "Pune, India",
      type: "Internship",
      logo: "/NidhiBaheti-Portfolio/logos/nonstop.png",
      achievements: [
        "Developed BERT-based NLP pipeline to parse resumes and match candidates to job descriptions",
        "Automated candidate-job similarity scoring using contextual embeddings and ElasticSearch, increasing match precision by 8%",
        "Deployed solution with Docker for scalable and reliable use across teams"
      ],
      tags: ["BERT", "NLP", "ElasticSearch", "Docker", "Python"]
    }
  ];

  const typeColors = {
    'Internship': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Full-time': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Research': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'Leadership': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  };

  return (
    <section id="experience" className="py-20 bg-pink-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 animate-on-scroll ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedIndex === index
                  ? 'ring-2 ring-primary-600 scale-105'
                  : 'opacity-75 hover:opacity-100'
              }`}
            >
              <div className="p-4 rounded-lg h-full bg-white dark:bg-gray-800 shadow-lg">
                {/* Logo */}
                {exp.logo && (
                  <div className="mb-3 flex justify-center">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="font-bold text-lg mb-1 text-center text-gray-900 dark:text-white">
                  {exp.title}
                </h3>

                {/* Company */}
                <p className="text-sm font-semibold text-center mb-2 text-primary-600 dark:text-primary-400">
                  {exp.company}
                </p>

                {/* Duration */}
                <p className="text-xs text-center mb-3 text-gray-600 dark:text-gray-400">
                  {exp.duration}
                </p>

                {/* Type Badge */}
                <div className="flex justify-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${typeColors[exp.type]}`}>
                    {exp.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        <div className="mt-12 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border-l-4 border-primary-500">
            <div className="p-8">
              {/* Header with Logo and Title */}
              <div className="flex items-start gap-6 mb-6">
                {experiences[selectedIndex].logo && (
                  <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <img
                      src={experiences[selectedIndex].logo}
                      alt={`${experiences[selectedIndex].company} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">
                    {experiences[selectedIndex].title}
                  </h3>
                  <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {experiences[selectedIndex].company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {experiences[selectedIndex].duration}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {experiences[selectedIndex].location}
                    </span>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${typeColors[experiences[selectedIndex].type]}`}>
                  {experiences[selectedIndex].type}
                </span>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {experiences[selectedIndex].achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="3" />
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[selectedIndex].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Click Hint */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
          Click on any card to view full details
        </p>
      </div>
    </section>
  );
};

export default Experience;
