import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Instagram, Linkedin } from "lucide-react";


import salman from '../assets/salman.jpg';
import hawa from '../assets/hawa.jpg';
import ratri from '../assets/ratri.jpg';
import dena from '../assets/dena.jpg';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: salman,
    name: "Salman Rofiul",
    position: "President Director",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/salman-rofiul-yumna-a9152a237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B74d0yUCDRYqMURKkZFguug%3D%3D",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/salmanrofiul_yumna",
      },
    ],
  },
  {
    imageUrl: dena,
    name: "Denasyah Ma'arief",
    position: "Operational Director",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/denasyah-ma-arief",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/denasyah_arief14 ",
      },
    ],
  },
  {
    imageUrl: hawa,
    name: "Hawa Habibah",
    position: "International Relation Director",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },

      {
        name: "Instagram",
        url: "https://www.instagram.com/hawa.habibah/",
      },
    ],
  },
  {
    imageUrl: ratri,
    name: "Ratri Pramudhita",
    position: "Administrative Director",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/ratri-pramudhita-653b38257",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/ratriprmdhta/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Our {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Team
        </span>
        
      </h2>

      {/* <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p> */}

      <div className="grid md:grid-cols-2 pt-16 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              {/* <CardContent className="text-center pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent> */}

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
