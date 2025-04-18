
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProfileImageProps {
  activeSection: string | null;
}

const ProfileImage = ({ activeSection }: ProfileImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Default image URL and section-specific images
  const defaultImage = '/placeholder.svg';
  const sectionImages = {
    blog: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=600&q=80',
    resume: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=600&q=80',
    shop: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&h=600&q=80',
    community: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=600&q=80'
  };

  // Determine which image to show based on active section
  const currentImage = activeSection ? sectionImages[activeSection as keyof typeof sectionImages] : defaultImage;
  
  // Section-specific color overlays
  const getSectionOverlayClass = () => {
    switch (activeSection) {
      case 'blog':
        return 'bg-blog/10';
      case 'resume':
        return 'bg-resume/10';
      case 'shop':
        return 'bg-shop/10';
      case 'community':
        return 'bg-community/10';
      default:
        return '';
    }
  };

  return (
    <div className="relative mx-auto mb-8 w-48 h-48 md:w-64 md:h-64">
      <div 
        className={cn(
          "absolute inset-0 rounded-full transition-all duration-300 animate-image-rotate",
          getSectionOverlayClass()
        )}
      />
      <img 
        src={currentImage}
        alt="Adarsh Sadanand" 
        className={cn(
          "w-full h-full object-cover rounded-full border-4 shadow-lg transition-opacity duration-500",
          {
            "opacity-0": !isLoaded,
            "opacity-100": isLoaded,
            "border-blog/50": activeSection === 'blog',
            "border-resume/50": activeSection === 'resume',
            "border-shop/50": activeSection === 'shop',
            "border-community/50": activeSection === 'community',
            "border-primary/30": !activeSection,
          }
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ProfileImage;
