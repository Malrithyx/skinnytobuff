"use client";

import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-20">
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase italic">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-neutral-400">
              Have a question about a workout plan or an affiliate product? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-8 text-center">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase">Email Us</h3>
              <p className="text-neutral-400 text-sm">support@skinnytobuff.com</p>
            </div>
            <div className="card p-8 text-center">
              <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase">Socials</h3>
              <p className="text-neutral-400 text-sm">@skinnytobuff</p>
            </div>
            <div className="card p-8 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase">Location</h3>
              <p className="text-neutral-400 text-sm">Remote Worldwide</p>
            </div>
          </div>

          <div className="bg-secondary border border-neutral-800 rounded-3xl p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-400">Name</label>
                <input 
                  type="text" 
                  className="bg-background border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-400">Email</label>
                <input 
                  type="email" 
                  className="bg-background border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-400">Message</label>
                <textarea 
                  rows={6}
                  className="bg-background border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help you build muscle?"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="btn-primary w-full md:w-auto px-12">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
