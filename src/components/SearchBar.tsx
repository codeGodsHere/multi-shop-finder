import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative group">
          <Input
            type="text"
            placeholder="Search for any product... (e.g., iPhone 15, MacBook Pro)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-16 pl-6 pr-20 text-lg rounded-2xl border-2 border-transparent bg-surface-elevated shadow-elegant focus:border-primary focus:shadow-premium transition-all duration-300 placeholder:text-text-secondary"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="absolute right-2 top-2 h-12 w-12 rounded-xl bg-primary hover:bg-hero-secondary transition-colors duration-300"
            size="icon"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </Button>
        </div>
      </form>
      <p className="text-center text-text-secondary mt-4 text-sm">
        Search across Amazon, Flipkart, Myntra, and Ajio instantly
      </p>
    </div>
  );
};

export default SearchBar;