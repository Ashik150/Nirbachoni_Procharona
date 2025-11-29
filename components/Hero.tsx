import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="home"
      className="relative pt-10 md:pt-14 pb-0 bg-[#f0fdfa] overflow-hidden"
    >

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="order-2 md:order-1 space-y-3 md:w-7/12 relative z-20">
          <div className="inline-block bg-brand-light text-brand-dark px-4 py-1 rounded-full text-sm font-semibold border border-[#b2dfdb]">
            🗳️ আসন্ন নির্বাচনে আপনার বিশ্বস্ত সাথী
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-brand-accent leading-tight">
            নেতৃত্ব যেখানে <br />
            <span className="text-brand">আস্থা</span> সেখানে
          </h1>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => navigate('/manifesto-detail')}
              className="bg-brand-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              ইশতেহার দেখুন <ArrowRight size={20} />
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="border-2 border-brand-accent text-brand-accent px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-all"
            >
              মতামত দিন
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end relative md:w-5/12 md:-ml-24">

          {/* Candidate Image - Cutout Style */}
          <div className="relative z-10">
            {/* Note: Ideally use a transparent PNG here for best results */}
            <img
              src="/nuru.jpg"
              alt="Candidate"
              className="w-full max-w-[400px] md:max-w-[450px] h-auto object-contain drop-shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/nuru.png";
              }}
            />

            {/* Floating Badge */}
            {/* <div className="absolute bottom-10 right-0 md:-right-4 bg-brand text-white p-4 rounded-xl shadow-lg font-bold text-center backdrop-blur-sm bg-opacity-95">
              <div className="text-xs uppercase tracking-wider mb-1 opacity-90">
                প্রতীক
              </div>
              <div className="text-2xl">ধানের শীষ</div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
