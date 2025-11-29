import React, { useState, useEffect } from 'react';
import { Send, ArrowDown } from 'lucide-react';

interface FeedbackPost {
    _id: string;
    name: string;
    phone: string;
    message: string;
    timestamp: string;
    createdAt: string;
    tag?: string;
}

const Feedback: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [feedbackPosts, setFeedbackPosts] = useState<FeedbackPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch feedback posts
    const fetchFeedback = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/feedback');
            if (!response.ok) throw new Error('Failed to fetch feedback');
            const data = await response.json();
            setFeedbackPosts(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching feedback:', err);
            setError('Failed to load feedback posts');
        } finally {
            setLoading(false);
        }
    };

    // Fetch on component mount
    useEffect(() => {
        fetchFeedback();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit feedback');

            // Show success message
            setSubmitted(true);

            // Refresh feedback list
            await fetchFeedback();

            // Reset form after delay
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', phone: '', message: '' });
            }, 3000);
        } catch (err) {
            console.error('Error submitting feedback:', err);
            alert('Failed to submit feedback. Please try again.');
        }
    };

    // Helper function to format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) return `${diffMins} মিনিট আগে`;
        if (diffHours < 24) return `${diffHours} ঘন্টা আগে`;
        return `${diffDays} দিন আগে`;
    };

    return (
        <section id="feedback" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-accent mb-4">আপনার মতামত</h2>
                    <div className="w-24 h-1 bg-brand mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Feedback Form */}
                    <div className="bg-blue-50/50 p-8 md:p-10 rounded-3xl border border-blue-100 shadow-lg relative overflow-hidden">
                        {/* Decorative blob */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold text-brand-accent mb-2">আপনার মতামত গুরুত্বপূর্ণ</h3>
                        <p className="text-slate-600 mb-8">এলাকার উন্নয়নে আপনার কোনো পরামর্শ থাকলে আমাদের জানান। আমরা আপনার কথা শুনতে চাই।</p>

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
                                className={`w-full font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2 shadow-md ${submitted
                                    ? 'bg-green-600 hover:bg-green-700 text-white cursor-default'
                                    : 'bg-brand-accent hover:bg-slate-800 text-white'
                                    }`}
                            >
                                {submitted ? 'পাঠানো হয়েছে!' : <>জমা দিন <Send size={18} /></>}
                            </button>
                        </form>
                    </div>

                    {/* Right: Latest Posts - 5 posts, first 3 clear, last 2 faded */}
                    <div>
                        <h3 className="text-2xl font-bold text-brand-accent mb-6">সাম্প্রতিক মতামত</h3>

                        {loading ? (
                            <div className="text-center py-12">
                                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
                                <p className="mt-4 text-slate-600">লোড হচ্ছে...</p>
                            </div>
                        ) : error ? (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                                <p className="text-red-600">{error}</p>
                            </div>
                        ) : feedbackPosts.length === 0 ? (
                            <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 text-center">
                                <p className="text-slate-600">এখনো কোনো মতামত নেই। প্রথম মতামত দিন!</p>
                            </div>
                        ) : (
                            <div className="space-y-4 relative">
                                {feedbackPosts.map((post, index) => (
                                    <div
                                        key={post._id}
                                        className={`bg-white p-5 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md ${!showAll && index >= 3 ? 'opacity-40 blur-[1px]' : 'opacity-100'
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Avatar - Default Profile Picture */}
                                            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                                    alt="User Avatar"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-bold text-slate-800">{post.name}</h4>
                                                        {post.tag && (
                                                            <span className="bg-brand/10 text-brand text-xs px-2 py-0.5 rounded-full font-semibold">
                                                                {post.tag}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-slate-500">{formatDate(post.timestamp)}</span>
                                                </div>
                                                <p className="text-slate-600 text-sm leading-relaxed">{post.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {!showAll && feedbackPosts.length > 3 && (
                                    <div className="absolute bottom-0 left-0 right-0 flex justify-center pt-8 pb-2 bg-gradient-to-t from-slate-50 to-transparent">
                                        <button
                                            onClick={() => setShowAll(true)}
                                            className="bg-white text-brand-accent px-6 py-2 rounded-full font-bold shadow-md border border-slate-200 hover:bg-brand-accent hover:text-white transition-all flex items-center gap-2 text-sm"
                                        >
                                            আরো দেখুন <ArrowDown size={16} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
