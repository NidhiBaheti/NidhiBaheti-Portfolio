import useScrollAnimation from '../hooks/useScrollAnimation';

const EducationCard = ({ edu, index }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden animate-on-scroll ${cardVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="md:flex">
        {/* Color accent bar */}
        <div className={`w-2 md:w-3 bg-gradient-to-b from-${edu.color}-400 to-${edu.color}-600`}></div>
        
        <div className="flex-1 p-4 md:p-6">
          <div className="flex items-start gap-3 mb-3">
            {/* Logo */}
            {edu.logo && (
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                <img 
                  src={edu.logo} 
                  alt={`${edu.institution} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-base md:text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {edu.degree}
                  </p>
                  <div className="flex flex-wrap gap-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {edu.duration}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {edu.location}
                    </span>
                  </div>
                </div>
                <div className="mt-2 md:mt-0">
                  <div className={`inline-block px-3 py-1 bg-${edu.color}-100 dark:bg-${edu.color}-900/30 rounded-lg`}>
                    <span className={`text-${edu.color}-700 dark:text-${edu.color}-300 font-bold text-sm`}>
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center text-sm">
              <svg className="w-4 h-4 mr-1 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Relevant Coursework:
            </h4>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map((course, courseIndex) => (
                <span
                  key={courseIndex}
                  className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
