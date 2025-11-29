import { ReactNode } from 'react';

export interface Priority {
  title: string;
  desc: string;
  icon: ReactNode;
}

export interface Update {
  id: number;
  type: 'video' | 'post' | 'news';
  title: string;
  date: string;
  views: string;
}

export interface Project {
  name: string;
  status: 'completed' | 'progress';
  date: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface ManifestoItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  videoUrl: string;
  videoThumbnail: string;
  videoTag: string;
}

export interface FeedbackPost {
  id: number;
  name: string;
  message: string;
  date: string;
  timestamp: number;
}