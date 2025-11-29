import React from 'react';
import { CheckCircle, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { PROJECTS } from '../constants';

const DevelopmentProjects: React.FC = () => {
    const completedProjects = PROJECTS.filter(p => p.status === 'completed');
    const ongoingProjects = PROJECTS.filter(p => p.status === 'progress');

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-accent mb-4">উন্নয়ন চিত্র</h2>
                    <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        আমাদের কথা ও কাজের বাস্তবায়নের খতিয়ান
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Completed Projects */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-brand-accent">সম্পন্ন প্রকল্প</h3>
                                <p className="text-sm text-slate-500">{completedProjects.length}টি প্রকল্প সম্পন্ন</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {completedProjects.map((project, idx) => (
                                <div
                                    key={idx}
                                    className="bg-green-50 p-6 rounded-xl border-2 border-green-100 hover:border-green-200 hover:shadow-lg transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                                            <CheckCircle className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-brand transition-colors">
                                                {project.name}
                                            </h4>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                                                    সম্পন্ন
                                                </span>
                                                <span className="text-xs text-slate-500">{project.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Ongoing Projects */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-orange-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-brand-accent">চলমান প্রকল্প</h3>
                                <p className="text-sm text-slate-500">{ongoingProjects.length}টি প্রকল্প চলমান</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {ongoingProjects.map((project, idx) => (
                                <div
                                    key={idx}
                                    className="bg-orange-50 p-6 rounded-xl border-2 border-orange-100 hover:border-orange-200 hover:shadow-lg transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors">
                                            <Clock className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-brand transition-colors">
                                                {project.name}
                                            </h4>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">
                                                    চলমান
                                                </span>
                                                <span className="text-xs text-slate-500">{project.date}</span>
                                            </div>
                                            {/* Progress Bar */}
                                            <div className="mt-3 bg-orange-100 rounded-full h-2 overflow-hidden">
                                                <div className="bg-orange-500 h-full rounded-full animate-pulse" style={{ width: '65%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Summary */}
                <div className="mt-12 bg-gradient-to-r from-brand to-brand-accent p-8 rounded-2xl text-white text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <div className="text-4xl font-bold mb-2">{PROJECTS.length}</div>
                            <div className="text-sm text-white/80">মোট প্রকল্প</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">{completedProjects.length}</div>
                            <div className="text-sm text-white/80">সম্পন্ন</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">{ongoingProjects.length}</div>
                            <div className="text-sm text-white/80">চলমান</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">৯৮%</div>
                            <div className="text-sm text-white/80">বাস্তবায়ন</div>
                        </div>
                    </div>
                </div>

                {/* Social Connect Strip */}
                <div className="mt-20 p-8 md:p-12 bg-brand-accent rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
                    {/* Background Decoration */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand rounded-full blur-3xl opacity-20"></div>

                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-3xl font-bold mb-2">সংযুক্ত থাকুন সবসময়</h3>
                        <p className="text-slate-400">রিয়েল-টাইম আপডেট পেতে আমাদের সোশ্যাল মিডিয়া ফলো করুন</p>
                    </div>

                    <div className="flex gap-4 relative z-10">
                        <a href="#" className="w-12 h-12 bg-white/10 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all hover:scale-110">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="w-12 h-12 bg-white/10 hover:bg-[#FF0000] rounded-full flex items-center justify-center transition-all hover:scale-110">
                            <Youtube size={24} />
                        </a>
                        <a href="#" className="w-12 h-12 bg-white/10 hover:bg-[#E1306C] rounded-full flex items-center justify-center transition-all hover:scale-110">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="w-12 h-12 bg-white/10 hover:bg-[#1DA1F2] rounded-full flex items-center justify-center transition-all hover:scale-110">
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentProjects;
