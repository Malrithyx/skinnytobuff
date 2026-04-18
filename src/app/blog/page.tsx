import { getSortedPostsData } from '@/lib/blog';
import PostCard from '@/components/PostCard';
import EmailCapture from '@/components/EmailCapture';

export const metadata = {
  title: "Blog | Skinny to Buff",
  description: "Explore our collection of home workout plans, nutrition guides, and equipment reviews for skinny guys.",
};

export default function BlogListing() {
  const posts = getSortedPostsData();

  return (
    <div className="flex flex-col gap-20 py-20">
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase italic">
            The Muscle <span className="text-primary">Journal</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Actionable advice on training, eating, and recovering for the modern hardgainer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}
