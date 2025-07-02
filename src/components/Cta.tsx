import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Cultivating Excellence, {" "}
            </span>
            Nurturing Nature
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
             We Invite You to Collaborate with Briquet Nusantara for Premium, Planet-Friendly Energy.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Link to="/contact" className="w-full md:w-1/3"> {/* Class w-full/md:w-1/3 dipindahkan ke Link */}
          <Button className="w-full md:mr-4 md:w-auto">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
