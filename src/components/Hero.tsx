import { Button } from "./ui/button";
//import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
//import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#5C4033]  to-[#8B6B58] text-transparent bg-clip-text">
              Briquet Nusantara
            </span>{" "}
           Superior 
          </h1>{" "}
          Quality,{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#BF953F] via-[#A67C00] to-[#A67C00] text-transparent bg-clip-text">
              Sustainable Living. 
            </span>{" "}
           
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Developed using premium natural ingredients, Briquet Nusantara delivers a clean and safe burning experience, preserving your well-being and the planet. Discover the genuine natural warmth.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">More Information</Button>

          {/* <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
