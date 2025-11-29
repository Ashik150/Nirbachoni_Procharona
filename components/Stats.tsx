import React, { useEffect, useRef, useState } from 'react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, people: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const targets = { years: 25, projects: 150, people: 50000 };
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          years: Math.floor(targets.years * progress),
          projects: Math.floor(targets.projects * progress),
          people: Math.floor(targets.people * progress),
        });

        if (currentStep >= steps) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const toBanglaNumber = (num: number | string): string => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(char => {
      if (char >= '0' && char <= '9') {
        return banglaDigits[parseInt(char)];
      }
      return char;
    }).join('');
  };

  const formatNumber = (num: number, suffix: string) => {
    if (suffix === 'k') {
      // Convert 50000 to "50,000" then to Bangla
      return toBanglaNumber(num.toLocaleString());
    }
    return toBanglaNumber(num);
  };

  return (
    <section ref={sectionRef} className="bg-brand-accent text-white py-12 relative z-20">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-700">
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-brand mb-1 text-white">
            {formatNumber(counts.years, '')}+
          </div>
          <div className="text-slate-400 text-sm md:text-base">বছর জনসেবায়</div>
        </div>
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-brand mb-1 text-white">
            {formatNumber(counts.projects, '')}+
          </div>
          <div className="text-slate-400 text-sm md:text-base">সম্পন্ন প্রকল্প</div>
        </div>
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-brand mb-1 text-white">
            {formatNumber(counts.people, 'k')}+
          </div>
          <div className="text-slate-400 text-sm md:text-base">সরাসরি উপকৃত মানুষ</div>
        </div>
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-brand mb-1 text-white">২৪/৭</div>
          <div className="text-slate-400 text-sm md:text-base">সেবা নিশ্চিতকরণ</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;