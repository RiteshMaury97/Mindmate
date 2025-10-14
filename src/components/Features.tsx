import { Heart, MessageCircle, TrendingUp, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Mood Tracking",
    description: "Monitor your emotional well-being with intuitive mood logging and beautiful visualizations.",
  },
  {
    icon: MessageCircle,
    title: "AI Conversations",
    description: "Engage in supportive, judgment-free conversations with our empathetic AI companion.",
  },
  {
    icon: TrendingUp,
    title: "Progress Insights",
    description: "Gain valuable insights into your mental health patterns and track your growth journey.",
  },
  {
    icon: Sparkles,
    title: "Daily Affirmations",
    description: "Receive personalized affirmations and motivational messages to brighten your day.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Everything You Need for <span className="text-primary">Mental Wellness</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            MindMate combines cutting-edge AI with proven wellness techniques to support your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 glow-border hover:glow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
