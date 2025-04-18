
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Github } from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A responsive portfolio website built with React and Tailwind CSS",
    techStack: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "Admin dashboard for an e-commerce platform with analytics and order management",
    techStack: ["React", "TypeScript", "Chart.js", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A drag-and-drop task management application with team collaboration features",
    techStack: ["React", "Redux", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const Resume = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight">Resume & Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            A glimpse into my professional journey and projects
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-between rounded-lg border p-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-muted-foreground max-w-2xl">
              I'm a passionate web developer with expertise in creating responsive, user-friendly 
              applications. With a strong foundation in modern web technologies, I enjoy 
              building solutions that solve real-world problems.
            </p>
          </div>
          
          <Button className="bg-resume hover:bg-resume-hover">
            <Download className="mr-2 h-4 w-4" />
            Download Resume (PDF)
          </Button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Resume;
