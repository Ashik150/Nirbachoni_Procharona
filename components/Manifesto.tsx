import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { MANIFESTO_ITEMS } from '../constants';

const Manifesto: React.FC = () => {
  const [activeItem, setActiveItem] = useState(MANIFESTO_ITEMS[0]);
  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate('/manifesto-detail');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

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
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">আমাদের নির্বাচনী ইশতেহার</h2>
          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            আগামী ৫ বছরে আমরা যে কাজগুলো অগ্রাধিকার ভিত্তিতে করব, তার একটি রূপরেখা। আপনাদের চাহিদাই আমাদের অঙ্গীকার।
          </p>
        </div>

        {/* New Layout: Sidebar + Video Section */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-4 space-y-3">
            {MANIFESTO_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${activeItem.id === item.id
                  ? 'bg-brand text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className={`text-sm ${activeItem.id === item.id ? 'text-white/90' : 'text-slate-300'}`}>
                  {item.shortDesc}
                </p>
              </button>
            ))}
          </div>

          {/* Video Section */}
          <div className="md:col-span-8">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              {/* Video Player */}
              <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden relative group cursor-pointer mb-6">
                <img
                  src={activeItem.videoThumbnail}
                  alt={activeItem.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg pl-1 transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-brand ml-1 fill-brand" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <h3 className="text-2xl font-bold text-brand-accent mb-2">{activeItem.title}</h3>

              {/* Video Tag */}
              <div className="mb-4">
                <span className="inline-block bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-semibold">
                  {activeItem.videoTag}
                </span>
              </div>
            </div>

            {/* Read More Button - Outside video section, at right side */}
            <div className="flex justify-end">
              <button
                onClick={handleNavigateToDetail}
                className="mt-4 bg-brand-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all inline-flex items-center gap-2"
              >
                বিস্তারিত দেখুন <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;