import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [para1Ref, para1Visible] = useScrollAnimation({ threshold: 0.2 });
  const [para2Ref, para2Visible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-pink-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 animate-on-scroll ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p 
              ref={para1Ref}
              className={`animate-on-scroll ${para1Visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              I&apos;m a statistics graduate student at UIUC who builds ML systems that behave under pressure; 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> LLM-driven marketing simulations</span>, 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> NLP pipelines for hiring</span>, and 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> analytics tools that catch problems early</span>. 
              I&apos;m also the co-founder and president of <span className="font-semibold text-primary-600 dark:text-primary-400">StatCom (Statistics in the Community)</span>, 
              a student organization focused on tackling community driven projects and giving students hands-on, real-world consulting and data science experience.
            </p>

            <p 
              ref={para2Ref}
              className={`animate-on-scroll ${para2Visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              Ironically, I unwind by watching <span className="font-semibold text-accent-600 dark:text-accent-400">Formula 1</span>, 
              which is 75 laps of stress disguised as relaxation. When I need actual balance, I turn to 
              <span className="font-semibold text-accent-600 dark:text-accent-400"> dance and music</span>; 
              both great reminders that timing, rhythm, and knowing when not to overfit matter in life and in models.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
