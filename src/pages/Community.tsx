
import { useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

// Sample chatbot messages
const initialChatbotMessages = [
  {
    id: 1,
    sender: 'bot',
    content: 'Hi there! I\'m AdarshBot. How can I help you today?',
    timestamp: new Date(Date.now() - 60000)
  }
];

// Sample forum posts
const forumPosts = [
  {
    id: 1,
    author: 'Jane Smith',
    title: 'Favorite Web Development Resources?',
    content: 'Looking for recommendations on learning resources for advanced React concepts. Any suggestions?',
    timestamp: new Date(Date.now() - 86400000 * 2),
    replies: 3
  },
  {
    id: 2,
    author: 'Mike Johnson',
    title: 'Hot Wheels Collectors Meet',
    content: 'Organizing a virtual meetup for Hot Wheels collectors next month. Anyone interested?',
    timestamp: new Date(Date.now() - 86400000),
    replies: 5
  },
  {
    id: 3,
    author: 'Sarah Lee',
    title: 'Portfolio Feedback Request',
    content: 'Just launched my new portfolio site and would love some constructive feedback from the community!',
    timestamp: new Date(Date.now() - 43200000),
    replies: 2
  }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("chatbot");
  const [chatMessages, setChatMessages] = useState(initialChatbotMessages);
  const [messageInput, setMessageInput] = useState("");
  const [postInput, setPostInput] = useState("");
  const { toast } = useToast();
  
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    
    // Add user message
    const userMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      content: messageInput,
      timestamp: new Date()
    };
    
    setChatMessages([...chatMessages, userMessage]);
    setMessageInput("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "That's an interesting question! Let me think about it...",
        "Great point! I think that's really insightful.",
        "I'm not sure I understand. Could you please clarify?",
        "I'd recommend checking out the blog section for more information on that topic.",
        "Thanks for sharing! Is there anything specific you'd like to know about?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage = {
        id: chatMessages.length + 2,
        sender: 'bot',
        content: randomResponse,
        timestamp: new Date()
      };
      
      setChatMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };
  
  const handleCreatePost = () => {
    if (!postInput.trim()) return;
    
    toast({
      title: "Post created!",
      description: "Your forum post has been published successfully.",
      duration: 3000
    });
    
    setPostInput("");
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <Layout>
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight">Community</h1>
          <p className="text-xl text-muted-foreground">
            Connect, chat, and share with others
          </p>
        </motion.div>
        
        <Tabs defaultValue="chatbot" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
            <TabsTrigger value="forum">Forum</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chatbot" className="space-y-4">
            <div className="rounded-lg border h-[500px] flex flex-col">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Chat with AdarshBot</h2>
                <p className="text-sm text-muted-foreground">
                  Ask me anything about coding, my projects, or just say hello!
                </p>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === 'user' 
                          ? 'bg-community text-white' 
                          : 'bg-muted'
                      }`}
                    >
                      <p>{msg.content}</p>
                      <span className="text-xs opacity-70 block text-right mt-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t mt-auto">
                <div className="flex gap-2">
                  <Textarea 
                    placeholder="Type your message..." 
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="resize-none"
                    rows={1}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    className="bg-community hover:bg-community-hover"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="forum" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create a Post</CardTitle>
                <CardDescription>
                  Share your thoughts or ask a question to the community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="What's on your mind?"
                  value={postInput}
                  onChange={(e) => setPostInput(e.target.value)}
                  className="resize-none"
                  rows={3}
                />
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleCreatePost}
                  className="bg-community hover:bg-community-hover ml-auto"
                >
                  Post
                </Button>
              </CardFooter>
            </Card>
            
            <h3 className="text-xl font-semibold mt-8">Recent Discussions</h3>
            
            <div className="space-y-4">
              {forumPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <CardDescription>
                          Posted by {post.author} • {post.timestamp.toLocaleDateString()}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{post.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.replies} {post.replies === 1 ? 'reply' : 'replies'}
                    </span>
                    <Button variant="outline">View Discussion</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Community;
