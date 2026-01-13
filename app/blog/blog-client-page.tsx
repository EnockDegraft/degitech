"use client"

import { Calendar, User, ArrowRight, X } from "lucide-react"
import { useState } from "react"

const posts = [
  {
    id: 1,
    title: "10 Best Practices for Modern Web Development",
    excerpt: "Discover essential practices that every web developer should follow in 2024",
    fullContent:
      "Modern web development requires a solid foundation of best practices. From responsive design to performance optimization, following industry standards ensures your applications are scalable, maintainable, and user-friendly. This comprehensive guide covers 10 essential practices that will elevate your development skills.",
    author: "Sarah Johnson",
    date: "Jan 10, 2024",
    category: "Web Development",
    image: "/modern-web-dev-workspace.png",
  },
  {
    id: 2,
    title: "The Future of Mobile App Development",
    excerpt: "Exploring emerging technologies and trends in mobile development",
    fullContent:
      "Mobile development is rapidly evolving with new frameworks, tools, and paradigms emerging constantly. From cross-platform solutions to progressive web apps, developers have more options than ever. This article explores the latest trends shaping the future of mobile application development.",
    author: "Michael Chen",
    date: "Jan 8, 2024",
    category: "Mobile Development",
    image: "/mobile-app-development-coding.png",
  },
  {
    id: 3,
    title: "React Performance Optimization Tips",
    excerpt: "Practical techniques to optimize your React applications for better performance",
    fullContent:
      "React applications can become slow without proper optimization. Learn practical techniques to improve performance including code splitting, lazy loading, memoization, and efficient state management. These proven strategies will help you build faster, more responsive React applications.",
    author: "James Wilson",
    date: "Jan 5, 2024",
    category: "Technology",
    image: "/react-javascript-framework.png",
  },
  {
    id: 4,
    title: "Understanding Next.js 14 Features",
    excerpt: "A deep dive into the new features and improvements in Next.js 14",
    fullContent:
      "Next.js 14 brings significant improvements and new features for modern web development. From improved performance to enhanced developer experience, discover what's new in the latest version. Learn how to leverage these features to build better applications.",
    author: "Emma Davis",
    date: "Jan 2, 2024",
    category: "Framework",
    image: "/nextjs-framework-development.jpg",
  },
  {
    id: 5,
    title: "Database Design Best Practices",
    excerpt: "Learn how to design scalable and efficient database systems",
    fullContent:
      "Good database design is crucial for application performance and scalability. This guide covers fundamental principles of database design, normalization, indexing, and optimization techniques. Build robust database systems that can handle your application's growth.",
    author: "David Kumar",
    date: "Dec 28, 2023",
    category: "Backend",
    image: "/database-design-architecture.jpg",
  },
  {
    id: 6,
    title: "DevOps in 2024: What You Need to Know",
    excerpt: "Essential DevOps practices and tools for modern development teams",
    fullContent:
      "DevOps continues to evolve with new tools and practices emerging regularly. From containerization to infrastructure as code, modern DevOps encompasses many critical practices. Learn what you need to know to implement effective DevOps in your organization.",
    author: "Lisa Anderson",
    date: "Dec 25, 2023",
    category: "DevOps",
    image: "/devops-ci-cd-pipeline.jpg",
  },
]

export default function BlogClientPage() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  return (
    <>
      {/* Blog Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and best practices from our team of experts
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden grid md:grid-cols-2">
            <img
              src={posts[0].image || "/placeholder.svg"}
              alt={posts[0].title}
              className="w-full h-full object-cover"
            />
            <div className="p-8 flex flex-col justify-center">
              <span className="text-primary font-semibold mb-3">{posts[0].category}</span>
              <h2 className="text-4xl font-bold text-foreground mb-4">{posts[0].title}</h2>
              <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {posts[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {posts[0].date}
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(posts[0].id)}
                className="flex items-center gap-2 w-fit px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Read Article
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-colors"
              >
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-semibold">{post.category}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(post.id)}
                    className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold"
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">Subscribe to our newsletter for the latest articles and insights</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Have a question?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Can't find what you're looking for? Get in touch with our team
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Contact Us
          </button>
        </div>
      </section>

      {/* Added modal for full article preview */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Article Preview</h2>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {posts
                .filter((p) => p.id === selectedPost)
                .map((post) => (
                  <div key={post.id}>
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <span className="text-primary font-semibold">{post.category}</span>
                    <h1 className="text-4xl font-bold text-foreground my-4">{post.title}</h1>
                    <div className="flex items-center gap-4 mb-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {post.date}
                      </div>
                    </div>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                      <p className="text-foreground leading-relaxed">{post.fullContent}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
