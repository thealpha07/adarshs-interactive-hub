
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProfileImageProps {
  activeSection: string | null;
}

const ProfileImage = ({ activeSection }: ProfileImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Default image URL and section-specific images - using business/tech themed silhouettes
  const defaultImage = 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=600&h=800&q=80'; // Standing person silhouette
  const sectionImages = {
    blog: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&h=800&q=80', // Person reading
    resume: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&h=800&q=80', // Professional pose
    shop: 'https://images.unsplash.com/photo-1512327536842-5aa37d1ba3e3?auto=format&fit=crop&w=600&h=800&q=80', // Person with shopping elements
    community: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=600&h=800&q=80' // Person gesturing/talking
  };

  // Determine which image to show based on active section
  const currentImage = activeSection ? sectionImages[activeSection as keyof typeof sectionImages] : defaultImage;
  
  // Section-specific overlay colors
  const getSectionOverlayClass = () => {
    switch (activeSection) {
      case 'blog':
        return 'from-blog/20';
      case 'resume':
        return 'from-resume/20';
      case 'shop':
        return 'from-shop/20';
      case 'community':
        return 'from-community/20';
      default:
        return 'from-primary/20';
    }
  };

  return (
    <div className="relative mx-auto w-[300px] h-[400px] md:w-[400px] md:h-[600px]">
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r transition-all duration-300",
          getSectionOverlayClass(),
          "to-transparent"
        )}
      />
      <img 
        src={currentImage}
        alt="Adarsh Sadanand" 
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          {
            "opacity-0": !isLoaded,
            "opacity-100": isLoaded,
          }
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ProfileImage;
