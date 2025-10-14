import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold glow-text">MindMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              Features
            </a>
            <a href="#tracking" className="text-sm hover:text-primary transition-colors">
              Mood Tracking
            </a>
            <a href="#affirmations" className="text-sm hover:text-primary transition-colors">
              Affirmations
            </a>
            <a href="#chat" className="text-sm hover:text-primary transition-colors">
              Chat Demo
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button variant="glow">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <a
              href="#features"
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#tracking"
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Mood Tracking
            </a>
            <a
              href="#affirmations"
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Affirmations
            </a>
            <a
              href="#chat"
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Chat Demo
            </a>
            <div className="pt-4 space-y-2">
              <Link to="/auth" className="block">
                <Button variant="ghost" className="w-full">Sign In</Button>
              </Link>
              <Link to="/auth" className="block">
                <Button variant="glow" className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
