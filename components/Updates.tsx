import React from 'react';
import { Calendar, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';
import { UPDATES } from '../constants';

const Updates: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-accent">সর্বশেষ আপডেট</h2>
          <div className="w-20 h-1 bg-brand mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {UPDATES.map((update) => (
            <div key={update.id} className="group cursor-pointer">
              <div className="aspect-video bg-slate-200 rounded-2xl mb-4 overflow-hidden relative shadow-sm hover:shadow-lg transition-all">
                <img
                  src={`https://picsum.photos/seed/${update.id * 123}/500/300`}
                  alt={update.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm uppercase tracking-wider text-brand-accent">
                  {update.type === 'video' ? 'ভিডিও' : update.type === 'news' ? 'খবর' : 'পোস্ট'}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand transition-colors mb-2 line-clamp-2">
                {update.title}
              </h3>
              <div className="flex items-center gap-4 text-slate-400 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {update.date}
                </span>
                <span>•</span>
                <span>{update.views} ভিউ</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;