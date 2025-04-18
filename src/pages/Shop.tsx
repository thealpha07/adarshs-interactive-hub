
import { useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample shop items data
const shopItems = [
  {
    id: 1,
    title: "1970 Dodge Charger",
    description: "Limited edition Hot Wheels collectible in mint condition",
    price: 12.99,
    category: "Hot Wheels",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=300&h=200&q=80"
  },
  {
    id: 2,
    title: "Cybertruck Model",
    description: "Die-cast Tesla Cybertruck collectible model",
    price: 19.99,
    category: "Hot Wheels",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=300&h=200&q=80"
  },
  {
    id: 3,
    title: "Digital Art Print",
    description: "High-quality digital artwork print, signed by the artist",
    price: 24.99,
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=300&h=200&q=80"
  },
  {
    id: 4,
    title: "Web Dev Ebook",
    description: "Comprehensive guide to modern web development techniques",
    price: 9.99,
    category: "Digital",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&h=200&q=80"
  },
  {
    id: 5,
    title: "Custom Sticker Pack",
    description: "Set of 5 developer-themed vinyl stickers",
    price: 7.99,
    category: "Merchandise",
    image: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&w=300&h=200&q=80"
  },
  {
    id: 6,
    title: "Code Mug",
    description: "Ceramic mug with programmer humor design",
    price: 14.99,
    category: "Merchandise",
    image: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&w=300&h=200&q=80"
  }
];

const categories = ["All", "Hot Wheels", "Digital", "Digital Art", "Merchandise"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { toast } = useToast();
  
  const filteredItems = selectedCategory === "All" 
    ? shopItems 
    : shopItems.filter(item => item.category === selectedCategory);
  
  const handleAddToCart = (item: typeof shopItems[0]) => {
    toast({
      title: "Added to cart",
      description: `${item.title} has been added to your cart.`,
      duration: 3000
    });
  };
  
  return (
    <Layout>
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight">Shop</h1>
          <p className="text-xl text-muted-foreground">
            Browse my collection of Hot Wheels and digital products
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((category) => (
            <Button 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-shop hover:bg-shop-hover" : ""}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <Badge variant="outline">${item.price.toFixed(2)}</Badge>
                </div>
                <CardDescription className="line-clamp-2">{item.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleAddToCart(item)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Shop;
