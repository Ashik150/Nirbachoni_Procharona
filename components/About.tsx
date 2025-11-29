import React, { useState } from 'react';
import { CheckCircle, Play, ArrowRight, X } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-3/5 relative group">
          <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden shadow-2xl relative cursor-pointer border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
              alt="Video Thumbnail"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg pl-1 transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 text-brand ml-1 fill-brand" />
              </div>
            </div>
            <div className="absolute bottom-0 w-full p-4 text-center text-white font-bold bg-gradient-to-t from-black/80 to-transparent">
              ভিডিও বার্তা দেখুন
            </div>
          </div>
          {/* Signature effect */}
          {/* <div className="mt-6 text-center md:text-left">
             <div className="text-3xl md:text-4xl font-cursive text-brand-accent opacity-70 rotate-[-2deg]">
                মিয়া নুরুদ্দিন অপু
             </div>
             <p className="text-sm text-slate-500 mt-2 font-medium">শরীয়তপুর-৩</p>
          </div> */}
        </div>

        <div className="w-full md:w-2/5 space-y-6">
          <h4 className="text-brand font-bold tracking-widest uppercase text-sm md:text-base">আমার সম্পর্কে</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-accent leading-tight">
            পরিবর্তনের জন্য <br />
            <span className="relative inline-block">
              যোগ্য নেতৃত্ব
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand/20 -z-10"></span>
            </span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg text-justify">
            আমি বিশ্বাস করি রাজনীতি মানে ক্ষমতা নয়, রাজনীতি মানে দায়িত্ব। গত ১০ বছর ধরে আপনাদের পাশে থেকে কাজ করার চেষ্টা করেছি। শিক্ষার মান উন্নয়ন, স্বাস্থ্যসেবা নিশ্চিতকরণ এবং বেকারত্ব দূরীকরণ আমার মূল লক্ষ্য। আপনাদের প্রতিটি ভোট আমাকে আরও বেশি কাজ করার অনুপ্রেরণা যোগাবে।
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="bg-brand-light p-2 rounded-lg text-brand">
                <CheckCircle size={24} />
              </div>
              <span className="font-semibold text-slate-700">সততা ও নিষ্ঠা</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="bg-brand-light p-2 rounded-lg text-brand">
                <CheckCircle size={24} />
              </div>
              <span className="font-semibold text-slate-700">দ্রুত উন্নয়ন</span>
            </div>
          </div>

          <button className="mt-8 text-brand-accent font-bold border-b-2 border-brand pb-1 hover:text-brand transition-colors inline-flex items-center gap-2">
            জীবনবৃত্তান্ত দেখুন <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;