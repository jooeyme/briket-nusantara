// import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import image from "../assets/mission/misi1.jpg";
import image2 from "../assets/mission/misi2.jpg";
import image3 from "../assets/mission/misi3.jpg";
import image4 from "../assets/mission/misi4.jpg";
import image5 from "../assets/mission/misi5.jpg";

// import {
//   Award,
//   Sparkles,
//   TrendingUp,
//   Recycle,
//   Zap,
//   Globe,
//   Network,
//   Truck,
//   Leaf, // Mungkin tetap relevan untuk konteks kelapa/alam
//   // ... ikon lain yang Anda perlukan
// } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "To produce superior briquettes in terms of quality, efficiency, and sustainability.",
    image: image,
  },
  {
    title: "Intuitive user interface",
    description:
      "To raise the potential of Indonesian coconut as a high-value export commodity. ",
    image: image2,
  },
  {
    title: "AI-Powered insights",
    description:
      "To preserve nature by utilizing coconut shell waste responsibly. ",
    image: image3,
  },
  {
    title: "Intuitive user interface",
    description:
      "To increase Indonesia's competitiveness in the global alternative energy market.",
    image: image4,
  },
  {
    title: "AI-Powered insights",
    description:
      "To build a distribution network that reaches local and international markets.",
    image: image5,
  },
];

// const featureList: string[] = [
//   "Dark/Light theme",
//   "Reviews",
//   "Features",
//   "Pricing",
//   "Contact form",
//   "Our team",
//   "Responsive design",
//   "Newsletter",
//   "Minimalist",
// ];

export const Features = () => {
  return (
    <section
      id="features"
      className="container space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/20 to-primary text-transparent bg-clip-text">
          Missions
        </span>
      </h2>

      {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 ">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title}>
            {/* <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader> */}

            <CardContent className="pt-6">{description}</CardContent>

            {/* <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  );
};
