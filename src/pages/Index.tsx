import { useState } from "react";
import { Search, ShoppingCart, Sparkles, Star } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import PlatformResults from "@/components/PlatformResults";
import LoadingSpinner from "@/components/LoadingSpinner";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

type ViewState = "home" | "loading" | "results";

const Index = () => {
  const [viewState, setViewState] = useState<ViewState>("home");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setViewState("loading");
    
    // Simulate search delay
    setTimeout(() => {
      setViewState("results");
    }, 2000);
  };

  const handleNewSearch = () => {
    setViewState("home");
    setSearchQuery("");
  };

  const renderContent = () => {
    switch (viewState) {
      case "loading":
        return <LoadingSpinner />;
      case "results":
        return <PlatformResults query={searchQuery} onNewSearch={handleNewSearch} />;
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="hero-gradient w-20 h-20 rounded-2xl flex items-center justify-center shadow-elegant">
                    <Search className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-hero-secondary rounded-full flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-hero-secondary bg-clip-text text-transparent">
                SmartSearch Pro
              </h1>
              
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                Find any product across India's top e-commerce platforms instantly. 
                Compare prices, read reviews, and shop smarter.
              </p>
              
              <div className="flex justify-center gap-8 mb-12">
                <div className="flex items-center gap-2 text-text-secondary">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">4 Major Platforms</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Best Deals</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">AI Assistant</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} isLoading={false} />

            {/* Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Amazon", color: "bg-orange-500", desc: "Global marketplace" },
                { name: "Flipkart", color: "bg-blue-500", desc: "India's favorite" },
                { name: "Myntra", color: "bg-pink-500", desc: "Fashion hub" },
                { name: "Ajio", color: "bg-purple-500", desc: "Trendy styles" }
              ].map((platform, index) => (
                <div 
                  key={platform.name} 
                  className="text-center p-6 rounded-xl card-elevated hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 ${platform.color} rounded-lg mx-auto mb-3 flex items-center justify-center shadow-soft`}>
                    <ShoppingCart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{platform.name}</h3>
                  <p className="text-sm text-text-secondary">{platform.desc}</p>
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          {renderContent()}
        </div>
        <Footer />
      </main>
      <ChatBot />
    </div>
  );
};

export default Index;
