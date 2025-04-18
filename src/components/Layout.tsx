
import { useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const getSectionBackground = () => {
    if (!activeSection) return "";
    
    return `${activeSection}-bg`;
  };

  const handleNavHover = (section: string | null) => {
    setActiveSection(section);
  };

  return (
    <div className={cn("min-h-screen transition-colors duration-500", getSectionBackground())}>
      <header className="sticky top-0 z-10 border-b backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            onMouseEnter={() => handleNavHover(null)}
          >
            Adarsh Sadanand
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              to="/blog" 
              className="nav-link link-blog" 
              onMouseEnter={() => handleNavHover('blog')}
            >
              Blog
            </Link>
            <Link 
              to="/resume" 
              className="nav-link link-resume"
              onMouseEnter={() => handleNavHover('resume')}
            >
              Resume
            </Link>
            <Link 
              to="/shop" 
              className="nav-link link-shop"
              onMouseEnter={() => handleNavHover('shop')}
            >
              Shop
            </Link>
            <Link 
              to="/community" 
              className="nav-link link-community"
              onMouseEnter={() => handleNavHover('community')}
            >
              Community
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-12" onMouseEnter={() => handleNavHover(null)}>
        {children}
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adarsh Sadanand. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
