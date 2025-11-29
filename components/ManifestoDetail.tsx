import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowLeft } from 'lucide-react';
import { MANIFESTO_ITEMS } from '../constants';

const ManifestoDetail: React.FC = () => {
    const navigate = useNavigate();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <section className="bg-slate-50 py-24 min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                {/* Back Button - Upper Left */}
                <button
                    onClick={() => navigate('/')}
                    className="mb-8 flex items-center gap-2 text-brand-accent font-bold hover:text-brand transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    ফিরে যান
                </button>

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-accent mb-4">বিস্তারিত ইশতেহার</h2>
                    <div className="w-24 h-1 bg-brand mx-auto"></div>
                </div>

                {/* Alternating Layout */}
                <div className="space-y-20">
                    {MANIFESTO_ITEMS.map((item, index) => (
                        <div
                            key={item.id}
                            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Description - Left for even, Right for odd */}
                            <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                                <h3 className="text-3xl font-bold text-brand-accent mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">{item.fullDesc}</p>
                            </div>

                            {/* Video - Right for even, Left for odd */}
                            <div className={`${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden relative group cursor-pointer shadow-lg">
                                    <img
                                        src={item.videoThumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg pl-1 transition-transform group-hover:scale-110">
                                            <Play className="w-8 h-8 text-brand ml-1 fill-brand" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManifestoDetail;
