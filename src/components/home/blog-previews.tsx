import Link from "next/link";
import { Section } from "@/components/layout/section";
import { blogPosts } from "@/data/mock-products";

export function BlogPreviews() {
  return (
    <Section
      title="From the Blog"
      subtitle="Guides, reviews, and tech insights"
      action={
        <Link
          href="/blog"
          className="text-body-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          All Articles →
        </Link>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-xl border border-border-primary bg-bg-secondary transition-all hover:border-border-accent hover:shadow-glow"
          >
            {/* Image placeholder */}
            <div className="aspect-[16/9] bg-bg-tertiary">
              <div className="flex h-full items-center justify-center text-text-tertiary">
                <span className="text-h3">📝</span>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-md bg-accent/10 px-2 py-0.5 text-caption font-medium text-accent">
                  {post.category}
                </span>
                <span className="text-caption text-text-tertiary">{post.readTime}</span>
              </div>
              <h3 className="text-body-sm font-semibold text-text-primary transition-colors group-hover:text-accent sm:text-body">
                {post.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-caption text-text-secondary sm:text-body-sm">
                {post.excerpt}
              </p>
              <p className="mt-3 text-caption text-text-tertiary">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
