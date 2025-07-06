// src/components/ProductFeaturesSection.tsx

import React from 'react';

// Impor ikon dari Lucide React
import {
  Leaf,            // Untuk ECO FRIENDLY
  Flame,           // Untuk GLOWING HEAT
  Gauge,           // Untuk LONG LASTING (meter)
               // Untuk LESS WATER CONTENT (lingkaran coret)
  DropletOff,          // Alternatif untuk ASH LESS (kurang sampah)
  
  CloudOff     // Alternatif untuk ASH LESS (tanpa)
  // Anda bisa menambahkan ikon lain yang dirasa relevan
} from 'lucide-react';

// --- Komponen Ikon Kombinasi yang Direvisi ---

// Untuk LONG LASTING (Api dengan Gauge/Pengukur)
const LongLastingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative ${className}`}>
    {/* Menggunakan Gauge sebagai indikator utama durasi */}
    <Gauge className="absolute inset-0 w-full h-full text-orange-400" />
    {/* Jika ingin sedikit sentuhan api, bisa ditambahkan lebih kecil atau di samping */}
    {/* <Flame className="absolute bottom-0 right-0 w-1/3 h-1/3 text-orange-400" /> */}
  </div>
);

// Untuk ASH LESS (Api dengan simbol 'Tanpa')
const AshLessIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative ${className}`}>
    <CloudOff className="absolute inset-0 w-full h-full text-orange-400" /> {/* Warna api */}
    
  </div>
);

// Untuk LESS WATER CONTENT (Tetesan air dengan lingkaran coret 'Ban')
const LessWaterContentIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative ${className}`}>
    <DropletOff className="absolute inset-0 w-full h-full text-orange-400" /> {/* Warna tetesan air */}
    
  </div>
);


// --- Definisi Tipe Data untuk Fitur ---
interface ProductFeature {
  id: number;
  label: string;
  iconComponent: React.ElementType | React.FC<{ className?: string }>;
}

// Data Fitur Produk yang Direvisi
const productFeatures: ProductFeature[] = [
  {
    id: 1,
    label: "ECO FRIENDLY",
    iconComponent: Leaf,
  },
  {
    id: 2,
    label: "GLOWING HEAT",
    iconComponent: Flame,
  },
  {
    id: 3,
    label: "LONG LASTING",
    iconComponent: LongLastingIcon, // Menggunakan Gauge di dalam lingkaran
  },
  {
    id: 4,
    label: "ASH LESS",
    iconComponent: AshLessIcon, // Menggunakan Flame dengan Ban
  },
  {
    id: 5,
    label: "LESS WATER CONTENT",
    iconComponent: LessWaterContentIcon, // Menggunakan Droplet dengan Ban
  },
];

export const ProductFeaturesSection: React.FC = () => {
  // Membagi data menjadi dua kelompok
  const topThreeFeatures = productFeatures.slice(0, 3);
  const bottomTwoFeatures = productFeatures.slice(3, 5);

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Opsional: Judul bagian jika diperlukan */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Product Advantages
        </h2>

        {/* --- Baris Atas: 3 Ikon --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-8 gap-x-4 justify-items-center mb-16"> {/* Tambah mb-8 untuk jarak */}
          {topThreeFeatures.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-orange-400 flex items-center justify-center mb-4 p-2">
                <feature.iconComponent className="w-full h-full text-orange-400" />
              </div>
              <p className="text-sm md:text-base font-semibold tracking-wide text-orange-400">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* --- Baris Bawah: 2 Ikon (ditengahkan di layar besar) --- */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-4 justify-items-center lg:w-2/3 lg:mx-auto"> {/* Menggunakan lg:w-2/3 dan lg:mx-auto untuk menengahkan */}
          {bottomTwoFeatures.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-orange-400 flex items-center justify-center mb-4 p-2">
                <feature.iconComponent className="w-full h-full text-orange-400" />
              </div>
              <p className="text-sm md:text-base font-semibold tracking-wide text-orange-400">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};