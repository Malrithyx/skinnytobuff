import { getPostData, getSortedPostsData } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);
  return {
    title: `${post.title} | Skinny to Buff`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);
  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div className="pb-20">
      {/* Article Header */}
      <header className="bg-secondary py-20 border-b border-neutral-800">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary mb-8 transition-colors group text-sm font-bold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic uppercase">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Skinny to Buff Team
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <div className="prose prose-invert prose-primary max-w-none 
              prose-headings:italic prose-headings:uppercase prose-headings:font-black
              prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
              prose-p:text-neutral-300 prose-p:text-lg prose-p:leading-relaxed
              prose-li:text-neutral-300 prose-li:text-lg
              prose-strong:text-white prose-strong:font-bold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-2xl prose-img:border prose-img:border-neutral-800">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            {/* Post CTA */}
            <div className="mt-16 bg-primary/10 border-2 border-primary border-dashed rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-black italic uppercase mb-4">Ready to pack on muscle?</h3>
              <p className="text-neutral-300 mb-8">Download our free 4-week bodyweight program and start your transformation today.</p>
              <button className="btn-primary">Download Free Program</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 flex flex-col gap-12">
            <div className="bg-secondary border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-xl font-black italic uppercase mb-6 border-b border-neutral-800 pb-4">
                Recent <span className="text-primary">Guides</span>
              </h3>
              <div className="flex flex-col gap-6">
                {relatedPosts.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                    <h4 className="font-bold group-hover:text-primary transition-colors leading-tight mb-2">
                      {p.title}
                    </h4>
                    <span className="text-xs text-neutral-500 uppercase font-bold tracking-tighter flex items-center gap-1">
                      Read More <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-primary text-black rounded-2xl p-8">
              <h3 className="text-xl font-black italic uppercase mb-4">
                The "Skinny" Problem
              </h3>
              <p className="font-medium mb-6 leading-relaxed">
                Most advice is for guys who want to lose fat. You need a different strategy.
              </p>
              <Link href="/about" className="bg-black text-white px-6 py-3 rounded-lg font-bold text-sm block text-center hover:bg-neutral-900 transition-colors">
                See Our Strategy
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <EmailCapture />
    </div>
  );
}
