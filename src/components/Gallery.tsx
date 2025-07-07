import image1 from '../assets/gallery/galeri-1.jpg';
import image2 from '../assets/gallery/galeri-2.jpg';
import image3 from '../assets/gallery/white-3.JPG';
import image4 from '../assets/gallery/galeri-3.jpg';
import image5 from '../assets/gallery/galeri-4.jpg';
import image6 from '../assets/gallery/brown-1.JPG';
import image7 from '../assets/gallery/bakar-1.jpg';
import image8 from '../assets/gallery/hitam-4.JPEG';
import image9 from '../assets/gallery/hitam-33.JPEG';
import image10 from '../assets/gallery/galeri-5.jpg';
import image11 from '../assets/gallery/bakar-24.JPEG';
import image12 from '../assets/gallery/bakar-38.JPEG';




export function Gallery() {
  return (
    <section
      id="gallery"
      className="container pb-24 pt-12"
    >
        <h2 className="text-3xl md:text-4xl pb-8 font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Briquet Nusantara{" "}
        </span>
        Gallery
      </h2>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={image6}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={image1}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={image11}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={image3}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={image12}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={image2}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={image5}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={image7}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={image8}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={image4}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={image9}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={image10}
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
    </section>
  );
}