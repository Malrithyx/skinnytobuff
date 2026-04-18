import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary mt-20 border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tighter mb-4">
              <Dumbbell className="w-8 h-8" />
              <span>SKINNY TO BUFF</span>
            </Link>
            <p className="text-neutral-400 max-w-sm">
              Helping skinny guys build muscle and gain confidence through simple, effective home workouts and nutrition.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Workouts</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Nutrition</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Equipment</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-xs text-neutral-500 text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Skinny to Buff. All rights reserved.
          </p>
          <p className="max-w-2xl mx-auto leading-relaxed italic">
            Disclaimer: Skinny to Buff is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Some links on this site may be affiliate links, meaning we earn a small commission if you make a purchase through them.
          </p>
        </div>
      </div>
    </footer>
  );
}
