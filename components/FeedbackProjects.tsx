import React, { useState } from 'react';
import { Send, CheckCircle, Clock } from 'lucide-react';
import { PROJECTS } from '../constants';

const FeedbackProjects: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Two Column Layout: Left (Feedback/Opinion) Right (Completed Works) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Feedback Form */}
          <div className="bg-blue-50/50 p-8 md:p-10 rounded-3xl border border-blue-100 shadow-lg relative overflow-hidden">
             {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50 pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-brand-accent mb-2">আপনার মতামত গুরুত্বপূর্ণ</h3>
            <p className="text-slate-600 mb-8">এলাকার উন্নয়নে আপনার কোনো পরামর্শ থাকলে আমাদের জানান। আমরা আপনার কথা শুনতে চাই।</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">আপনার নাম</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-white"
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">মোবাইল নম্বর</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-white"
                  placeholder="017..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">পরামর্শ / অভিযোগ</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-white resize-none"
                  placeholder="বিস্তারিত লিখুন..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={`w-full font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2 shadow-md ${
                    submitted 
                    ? 'bg-green-600 hover:bg-green-700 text-white cursor-default'
                    : 'bg-brand-accent hover:bg-slate-800 text-white'
                }`}
              >
                {submitted ? 'পাঠানো হয়েছে!' : <>জমা দিন <Send size={18} /></>}
              </button>
            </form>
          </div>

          {/* Right: Progress List */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-3xl font-bold text-brand-accent">উন্নয়ন চিত্র</h3>
                <p className="text-slate-500 mt-1">আমাদের কথা ও কাজের বাস্তবায়নের খতিয়ান</p>
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold shadow-sm animate-pulse">
                ৯৮% বাস্তবায়ন
              </div>
            </div>

            <div className="space-y-4">
              {PROJECTS.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-lg hover:border-brand-light transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        project.status === 'completed'
                          ? 'bg-green-50 text-green-600 group-hover:bg-green-100'
                          : 'bg-orange-50 text-orange-600 group-hover:bg-orange-100'
                      }`}
                    >
                      {project.status === 'completed' ? <CheckCircle size={24} /> : <Clock size={24} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg group-hover:text-brand transition-colors">{project.name}</h4>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full mt-1 inline-block">{project.date}</span>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                      project.status === 'completed'
                        ? 'bg-green-50 text-green-700 border border-green-100'
                        : 'bg-orange-50 text-orange-700 border border-orange-100'
                    }`}
                  >
                    {project.status === 'completed' ? 'সম্পন্ন' : 'চলমান'}
                  </div>
                </div>
              ))}

              <button className="w-full mt-4 bg-yellow-50 p-5 rounded-xl border-2 border-dashed border-yellow-200 text-center cursor-pointer hover:bg-yellow-100 hover:border-yellow-300 transition-all group">
                <span className="font-bold text-yellow-800 group-hover:tracking-wide transition-all">আরও দেখুন +</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackProjects;