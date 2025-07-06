// src/components/Features.tsx (atau Missions.tsx)

import React from 'react'; // Import useState untuk dialog
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



// Import Ikon Lucide React yang relevan
import {
  Award,       // Untuk Quality
  Recycle,     // Untuk Sustainability
  Lightbulb,   // Untuk Innovation (atau Zap, Bolt)
  Scale,       // Untuk Integrity (keseimbangan/keadilan)
  Globe,       // Untuk Global Reach
  // Icons lain yang mungkin Anda butuhkan, misal: CheckCircle, Zap, TrendingUp, Network, Truck
} from 'lucide-react';

// Import gambar-gambar untuk background card
// Pastikan path ini sesuai dengan struktur folder Anda
// Saya akan menggunakan placeholder image atau gambar yang sudah ada sebagai contoh
import missionBg1 from '../assets/cover.png'; // Gambar untuk Quality

// --- Definisi Tipe Data untuk Misi ---
interface MissionProps {
  id: number; // Tambahkan ID unik untuk key
  title: string;
  shortDescription: string; // Deskripsi singkat di card
 // Deskripsi lengkap di popup
  icon: React.ElementType;  // Tipe untuk komponen ikon Lucide
  bgColorClass: string;     // Kelas warna background untuk icon/card (opsional)
  backgroundImage: string; // Path ke gambar background card
}

// Data Misi
const missions: MissionProps[] = [
  {
    id: 1,
    title: "Quality",
    shortDescription: "We are committed to producing premium coconut shell briquettes that meet the highest international standards in terms of performance, durability, and cleanliness.",
    icon: Award, // Ikon untuk Quality
    bgColorClass: "text-orange-500", // Contoh warna ikon
    backgroundImage: missionBg1,
  },
  {
    id: 2,
    title: "Sustainability",
    shortDescription: "By utilizing coconut shell waste, we turn natural byproducts into valuable clean energy—minimizing environmental impact and promoting responsible production practices.",
    icon: Recycle, // Ikon untuk Sustainability
    bgColorClass: "text-green-500",
    backgroundImage: missionBg1,
  },
  {
    id: 3,
    title: "Innovation",
    shortDescription: "We continuously seek new ways to improve our products and processes, blending Indonesia’s natural richness with modern technology and global market insight.",
    icon: Lightbulb, // Ikon untuk Innovation
    bgColorClass: "text-yellow-500",
    backgroundImage: missionBg1,
  },
  {
    id: 4,
    title: "Integrity",
    shortDescription: "We uphold transparency, honesty, and ethical business practices in all of our operations—ensuring trust and accountability in every partnership.",
    icon: Scale, // Ikon untuk Integrity
    bgColorClass: "text-blue-500",
    backgroundImage: missionBg1,
  },
  {
    id: 5,
    title: "Global Reach, Local Pride",
    shortDescription: "We proudly represent Indonesia on the global stage, connecting local natural resources with international demand through trusted distribution.",
    icon: Globe, // Ikon untuk Global Reach
    bgColorClass: "text-purple-500",
    backgroundImage: missionBg1,
  },
];

export const ProductAdv = () => { // Mengubah nama komponen dari "AboutCompany" agar sesuai jika ini terpisah
  

  const topThreeMissions = missions.slice(0, 3);
const bottomTwoMissions = missions.slice(3, 5);

 

  return (
    <section id="features" className="container space-y-8 py-24 sm:py-32"> {/* Tambahkan padding vertikal */}
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center mb-8">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/20 to-primary text-transparent bg-clip-text">
          {" "}
          Commitment{" "}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"> {/* Mengubah menjadi 5 kolom di xl: */}
        {topThreeMissions.map((mission: MissionProps) => (
          <Card
            key={mission.id} // Menggunakan ID untuk key
            className="group text-center relative flex flex-col justify-end p-6 overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
            style={{
              backgroundImage: `url(${mission.backgroundImage})`, // Gambar background kartu
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
           
          >
            {/* Overlay untuk teks agar terbaca */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>

            <CardHeader className="relative z-10 p-0 mb-4 flex flex-col items-center">
              {/* Ikon di dalam lingkaran */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${mission.bgColorClass} bg-white/20 backdrop-blur-sm`}>
                <mission.icon className="w-7 h-7 text-white" /> {/* Ikon sesuai data */}
              </div>
              <CardTitle className="text-xl font-bold text-white mb-2">
                {mission.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 p-0 text-white">
              <p className="text-sm line-clamp-3"> {/* Batasi deskripsi di card */}
                {mission.shortDescription}
              </p>
            </CardContent>
            {/* Anda bisa menambahkan footer di sini jika perlu, misal tombol "Baca Lebih Lanjut" */}
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:w-2/3 lg:mx-auto"> {/* Menggunakan lg:w-2/3 dan lg:mx-auto untuk menengahkan */}
        {bottomTwoMissions.map((mission: MissionProps) => (
          <Card
            key={mission.id}
            className="group text-center relative flex flex-col justify-end p-6 overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 min-h-[300px]" // Tambah min-h
            style={{
              backgroundImage: `url(${mission.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
            <CardHeader className="relative z-10 p-0 mb-4 flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${mission.bgColorClass} bg-white/20 backdrop-blur-sm`}>
                <mission.icon className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-white mb-2">
                {mission.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 p-0 text-white">
              <p className="text-sm line-clamp-3">
                {mission.shortDescription}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      
    </section>
  );
};