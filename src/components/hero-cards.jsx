import { useState } from "react";
import { Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

function HeroCards() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: "Basic Plan",
      description: "Perfect for starters",
      price: "$9.99/mo",
    },
    {
      title: "Pro Plan",
      description: "For growing businesses",
      price: "$19.99/mo",
    },
    {
      title: "Enterprise Plan",
      description: "For large organizations",
      price: "$49.99/mo",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Choose Your Perfect Plan
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Select the plan that best fits your needs. Upgrade or downgrade at
            any time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
                selectedCard === index
                  ? "border-primary shadow-lg"
                  : "hover:shadow-md hover:-translate-y-1"
              }`}
              onClick={() => setSelectedCard(index)}
            >
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-bold">
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <p className="mt-4 text-3xl font-bold text-primary">
                  {card.price}
                </p>
                {selectedCard === index && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </CardHeader>
              <div
                className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ opacity: selectedCard === index ? 1 : 0 }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCards;
