import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 py-8 text-center">
      <div className="flex items-center justify-center gap-2 text-text-secondary">
        <span className="text-sm font-medium">MADE BY</span>
        <Heart className="h-4 w-4 text-red-500 animate-pulse" />
        <span className="text-sm font-bold text-primary">Dev and Ansh</span>
      </div>
      <p className="text-xs text-text-secondary mt-2 opacity-70">
        Professional Product Search Platform
      </p>
    </footer>
  );
};

export default Footer;