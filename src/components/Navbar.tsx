import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tighter">
          <Dumbbell className="w-8 h-8" />
          <span>SKINNY TO BUFF</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <Link href="/blog" className="btn-primary text-xs py-2 px-4 md:text-sm md:py-2.5 md:px-5">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
