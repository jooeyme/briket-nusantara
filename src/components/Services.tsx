import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
// import cubeLeg from "../assets/cube-leg.png";
import image1 from '../assets/gallery/white-1.jpg';
import {
  Leaf,

  Globe,

  ShieldCheck,
  // ... ikon lain yang Anda pilih
} from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Made from High-Quality Materials",
    description:
      "Each Briquet Nusantara piece is crafted from the finest selected natural materials, guaranteeing optimal and long-lasting combustion. Experience premium quality that delivers perfect heat for every moment!",
    icon: <Leaf />,
  },
  {
    title: "Environmentally Friendly",
    description:
      "Contribute to a greener planet with every use! Briquet Nusantara is specifically designed to be eco-friendly, reducing your carbon footprint and ensuring environmental sustainability for future generations. It's a smart choice for a better future",
    icon: <Globe />,
  },
  {
    title: "No Chemical Additives",
    description:
      "Enjoy pure warmth without any worries! Briquet Nusantara is 100% free from harmful chemical additives, making it a healthy and safe choice for your family. Expect clean burning, fresh air, and peace of mind",
    icon: <ShieldCheck />,
  },
];

export const Services = () => {
  return (
    <section className="container pt-24 pb-12">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            The {" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
               Advantages {" "}
            </span>
            of Our Products
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            
          </p>

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

        <img
          src={image1}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
