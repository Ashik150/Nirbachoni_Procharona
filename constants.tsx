import React from 'react';
import { Briefcase, MapPin, Users, Award } from 'lucide-react';
import { Priority, Project, Update, NavItem, ManifestoItem, FeedbackPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'হোম', id: 'home' },
  { label: 'পরিচিতি', id: 'about' },
  { label: 'ইশতেহার', id: 'manifesto' },
  { label: 'উন্নয়ন কাজ', id: 'projects' },
  { label: 'যোগাযোগ', id: 'contact' },
];

export const PRIORITIES: Priority[] = [
  {
    title: 'শিক্ষা ব্যবস্থার উন্নয়ন',
    desc: 'প্রতিটি গ্রামে আধুনিক স্কুল ও ডিজিটাল ল্যাব স্থাপন।',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: 'অবকাঠামো নির্মাণ',
    desc: 'রাস্তাঘাট সংস্কার ও নতুন কালভার্ট নির্মাণ।',
    icon: <MapPin className="w-8 h-8" />
  },
  {
    title: 'স্বাস্থ্যসেবা',
    desc: '২৪ ঘন্টা অ্যাম্বুলেন্স সার্ভিস ও কমিউনিটি ক্লিনিক।',
    icon: <Users className="w-8 h-8" />
  },
  {
    title: 'যুব কর্মসংস্থান',
    desc: 'কারিগরি প্রশিক্ষণ ও স্টার্টআপ ফান্ডিং।',
    icon: <Award className="w-8 h-8" />
  },
];

export const UPDATES: Update[] = [
  { id: 1, type: 'video', title: 'নির্বাচনী জনসভা - চৌধুরী বাজার', date: '২ দিন আগে', views: '১৫০০+' },
  { id: 2, type: 'post', title: 'বন্যা দুর্গতদের মাঝে ত্রাণ বিতরণ', date: '৪ দিন আগে', views: '২০০০+' },
  { id: 3, type: 'news', title: 'নতুন নির্বাচনী ইশতেহার ঘোষণা', date: '১ সপ্তাহ আগে', views: '৫০০০+' },
];

export const PROJECTS: Project[] = [
  { name: 'চৌধুরী বাজার মসজিদ সংস্কার', status: 'completed', date: 'জানুয়ারি ২০২৪' },
  { name: 'উচ্চ বিদ্যালয় মাঠ ভরাট', status: 'completed', date: 'ফেব্রুয়ারি ২০২৪' },
  { name: 'কালভার্ট নির্মাণ প্রকল্প', status: 'progress', date: 'চলমান' },
  { name: 'রাস্তার ল্যাম্পপোস্ট স্থাপন', status: 'progress', date: 'চলমান' },
];

export const MANIFESTO_ITEMS: ManifestoItem[] = [
  {
    id: 'education',
    title: 'শিক্ষা ব্যবস্থার উন্নয়ন',
    shortDesc: 'প্রতিটি গ্রামে আধুনিক স্কুল ও ডিজিটাল ল্যাব স্থাপন।',
    fullDesc: 'আমাদের লক্ষ্য হলো প্রতিটি শিশু যেন মানসম্মত শিক্ষা পায়। প্রতিটি গ্রামে আধুনিক স্কুল স্থাপন, ডিজিটাল ল্যাব তৈরি, শিক্ষকদের প্রশিক্ষণ এবং বিনামূল্যে বই বিতরণের মাধ্যমে আমরা শিক্ষার মান উন্নত করব। প্রাথমিক থেকে মাধ্যমিক পর্যায়ে কম্পিউটার শিক্ষা বাধ্যতামূলক করা হবে এবং মেধাবী শিক্ষার্থীদের জন্য বৃত্তির ব্যবস্থা করা হবে।',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoThumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    videoTag: 'আধুনিক শিক্ষা ব্যবস্থা'
  },
  {
    id: 'infrastructure',
    title: 'অবকাঠামো নির্মাণ',
    shortDesc: 'রাস্তাঘাট সংস্কার ও নতুন কালভার্ট নির্মাণ।',
    fullDesc: 'যোগাযোগ ব্যবস্থার উন্নয়ন ছাড়া কোনো এলাকার প্রকৃত উন্নয়ন সম্ভব নয়। আমরা সকল গ্রামের রাস্তাঘাট পাকা করব, নতুন কালভার্ট ও ব্রিজ নির্মাণ করব। বর্ষাকালে যাতে যোগাযোগ বিচ্ছিন্ন না হয় সেজন্য বিশেষ পরিকল্পনা গ্রহণ করা হবে। প্রতিটি গ্রামে বিদ্যুৎ সংযোগ নিশ্চিত করা হবে এবং পানির সুব্যবস্থা করা হবে।',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoThumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    videoTag: 'উন্নত যোগাযোগ ব্যবস্থা'
  },
  {
    id: 'healthcare',
    title: 'স্বাস্থ্যসেবা',
    shortDesc: '২৪ ঘন্টা অ্যাম্বুলেন্স সার্ভিস ও কমিউনিটি ক্লিনিক।',
    fullDesc: 'স্বাস্থ্যসেবা প্রতিটি নাগরিকের মৌলিক অধিকার। আমরা প্রতিটি ইউনিয়নে কমিউনিটি ক্লিনিক স্থাপন করব যেখানে বিনামূল্যে প্রাথমিক চিকিৎসা পাওয়া যাবে। ২৪ ঘন্টা অ্যাম্বুলেন্স সেবা চালু করা হবে। গর্ভবতী মা ও শিশুদের জন্য বিশেষ স্বাস্থ্যসেবা নিশ্চিত করা হবে। প্রতি মাসে বিনামূল্যে স্বাস্থ্য ক্যাম্প আয়োজন করা হবে।',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoThumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    videoTag: 'সবার জন্য স্বাস্থ্যসেবা'
  },
  {
    id: 'employment',
    title: 'যুব কর্মসংস্থান',
    shortDesc: 'কারিগরি প্রশিক্ষণ ও স্টার্টআপ ফান্ডিং।',
    fullDesc: 'তরুণদের কর্মসংস্থান সৃষ্টি আমাদের প্রধান লক্ষ্য। কারিগরি প্রশিক্ষণ কেন্দ্র স্থাপন করা হবে যেখানে যুবকরা বিভিন্ন দক্ষতা শিখতে পারবে। ক্ষুদ্র ব্যবসা শুরুর জন্য সহজ শর্তে ঋণের ব্যবস্থা করা হবে। স্টার্টআপ উদ্যোক্তাদের জন্য বিশেষ ফান্ড গঠন করা হবে। স্থানীয় শিল্প স্থাপনে উৎসাহিত করা হবে যাতে স্থানীয় পর্যায়ে কর্মসংস্থান সৃষ্টি হয়।',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoThumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
    videoTag: 'তরুণদের কর্মসংস্থান'
  }
];

export const MOCK_FEEDBACK_POSTS: FeedbackPost[] = [
  { id: 1, name: 'আব্দুল করিম', message: 'আমাদের এলাকায় রাস্তার অবস্থা খুবই খারাপ। বর্ষাকালে চলাচল করা অসম্ভব হয়ে পড়ে। দ্রুত এই সমস্যার সমাধান চাই।', date: '২ ঘন্টা আগে', timestamp: Date.now() - 7200000 },
  { id: 2, name: 'ফাতেমা বেগম', message: 'স্কুলে কম্পিউটার ল্যাব নেই। আমাদের সন্তানরা আধুনিক শিক্ষা থেকে বঞ্চিত হচ্ছে। এই বিষয়ে পদক্ষেপ নিন।', date: '৫ ঘন্টা আগে', timestamp: Date.now() - 18000000 },
  { id: 3, name: 'মোহাম্মদ রহিম', message: 'কমিউনিটি ক্লিনিকে ওষুধ পাওয়া যায় না। ডাক্তারও নিয়মিত আসেন না। স্বাস্থ্যসেবার মান উন্নত করা জরুরি।', date: '১ দিন আগে', timestamp: Date.now() - 86400000 },
  { id: 4, name: 'সালমা খাতুন', message: 'যুবকদের জন্য কর্মসংস্থানের ব্যবস্থা করুন। অনেকে শিক্ষিত হয়েও বেকার বসে আছে।', date: '১ দিন আগে', timestamp: Date.now() - 90000000 },
  { id: 5, name: 'জাহিদ হাসান', message: 'বিদ্যুৎ সমস্যা প্রতিদিনের ঘটনা। ব্যবসা-বাণিজ্য ক্ষতিগ্রস্ত হচ্ছে। এই সমস্যার স্থায়ী সমাধান দরকার।', date: '২ দিন আগে', timestamp: Date.now() - 172800000 },
  { id: 6, name: 'রোকেয়া আক্তার', message: 'মহিলাদের জন্য কারিগরি প্রশিক্ষণের ব্যবস্থা করুন। আমরাও স্বাবলম্বী হতে চাই।', date: '৩ দিন আগে', timestamp: Date.now() - 259200000 },
  { id: 7, name: 'কামাল উদ্দিন', message: 'পানির সমস্যা সমাধান করুন। টিউবওয়েলের পানি পানযোগ্য নয়। বিশুদ্ধ পানির ব্যবস্থা চাই।', date: '৪ দিন আগে', timestamp: Date.now() - 345600000 },
  { id: 8, name: 'নাসরিন সুলতানা', message: 'শিশুদের খেলার মাঠ নেই। একটি পার্ক বা খেলার মাঠ তৈরি করুন।', date: '৫ দিন আগে', timestamp: Date.now() - 432000000 }
];