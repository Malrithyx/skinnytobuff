"use client";

import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  price?: string;
  affiliateLink: string;
  badge?: string;
}

export default function ProductCard({ name, image, description, price, affiliateLink, badge }: ProductCardProps) {
  return (
    <div className="card group relative">
      {badge && (
        <div className="absolute top-0 right-0 z-20 bg-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg">
          {badge}
        </div>
      )}
      <div className="aspect-square bg-neutral-800 relative overflow-hidden flex items-center justify-center p-8">
        <div className="text-primary/20 absolute inset-0 flex items-center justify-center text-4xl font-black rotate-12">
          {name.split(' ')[0]}
        </div>
        <img 
          src={image} 
          alt={name}
          className="relative z-10 max-h-full object-contain transition-transform group-hover:scale-110 duration-500"
          onError={(e) => {
            // Fallback for missing images
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-neutral-400 text-sm mb-6 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between gap-4">
          {price && <span className="text-xl font-bold">{price}</span>}
          <a 
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-center flex items-center justify-center gap-2 py-2"
          >
            Check Price
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
