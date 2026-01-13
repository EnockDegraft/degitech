import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogClientPage from "./blog-client-page"

export const metadata = {
  title: "Blog | DegiTech Consults",
  description: "Read our latest articles about web and mobile development",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BlogClientPage />
      <Footer />
    </main>
  )
}
