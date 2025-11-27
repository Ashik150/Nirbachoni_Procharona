import React from 'react';
import { Briefcase, MapPin, Users, Award } from 'lucide-react';
import { Priority, Project, Update, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'হোম', id: 'home' },
  { label: 'পরিচিতি', id: 'about' },
  { label: 'ইশতেহার', id: 'manifesto' },
  { label: 'উন্নয়ন কাজ', id: 'projects' },
  { label: 'যোগাযোগ', id: 'contact' },
];

export const PRIORITIES: Priority[] = [
  { 
    title: 'শিক্ষা ব্যবস্থার উন্নয়ন', 
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
  { name: 'উচ্চ বিদ্যালয় মাঠ ভরাট', status: 'completed', date: 'ফেব্রুয়ারি ২০২৪' },
  { name: 'কালভার্ট নির্মাণ প্রকল্প', status: 'progress', date: 'চলমান' },
  { name: 'রাস্তার ল্যাম্পপোস্ট স্থাপন', status: 'progress', date: 'চলমান' },
];