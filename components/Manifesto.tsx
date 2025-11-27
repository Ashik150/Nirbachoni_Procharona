import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRIORITIES } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="bg-brand-accent py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">আমাদের নির্বাচনী ইশতেহার</h2>
          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            আগামী ৫ বছরে আমরা যে কাজগুলো অগ্রাধিকার ভিত্তিতে করব, তার একটি রূপরেখা। আপনাদের চাহিদাই আমাদের অঙ্গীকার।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRIORITIES.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                idx % 2 === 0
                  ? 'bg-brand text-white shadow-lg'
                  : 'bg-white text-brand-accent'
              }`}
            >
              <div className="mb-6 p-3 bg-white/10 rounded-xl inline-block backdrop-blur-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p
                className={`leading-relaxed ${
                  idx % 2 === 0 ? 'text-white/90' : 'text-slate-600'
                }`}
              >
                {item.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold cursor-pointer hover:underline group">
                বিস্তারিত <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;