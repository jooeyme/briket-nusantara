// import image1 from '../assets/footage-1.jpg';
// import image2 from '../assets/footage-2.jpg';
// import image3 from '../assets/footage-3.jpg';
// import image4 from '../assets/footage-4.jpg';
// import image5 from '../assets/footage-5.jpg';
// import image6 from '../assets/footage-6.jpg';
// import image7 from '../assets/footage-7.jpg';
// import image8 from '../assets/footage-8.jpg';





// export function Footage() {
//   return (
//     <section
//       id="gallery"
//       className="container pb-24 pt-12"
//     >
//         <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">
//         <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//           Briquet Nusantara{" "}
//         </span>
//         Production Process
//       </h2>

//     <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//       <div className="grid gap-4">
//         <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center"
//             src={image1}
//             alt="gallery-photo"
//           />
//         </div>
//         <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center "
//             src={image2}
//             alt="gallery-photo"
//           />
//         </div>
//         {/* <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center"
//             src={image3}
//             alt="gallery-photo"
//           />
//         </div> */}
//       </div>
//       <div className="grid gap-4">
//         {/* <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center"
//             src={image8}
//             alt="gallery-photo"
//           />
//         </div> */}
//         <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center"
//             src={image7}
//             alt="gallery-photo"
//           />
//         </div>
//         <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center "
//             src={image4}
//             alt="gallery-photo"
//           />
//         </div>
//       </div>
//       <div className="grid gap-4">
//         <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center"
//             src={image6}
//             alt="gallery-photo"
//           />
//         </div>
//         {/* <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center "
//             src={image7}
//             alt="gallery-photo"
//           />
//         </div> */}
//         <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center"
//             src={image5}
//             alt="gallery-photo"
//           />
//         </div>
//       </div>
//       <div className="grid gap-4">
//         <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center"
//             src={image3}
//             alt="gallery-photo"
//           />
//         </div>
//         {/* <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center"
//             src={image9}
//             alt="gallery-photo"
//           />
//         </div> */}
//         {/* <div>
//           <img
//             className="h-auto max-w-full rounded-lg object-cover object-center"
//             src={image5}
//             alt="gallery-photo"
//           />
//         </div> */}
//       </div>
//     </div>
//     </section>
//   );
// }

// src/components/Footage.tsx

import image1 from '../assets/footage-1.jpg';
import image2 from '../assets/footage-2.jpg';
import image3 from '../assets/footage-3.jpg';
import image4 from '../assets/footage-4.jpg';
import image5 from '../assets/footage-5.jpg';
import image6 from '../assets/footage-6.jpg';
import image7 from '../assets/footage-7.jpg';
import image8 from '../assets/footage-9.jpg';

// Anda bisa membuat array data gambar agar lebih mudah di-loop
const galleryImages = [
  { id: 1, src: image1, alt: "Pengolahan Kelapa" },
  { id: 2, src: image2, alt: "Pembakaran Arang" },
  { id: 3, src: image3, alt: "Pendinginan Briket" },
  { id: 4, src: image4, alt: "Proses Pencetakan" },
  { id: 5, src: image5, alt: "Pengemasan Produk" },
  { id: 6, src: image6, alt: "Distribusi Lokal" },
  { id: 7, src: image7, alt: "Kualitas Premium" },
  { id: 8, src: image8, alt: "Kualitas Premium" },
];


export function Footage() {
  return (
    <section
      id="gallery"
      className="container pb-24 pt-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Briquettes Nusantara{" "}
        </span>
        Production Process
      </h2>

      {/* Kontainer untuk Masonry Layout menggunakan CSS Columns */}
      <div
        className="
          columns-2           /* Default: 2 kolom di mobile */
          md:columns-3        /* Di md: 3 kolom */
          lg:columns-4        /* Di lg: 4 kolom */
          gap-4               /* Jarak antar kolom dan antar gambar */
          space-y-4           /* Margin-top antar gambar di setiap kolom */
        "
      >
        {galleryImages.map((img) => (
          <div key={img.id} className="break-inside-avoid-column"> {/* Penting untuk memecah kolom */}
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center w-full" /* w-full untuk mengisi lebar kolom */
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}