import { ExternalLink, ShoppingBag, Store, Shirt, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Platform {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface PlatformResultsProps {
  query: string;
  onNewSearch: () => void;
}

const PlatformResults = ({ query, onNewSearch }: PlatformResultsProps) => {
  const platforms: Platform[] = [
    {
      name: "Amazon",
      url: `https://www.amazon.in/s?k=${encodeURIComponent(query)}`,
      icon: <ShoppingBag className="h-6 w-6" />,
      color: "bg-orange-500 hover:bg-orange-600",
      description: "Global marketplace with fast delivery"
    },
    {
      name: "Flipkart",
      url: `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`,
      icon: <Store className="h-6 w-6" />,
      color: "bg-blue-500 hover:bg-blue-600",
      description: "India's leading e-commerce platform"
    },
    {
      name: "Myntra",
      url: `https://www.myntra.com/${encodeURIComponent(query)}`,
      icon: <Shirt className="h-6 w-6" />,
      color: "bg-pink-500 hover:bg-pink-600",
      description: "Fashion and lifestyle destination"
    },
    {
      name: "Ajio",
      url: `https://www.ajio.com/search/?text=${encodeURIComponent(query)}`,
      icon: <Sparkles className="h-6 w-6" />,
      color: "bg-purple-500 hover:bg-purple-600",
      description: "Trendy fashion and accessories"
    }
  ];

  const openAllLinks = () => {
    platforms.forEach(platform => {
      window.open(platform.url, '_blank');
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Search results for <span className="text-primary">"{query}"</span>
        </h2>
        <p className="text-text-secondary mb-6">
          Click on any platform below to search for your product
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={openAllLinks}
            className="bg-primary hover:bg-hero-secondary text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Open All Platforms
          </Button>
          <Button
            onClick={onNewSearch}
            variant="outline"
            className="px-8 py-3 rounded-xl font-semibold border-2 hover:bg-muted"
          >
            New Search
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((platform, index) => (
          <Card
            key={platform.name}
            className="card-elevated p-6 hover:scale-105 transition-all duration-300 platform-btn animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-lg ${platform.color} text-white transition-colors duration-300`}>
                {platform.icon}
              </div>
              <div>
                <h3 className="font-bold text-xl">{platform.name}</h3>
                <p className="text-text-secondary text-sm">{platform.description}</p>
              </div>
            </div>
            <Button
              onClick={() => window.open(platform.url, '_blank')}
              className="w-full bg-primary hover:bg-hero-secondary text-white py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Search on {platform.name}
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlatformResults;