import Link from 'next/link';
import { ChevronRight, ArrowRight, Activity, Zap, Target } from 'lucide-react';
import { getSortedPostsData } from '@/lib/blog';
import PostCard from '@/components/PostCard';
import ProductCard from '@/components/ProductCard';
import EmailCapture from '@/components/EmailCapture';

export default function Home() {
  const featuredPosts = getSortedPostsData().slice(0, 3);
  
  const recommendedEquipment = [
    {
      name: "Adjustable Dumbbells",
      image: "https://m.media-amazon.com/images/I/71+2Yv2a+UL._AC_SL1500_.jpg",
      description: "Stop buying new weights every month. These replace 15 sets and take you from 5lbs to 52.5lbs instantly.",
      price: "$399.00",
      affiliateLink: "https://amazon.com",
      badge: "Best for Growth"
    },
    {
      name: "Heavy-Duty Pull-Up Bar",
      image: "https://m.media-amazon.com/images/I/61k2aI6S01L._AC_SL1500_.jpg",
      description: "The secret to the 'V-Taper'. If you can't do a pull-up yet, this is where your transformation starts.",
      price: "$29.99",
      affiliateLink: "https://amazon.com",
      badge: "Must-Have"
    },
    {
      name: "Protein Starter Stack",
      image: "https://m.media-amazon.com/images/I/81xUe7vL+UL._AC_SL1500_.jpg",
      description: "Can't eat enough? Liquid calories are the skinny guy's cheat code for hitting daily macros.",
      price: "$45.95",
      affiliateLink: "https://amazon.com",
      badge: "Top Pick"
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80" 
            alt="Workout background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>THE #1 RESOURCE FOR SKINNY GUYS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase italic">
              Stop Being the <span className="text-primary">"Skinny Guy"</span> in the Room
            </h1>
            <p className="text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed">
              Tired of eating everything in sight and seeing zero results? Our science-backed "Hardgainer" protocols help you pack on visible muscle at home—without expensive gym fees or confusing machines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog/home-workout-plan-for-skinny-guys" className="btn-primary text-lg flex items-center justify-center gap-2 px-10">
                Get My Free Gain Plan
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/blog" className="bg-transparent hover:bg-primary/5 text-white font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center border border-neutral-700 hover:border-primary">
                Browse Success Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase italic">Featured <span className="text-primary">Guides</span></h2>
            <p className="text-neutral-400">Everything you need to know about training and nutrition.</p>
          </div>
          <Link href="/blog" className="text-primary font-bold flex items-center gap-2 group">
            View All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary py-20 border-y border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Science-Backed</h3>
              <p className="text-neutral-400 text-sm">Our plans focus on hypertrophy and progressive overload, specifically for fast metabolisms.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">No Gym Required</h3>
              <p className="text-neutral-400 text-sm">Save hundreds on memberships. We show you how to grow using bodyweight and minimal gear.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Results</h3>
              <p className="text-neutral-400 text-sm">Stop wasting time on cardio. Focus on the compound lifts that actually build bulk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Equipment */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase italic">Home <span className="text-primary">Essentials</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">The only gear you actually need to build muscle at home without breaking the bank.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendedEquipment.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture />
    </div>
  );
}
