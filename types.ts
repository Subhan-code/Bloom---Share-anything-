import React from 'react';

export type ToolType = 'home' | 'text' | 'file' | 'url';

export interface ToolCardProps {
  id: ToolType;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface RecentShare {
  id: string;
  type: 'text' | 'file' | 'url';
  name: string;
  size?: string;
  views: number;
  date: string;
}

export interface GeneratedTextResponse {
  content: string;
  summary?: string;
  tags?: string[];
}