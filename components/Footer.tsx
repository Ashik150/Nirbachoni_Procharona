import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0b1120] text-slate-400 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-bold text-white tracking-wide">মিয়া নুরুদ্দিন অপু</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              আমাদের লক্ষ্য একটি আধুনিক, নিরাপদ এবং উন্নত সমাজ গঠন করা। আপনার সমর্থন আমাদের একান্ত কাম্য। একসাথে আমরা গড়ব আগামীর ভবিষ্যৎ।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-brand transition-colors">হোম</a></li>
              <li><a href="#about" className="hover:text-brand transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#manifesto" className="hover:text-brand transition-colors">ইশতেহার</a></li>
              <li><a href="#projects" className="hover:text-brand transition-colors">উন্নয়ন কাজ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">যোগাযোগ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-brand mt-0.5 group-hover:text-white transition-colors" />
                <span>হাউজ #১২, রোড #০৫,<br />ধানমন্ডি, ঢাকা-১২০৯</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-brand group-hover:text-white transition-colors" />
                <span>+৮৮০ ১৭১১ ০০০০০০</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-brand group-hover:text-white transition-colors" />
                <span>info@campaign.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">নিউজলেটার</h4>
            <p className="text-xs mb-4">নির্বাচনী আপডেট পেতে ইমেইল সাবস্ক্রাইব করুন</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল" 
                className="bg-slate-800 border border-slate-700 rounded-l-lg px-4 py-2 w-full text-white text-sm focus:ring-1 focus:ring-brand focus:border-brand outline-none transition-all" 
              />
              <button className="bg-brand text-white px-4 rounded-r-lg font-bold hover:bg-brand-dark transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; ২০২৫ নির্বাচনী প্রচার প্রচারণা। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">গোপনীয়তা নীতি</a>
            <a href="#" className="hover:text-white transition-colors">শর্তাবলী</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;