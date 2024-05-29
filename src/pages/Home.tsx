import { Presentation } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

const Features = [
  {
    name: "Content Management",
    description:
      "Create, edit, and manage your content with our intuitive content management system.",
    icon: Presentation,
  },
  {
    name: "Content Management",
    description:
      "Create, edit, and manage your content with our intuitive content management system.",
    icon: Presentation,
  },
  {
    name: "Content Management",
    description:
      "Create, edit, and manage your content with our intuitive content management system.",
    icon: Presentation,
  },
  {
    name: "Content Management",
    description:
      "Create, edit, and manage your content with our intuitive content management system.",
    icon: Presentation,
  },
  {
    name: "Content Management",
    description:
      "Create, edit, and manage your content with our intuitive content management system.",
    icon: Presentation,
  },
];

const Home = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleScrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateToAuth = () => {
    window.location.href = "/log-in";
  };

  return (
    <main className="bg-black min-h-screen text-white text-center">
      <div className="container flex-center flex-col">
        <div className="h-screen flex-center flex-col">
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent pb-2">
            Elevate Your Blog with Our Powerful Tools
          </h1>
          <h2 className="text-lg text-gray-300 max-w-xl mb-6">
            Craft your content, track your performance, and monetize your blog
            with our all-in-one platform.
          </h2>
          <div className="flex-center gap-3">
            <Button onClick={handleNavigateToAuth}>Get Started</Button>
            <Button
              className="text-black bg-gray-100 hover:bg-gray-300"
              variant="outline"
              onClick={handleScrollToFeatures}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 mb-8">
          <h2 ref={featuresRef} className="text-3xl font-bold">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center space-y-2 border border-gray-500 rounded-xl py-4 px-8"
              >
                <feature.icon className="w-[36px] h-[36px]" />
                <h3 className="text-xl font-medium">{feature.name}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
