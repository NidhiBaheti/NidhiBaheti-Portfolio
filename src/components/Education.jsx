import useScrollAnimation from '../hooks/useScrollAnimation';
import EducationCard from './EducationCard';

const Education = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  
  const education = [
    {
      institution: "University of Illinois-Urbana-Champaign",
      degree: "Master of Science in Statistics",
      duration: "Aug 2024 – May 2026",
      gpa: "4.0/4.0",
      location: "Champaign, IL",
      logo: "/NidhiBaheti-Portfolio/logos/uiuc.png",
      coursework: [
        "Statistical Modeling",
        "Deep Learning for Computer Vision",
        "Causal Inferences"
      ],
      color: "primary"
    },
    {
      institution: "Vishwakarma University",
      degree: "Bachelor of Technology in Computer Engineering - Business Analytics",
      duration: "July 2019 – May 2023",
      gpa: "9/10",
      location: "Pune, India",
      logo: "/NidhiBaheti-Portfolio/logos/vishwakarma.png",
      coursework: [
        "Operating Systems",
        "Machine Learning",
        "Big Data",
        "Statistical Analysis"
      ],
      color: "accent"
    }
  ];

  return (
    <section id="education" className="py-20 bg-pink-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 animate-on-scroll ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
