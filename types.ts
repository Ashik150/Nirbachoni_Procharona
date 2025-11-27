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