import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
// import cubeLeg from "../assets/cube-leg.png";
import image1 from '../assets/quality.jpg';
import {
BadgeCheck,
  Package,
Truck,
  ShieldCheck,
  Star
  // ... ikon lain yang Anda pilih
} from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Premium Grade Only",
    description:
      "We deliver only high-quality, carefully selected products that meet international export standards. Our commitment to premium grade ensures that every shipment offers the best value and performance.",
    icon: <BadgeCheck />,
  },
  {
    title: "Consistent Quality Control",
    description:
      "Every product goes through strict and continuous quality checks to maintain consistent standards. This allows our clients to trust the uniformity, safety, and reliability of each batch we ship.",
    icon: <ShieldCheck />,
  },
  {
    title: "Customizable Supply Solutions",
    description:
      "We offer flexible ordering systems—whether small or bulk quantities—and provide packaging options that can be tailored to your specific market or branding needs. This makes our service adaptable for both small businesses and large-scale distributors.",
    icon: <Package />,
  },
  {
    title: "Reliable Global Distribution",
    description:
      "From documentation to logistics, we handle every part of the export process professionally and efficiently. Our strong network and experience ensure smooth, on-time delivery to destinations worldwide.",
    icon: <Truck />,
  },
  {
    title: "Exclusive Collaboration with Local Manufacturers",
    description:
      "We partner exclusively with trusted Indonesian local manufacturers in order to provide high-quality products and to be able to distribute to the global market. It supports local industry growth while ensuring traceable, reliable sourcing for our clients.",
    icon: <Star />,
  },
];

export const Services = () => {
  return (
    <section className="container pt-24 pb-12">
      <h2 className="text-3xl md:text-4xl font-bold pb-16">
            Why  {" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
               Choose Us {" "}
            </span>
            
          </h2>
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center lg:items-start">
        <div className="order-last lg:order-first w-full">

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <div className="order-first lg:order-last w-full h-full flex items-center justify-center">
          <img
            src={image1}
            className="w-auto h-full object-cover rounded-lg"
            alt="About services"
          />
        </div>
      </div>
    </section>
  );
};
