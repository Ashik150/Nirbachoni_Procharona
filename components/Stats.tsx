import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-brand-accent text-white py-12 relative z-20 -mt-1">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-700">
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-brand mb-1">২৫+</div>
          <div className="text-slate-400 text-sm md:text-base">বছর জনসেবায়</div>
        </div>
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-brand mb-1">১৫০+</div>
          <div className="text-slate-400 text-sm md:text-base">সম্পন্ন প্রকল্প</div>
        </div>
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-brand mb-1">৫০k+</div>
          <div className="text-slate-400 text-sm md:text-base">সরাসরি উপকৃত মানুষ</div>
        </div>
        <div className="p-2">
          <div className="text-3xl md:text-4xl font-bold text-brand mb-1">২৪/৭</div>
          <div className="text-slate-400 text-sm md:text-base">সেবা নিশ্চিতকরণ</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;