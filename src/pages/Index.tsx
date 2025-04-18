
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Book, Briefcase, ShoppingBag, Users } from "lucide-react";
import Layout from "@/components/Layout";
import ProfileImage from "@/components/ProfileImage";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const handleNavHover = (section: string | null) => {
    setActiveSection(section);
  };
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-8 md:py-16">
        <ProfileImage activeSection={activeSection} />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Adarsh Sadanand
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Building digital experiences with code, creativity, and a dash of caffeine.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Link 
            to="/blog"
            className="group"
            onMouseEnter={() => handleNavHover('blog')}
            onMouseLeave={() => handleNavHover(null)}
          >
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-colors hover:bg-blog/5 hover:border-blog">
              <div className="rounded-full bg-blog/10 p-3 text-blog">
                <Book className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-medium">Blog</h2>
              <p className="text-center text-sm text-muted-foreground">
                Thoughts, tutorials, and stories from my journey in tech and beyond.
              </p>
              <Button variant="outline" className="mt-2 group-hover:bg-blog group-hover:text-white">
                Read Posts
              </Button>
            </div>
          </Link>
          
          <Link 
            to="/resume"
            className="group"
            onMouseEnter={() => handleNavHover('resume')}
            onMouseLeave={() => handleNavHover(null)}
          >
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-colors hover:bg-resume/5 hover:border-resume">
              <div className="rounded-full bg-resume/10 p-3 text-resume">
                <Briefcase className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-medium">Resume</h2>
              <p className="text-center text-sm text-muted-foreground">
                My professional journey, projects, and skills in development.
              </p>
              <Button variant="outline" className="mt-2 group-hover:bg-resume group-hover:text-white">
                View Resume
              </Button>
            </div>
          </Link>
          
          <Link 
            to="/shop"
            className="group"
            onMouseEnter={() => handleNavHover('shop')}
            onMouseLeave={() => handleNavHover(null)}
          >
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-colors hover:bg-shop/5 hover:border-shop">
              <div className="rounded-full bg-shop/10 p-3 text-shop">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-medium">Shop</h2>
              <p className="text-center text-sm text-muted-foreground">
                Explore my collection of Hot Wheels, digital assets, and more.
              </p>
              <Button variant="outline" className="mt-2 group-hover:bg-shop group-hover:text-white">
                Browse Items
              </Button>
            </div>
          </Link>
          
          <Link 
            to="/community"
            className="group"
            onMouseEnter={() => handleNavHover('community')}
            onMouseLeave={() => handleNavHover(null)}
          >
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-colors hover:bg-community/5 hover:border-community">
              <div className="rounded-full bg-community/10 p-3 text-community">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-medium">Community</h2>
              <p className="text-center text-sm text-muted-foreground">
                Connect with me and others through my chatbot or forum.
              </p>
              <Button variant="outline" className="mt-2 group-hover:bg-community group-hover:text-white">
                Join In
              </Button>
            </div>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;
