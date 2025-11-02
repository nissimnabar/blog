import heroImage from "@/assets/blog-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Blog hero showcasing technology and innovation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Welcome to My Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Thoughts, ideas, and stories
            </p>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Latest Posts</h2>
          <div className="space-y-6">
            <article className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Getting Started
              </h3>
              <p className="text-muted-foreground">
                Welcome to the blog. More content coming soon!
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
