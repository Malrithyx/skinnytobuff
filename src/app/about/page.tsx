import { CheckCircle2, Target, Users, Zap } from 'lucide-react';
import EmailCapture from '@/components/EmailCapture';

export const metadata = {
  title: "About Us | Skinny to Buff",
  description: "Learn about the mission behind Skinny to Buff and why we focus on home workouts for beginners and hardgainers.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-20 py-20">
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase italic">
            Our <span className="text-primary">Mission</span>
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed">
            We started Skinny to Buff because we were tired of "mainstream" fitness advice that only catered to people who wanted to lose weight. We build resources specifically for the "hardgainers"—the guys who feel like they can't put on muscle no matter what they do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-square bg-secondary rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" 
              alt="Transformation" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div>
            <h2 className="text-3xl font-black italic uppercase mb-6">Why Home <span className="text-primary">Workouts?</span></h2>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Most beginners quit because the gym is intimidating or inconvenient. By focusing on home workouts, we remove the friction. You don't need $100/month memberships to build a great body. You need consistency and the right plan.
            </p>
            <ul className="space-y-4">
              {[
                "No 'gym-timidation' or waiting for machines",
                "Work out whenever it fits your schedule",
                "Minimal equipment needed to start",
                "Focus on compound, high-impact movements"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase">Hyper-Focused</h3>
            <p className="text-neutral-400 text-sm">We don't do 'general' fitness. We do muscle building for skinny guys. Period.</p>
          </div>
          <div className="card p-8 text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase">High Speed</h3>
            <p className="text-neutral-400 text-sm">Our website and our programs are designed for maximum efficiency and speed.</p>
          </div>
          <div className="card p-8 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase">Community Driven</h3>
            <p className="text-neutral-400 text-sm">Everything we create is based on feedback from our community of thousands of gainers.</p>
          </div>
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}
