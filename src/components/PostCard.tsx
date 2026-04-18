"use client";

import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

export default function PostCard({ slug, title, description, date, category, image }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="card group block">
      <div className="aspect-video bg-neutral-800 overflow-hidden relative">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-primary text-black text-xs font-bold px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80`;
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-neutral-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-neutral-400 text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
