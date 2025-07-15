// import { LogoIcon } from "./Icons";

// export const Footer = () => {
//   return (
//     <footer id="footer">
//       <hr className="w-11/12 mx-auto" />

//       <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
//         <div className="col-span-full xl:col-span-2">
//           <a
//             rel="noreferrer noopener"
//             href="/"
//             className="font-bold text-xl flex"
//           >
//             <LogoIcon />
//             PT. Pradipa Muda Nusantara
//           </a>
//           <div>
//             <a
//               rel="noreferrer noopener"
//               className="opacity-60 hover:opacity-100"
//             >
//               We are located at Gg Cemani No 765B Pandeyan, Umbulharjo, Yogyakarta. We look forward to your visit!
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <h3 className="font-bold text-lg">Follow US</h3>
//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Instagram
//             </a>
//           </div>

//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Email
//             </a>
//           </div>

//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               WhatsApp
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <h3 className="font-bold text-lg">Platforms</h3>
//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Web
//             </a>
//           </div>

//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Mobile
//             </a>
//           </div>

//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Desktop
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <h3 className="font-bold text-lg">About</h3>
//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Features
//             </a>
//           </div>

//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Pricing
//             </a>
//           </div>

//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               FAQ
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <h3 className="font-bold text-lg">Community</h3>
//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Youtube
//             </a>
//           </div>

//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Discord
//             </a>
//           </div>

//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Twitch
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="container pb-14 text-center">
//         <h3>
//           &copy; 2024 Landing page made by{" "}
//           <a
//             rel="noreferrer noopener"
//             target="_blank"
//             href="https://www.linkedin.com/in/leopoldo-miranda/"
//             className="text-primary transition-all border-primary hover:border-b-2"
//           >
//             me
//           </a>
//         </h3>
//       </section>
//     </footer>
//   );
// };


import { LogoIconFooter } from "./Icons";
// Import ikon Lucide React yang dibutuhkan
import { Instagram, Mail, Linkedin, MessageSquareText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-12">
      <hr className="w-11/12 mx-auto border-gray-700 mb-8" />

      {/* Gunakan flex flex-col items-center untuk menengahkan secara keseluruhan */}
      <section className="container grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8 text-center justify-items-center"> {/* Tambah text-center dan justify-items-center */}
        {/* Kolom Kiri: Logo & Alamat - Sekarang akan rata tengah */}
        <div className="flex flex-col items-center"> {/* Cukup items-center untuk selalu rata tengah */}
          <LogoIconFooter />
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center mb-4"
          >
            PT. Pradipa Muda Nusantara
          </a>
          
          
        </div>

        <div className="flex flex-col items-center justify-center"> {/* Cukup items-center untuk selalu rata tengah */}
          <a
            rel="noreferrer noopener"
            className="font-semibold text-lg flex items-center mb-4"
          >
            Office Address
          </a>
          <p className="opacity-80 leading-relaxed max-w-sm">
            We are located at Gg Cemani No 765B Pandeyan, Umbulharjo, Yogyakarta.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center"> {/* Cukup items-center untuk selalu rata tengah */}
          <a
            rel="noreferrer noopener"
            className="font-semibold text-lg flex items-center mb-4"
          >
            Production Site
          </a>
          <p className="opacity-80 leading-relaxed max-w-sm">
            Jl. Raya Klepu, Krajan, Klepu, Pringapus, Semarang Regency, Central Java.
          </p>
        </div>

        {/* Kolom Kanan: Temukan kami di sosial media dengan Ikon - Sekarang akan rata tengah */}
        <div className="flex flex-col items-center justify-center"> {/* Cukup items-center untuk selalu rata tengah */}
          <h3 className="font-semibold text-lg mb-4">Find us on social media</h3>
          <div className="flex space-x-6">
            {/* Instagram */}
            <a
              rel="noreferrer noopener"
              href="https://instagram.com/pradipamuda.id"
              target="_blank"
              className="opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8" />
            </a>

            {/* YouTube */}
            <a
              rel="noreferrer noopener"
              href="mailto:pradipamudanusantara@gmail.com"
              target="_blank"
              className="opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Email"
            >
              <Mail className="w-8 h-8" />
            </a>

            {/* Facebook */}
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/salman-rofiul-yumna-a9152a237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B74d0yUCDRYqMURKkZFguug%3D%3D"
              target="_blank"
              className="opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Facebook"
            >
              <Linkedin className="w-8 h-8" />
            </a>

            {/* Twitter/X */}
            <a
              rel="noreferrer noopener"
              href="https://wa.me/+6281548468353"
              target="_blank"
              className="opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Twitter/X"
            >
              <MessageSquareText className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Bagian Copyright (sudah rata tengah) */}
      <section className="container pb-4 pt-8 text-center text-gray-400">
        <h3>
          © {new Date().getFullYear()} PT. Pradipa Muda Nusantara. All rights reserved.
        </h3>
      </section>
    </footer>
  );
};