import { Smile, Meh, Frown, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const moodData = [
  { day: "Mon", value: 7, mood: "Happy" },
  { day: "Tue", value: 5, mood: "Neutral" },
  { day: "Wed", value: 8, mood: "Great" },
  { day: "Thu", value: 6, mood: "Good" },
  { day: "Fri", value: 9, mood: "Excellent" },
  { day: "Sat", value: 7, mood: "Happy" },
  { day: "Sun", value: 8, mood: "Great" },
];

export const MoodTracker = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Track Your <span className="text-primary">Emotional Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visualize your mood patterns and celebrate your progress.
          </p>
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm glow-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Your Week at a Glance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-2 h-64 p-4">
              {moodData.map((data, index) => {
                const height = (data.value / 10) * 100;
                return (
                  <div key={index} className="flex flex-col items-center gap-2 flex-1">
                    <div className="relative w-full flex items-end justify-center h-full">
                      <div
                        className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all duration-500 hover:opacity-80 glow-border"
                        style={{ 
                          height: `${height}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium text-primary">
                          {data.value}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{data.day}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <Smile className="w-5 h-5 text-primary" />
                <span className="text-sm">Happy</span>
              </div>
              <div className="flex items-center gap-2">
                <Meh className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">Neutral</span>
              </div>
              <div className="flex items-center gap-2">
                <Frown className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">Low</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
