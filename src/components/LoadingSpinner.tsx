import { Loader2, Search, ShoppingBag } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="w-full max-w-md mx-auto text-center animate-fade-in">
      <div className="relative mb-6">
        <div className="loading-spinner mx-auto w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Search className="h-6 w-6 text-primary animate-pulse" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3">Searching across platforms...</h3>
      <p className="text-text-secondary mb-6">
        Finding the best deals for you on Amazon, Flipkart, Myntra, and Ajio
      </p>
      
      <div className="flex justify-center gap-4">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={item}
            className="w-3 h-3 bg-primary rounded-full animate-pulse"
            style={{
              animationDelay: `${index * 200}ms`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <ShoppingBag className="h-8 w-8 text-primary/60 animate-pulse-slow" />
      </div>
    </div>
  );
};

export default LoadingSpinner;