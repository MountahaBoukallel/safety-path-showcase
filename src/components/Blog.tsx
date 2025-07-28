import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  // Sample blog posts for design demonstration
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Workplace Safety in Oil & Gas Operations",
      excerpt: "Exploring emerging technologies and methodologies that are reshaping safety protocols in high-risk industrial environments...",
      content: "The oil and gas industry continues to evolve with new safety technologies and practices. In this comprehensive analysis, I examine how digital transformation is revolutionizing workplace safety management...",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Industry Analysis",
      featured: true
    },
    {
      id: 2,
      title: "Case Study: Implementing Zero-Incident Culture at Aramco Facility",
      excerpt: "A detailed analysis of the strategies and methodologies used to achieve zero incidents during the drilling equipment relocation project...",
      content: "During my involvement in the relocation of 28,461 drilling equipment items, we successfully maintained a zero-incident record. This case study breaks down the key factors...",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Case Study",
      featured: true
    },
    {
      id: 3,
      title: "NEBOSH Level 6 Diploma: Key Learnings and Practical Applications",
      excerpt: "Insights from pursuing the NEBOSH Level 6 International Diploma and how it applies to real-world safety management scenarios...",
      content: "The NEBOSH Level 6 International Diploma has provided invaluable insights into advanced safety management principles...",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Professional Development",
      featured: false
    },
    {
      id: 4,
      title: "Risk Assessment in High-Pressure Work Environments",
      excerpt: "Comprehensive guide to conducting effective risk assessments in demanding industrial settings with practical frameworks...",
      content: "Risk assessment forms the cornerstone of effective safety management. In high-pressure environments like oil and gas operations...",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Risk Management",
      featured: false
    },
    {
      id: 5,
      title: "Forklift Safety Best Practices: Lessons from the Field",
      excerpt: "Practical insights and safety protocols for forklift operations in industrial warehouse environments...",
      content: "Through hands-on experience with forklift operations in Aramco facilities, I've compiled essential safety practices...",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Equipment Safety",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Blog & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge, case studies, and insights from the field of occupational health and safety
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Featured Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8">Recent Articles</h3>
          <div className="grid gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-md transition-all duration-300 border-border bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-4 group-hover:text-primary">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                More Content Coming Soon
              </h4>
              <p className="text-muted-foreground mb-4">
                I'm continuously working on new articles and case studies. 
                Connect with me to stay updated on the latest insights in occupational health and safety.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Subscribe for Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;