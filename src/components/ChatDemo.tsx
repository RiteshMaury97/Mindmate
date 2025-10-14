import { Bot, User, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const demoMessages = [
  {
    role: "user",
    content: "I'm feeling a bit anxious today.",
    time: "2:30 PM",
  },
  {
    role: "assistant",
    content: "I hear you. Anxiety can be challenging. Would you like to talk about what's making you feel this way? Sometimes sharing can help.",
    time: "2:31 PM",
  },
  {
    role: "user",
    content: "I have a big presentation tomorrow and I'm worried.",
    time: "2:32 PM",
  },
  {
    role: "assistant",
    content: "It's completely normal to feel nervous before a presentation. Remember, you've prepared for this. Let's try a quick breathing exercise together. Take a deep breath in for 4 counts...",
    time: "2:33 PM",
  },
];

export const ChatDemo = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Compassionate <span className="text-primary">AI Support</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience judgment-free conversations designed to support your mental wellness.
          </p>
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm glow-border">
          <CardHeader className="border-b border-primary/20">
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              MindMate Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {demoMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[70%] p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-primary/20 border border-primary/30"
                        : "bg-muted/30 border border-primary/10"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <span className="text-xs text-muted-foreground mt-2 block">
                      {message.time}
                    </span>
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                className="flex-1 bg-input/50 border-primary/20"
                disabled
              />
              <Button variant="glow" size="icon" disabled>
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Demo preview - Sign up to start your journey
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
