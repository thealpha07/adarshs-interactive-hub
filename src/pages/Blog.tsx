
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    date: "2025-04-01",
    excerpt: "A beginner-friendly guide to setting up and building your first React app with TypeScript.",
    category: "Tech"
  },
  {
    id: 2,
    title: "My Journey into Web Development",
    date: "2025-03-20",
    excerpt: "How I went from a complete beginner to a professional developer in under a year.",
    category: "Personal"
  },
  {
    id: 3,
    title: "Top 10 VS Code Extensions for Developers",
    date: "2025-03-15",
    excerpt: "Boost your productivity with these essential VS Code extensions for web development.",
    category: "Tech"
  },
  {
    id: 4,
    title: "Exploring New York City",
    date: "2025-03-10",
    excerpt: "My weekend adventure exploring the hidden gems of New York City.",
    category: "Travel"
  },
  {
    id: 5,
    title: "Building a Personal Brand as a Developer",
    date: "2025-03-05",
    excerpt: "Why having a personal brand matters and how to start building one as a developer.",
    category: "Career"
  }
];

const categories = ["All", "Tech", "Personal", "Travel", "Career"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight"
          >
            Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Thoughts, stories, and ideas from my journey
          </motion.p>
        </div>
        
        <Tabs defaultValue="All" value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm">
                      <Tag className="mr-1 h-3 w-3" />
                      {post.category}
                    </div>
                  </div>
                  
                  <h2 className="mb-2 text-xl font-semibold tracking-tight group-hover:text-blog transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mt-2 group-hover:bg-blog group-hover:text-white transition-colors"
                  >
                    Read More
                  </Button>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Blog;
