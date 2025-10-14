import { Sparkles, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const affirmations = [
  "You are worthy of love and happiness.",
  "Every day is a new opportunity to grow.",
  "Your feelings are valid and important.",
  "You have the strength to overcome challenges.",
  "You deserve peace and calm in your life.",
  "Your journey is unique and beautiful.",
  "You are making progress, even on difficult days.",
  "You are enough, exactly as you are.",
];

export const Affirmations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNewAffirmation = () => {
    setCurrentIndex((prev) => (prev + 1) % affirmations.length);
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Daily <span className="text-primary">Affirmations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Start your day with positivity and self-compassion.
          </p>
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm glow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <CardContent className="p-12 text-center relative">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-glow-pulse" />
            
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 min-h-[120px] flex items-center justify-center">
              "{affirmations[currentIndex]}"
            </blockquote>

            <Button 
              onClick={getNewAffirmation}
              variant="outline"
              className="gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              New Affirmation
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
