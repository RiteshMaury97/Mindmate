import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { MoodTracker } from "@/components/MoodTracker";
import { Affirmations } from "@/components/Affirmations";
import { ChatDemo } from "@/components/ChatDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="tracking">
        <MoodTracker />
      </div>
      <div id="affirmations">
        <Affirmations />
      </div>
      <div id="chat">
        <ChatDemo />
      </div>
      
      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 MindMate. Your mental wellness companion.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Always consult with healthcare professionals for serious concerns.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
