// import { Statistics } from "./Statistics";
import logo from "../assets/logo.jpg";

export const AboutCompany = () => {
  return (
    <section
      id="about"
      className="container pt-24 pb-8 sm:pt-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col md:flex-row gap-8 md:gap-12">
          <img
            src={logo}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                PT Pradipa Muda Nusantara is an Indonesia-based company focused on 
                producing and exporting premium-quality coconut shell briquettes. 
                Originating from the land of abundant coconuts and community spirit, 
                we deliver eco-friendly, efficient, and sustainable energy solutions to the world. 
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                We believe Indonesia is not only the world’s top coconut producer but also a source 
                of inspiration for high-quality and value-driven products. By combining natural 
                heritage with innovation, we are committed to bridging local resources with global needs.
                </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
