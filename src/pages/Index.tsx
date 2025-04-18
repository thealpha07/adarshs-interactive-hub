
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
      <div className="min-h-[calc(100vh-8rem)] flex flex-col md:flex-row items-center gap-8 py-8 md:py-16">
        {/* Left section with profile image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent rounded-3xl" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <ProfileImage activeSection={activeSection} />
          </motion.div>
        </div>

        {/* Right section with name and navigation cards */}
        <div className="w-full md:w-1/2 flex flex-col items-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Adarsh Sadanand
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Building digital experiences with code, creativity, and a dash of caffeine.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-6 max-w-2xl mx-auto transform rotate-[15deg] md:rotate-[25deg]"
          >
            <Link 
              to="/blog"
              className="group transform -rotate-[15deg] md:-rotate-[25deg]"
              onMouseEnter={() => handleNavHover('blog')}
              onMouseLeave={() => handleNavHover(null)}
            >
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all duration-300 hover:bg-blog/5 hover:border-blog hover:scale-105">
                <div className="rounded-full bg-blog/10 p-3 text-blog">
                  <Book className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-medium">Blog</h2>
                <p className="text-center text-sm text-muted-foreground">
                  Thoughts and stories
                </p>
                <Button variant="outline" className="mt-2 group-hover:bg-blog group-hover:text-white">
                  Read Posts
                </Button>
              </div>
            </Link>

            <Link 
              to="/resume"
              className="group transform -rotate-[15deg] md:-rotate-[25deg]"
              onMouseEnter={() => handleNavHover('resume')}
              onMouseLeave={() => handleNavHover(null)}
            >
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all duration-300 hover:bg-resume/5 hover:border-resume hover:scale-105">
                <div className="rounded-full bg-resume/10 p-3 text-resume">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-medium">Resume</h2>
                <p className="text-center text-sm text-muted-foreground">
                  My journey
                </p>
                <Button variant="outline" className="mt-2 group-hover:bg-resume group-hover:text-white">
                  View Resume
                </Button>
              </div>
            </Link>

            <Link 
              to="/shop"
              className="group transform -rotate-[15deg] md:-rotate-[25deg]"
              onMouseEnter={() => handleNavHover('shop')}
              onMouseLeave={() => handleNavHover(null)}
            >
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all duration-300 hover:bg-shop/5 hover:border-shop hover:scale-105">
                <div className="rounded-full bg-shop/10 p-3 text-shop">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-medium">Shop</h2>
                <p className="text-center text-sm text-muted-foreground">
                  Hot Wheels & more
                </p>
                <Button variant="outline" className="mt-2 group-hover:bg-shop group-hover:text-white">
                  Browse Items
                </Button>
              </div>
            </Link>

            <Link 
              to="/community"
              className="group transform -rotate-[15deg] md:-rotate-[25deg]"
              onMouseEnter={() => handleNavHover('community')}
              onMouseLeave={() => handleNavHover(null)}
            >
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all duration-300 hover:bg-community/5 hover:border-community hover:scale-105">
                <div className="rounded-full bg-community/10 p-3 text-community">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-medium">Community</h2>
                <p className="text-center text-sm text-muted-foreground">
                  Join the chat
                </p>
                <Button variant="outline" className="mt-2 group-hover:bg-community group-hover:text-white">
                  Join In
                </Button>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
