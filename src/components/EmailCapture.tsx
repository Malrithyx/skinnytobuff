"use client";

export default function EmailCapture() {
  return (
    <section className="py-20 bg-primary/10 border-y border-primary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get the "Skinny to Buff" 4-Week Blueprint
        </h2>
        <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
          Skip the trial and error. Get our exact home workout routine and 'Hardgainer' meal plan that helped 5,000+ guys pack on their first 10lbs of muscle.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-secondary border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            required
          />
          <button type="submit" className="btn-primary">
            Get My Guide
          </button>
        </form>
        <p className="text-xs text-neutral-500 mt-4">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
