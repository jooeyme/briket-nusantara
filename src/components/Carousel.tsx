// src/components/ClickableCarousel.tsx

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Shadcn UI Dialog components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';    // Pastikan path ini sesuai
import image1 from '../assets/gallery/white-1.jpg';
import image2 from '../assets/gallery/white-2.jpg';
import image3 from '../assets/gallery/white-3.jpg';
import image4 from '../assets/gallery/white-4.jpg';


// --- Definisi Tipe Data untuk Item Carousel ---
interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  longDescription?: string; // Properti opsional
  price?: string;
  details?: string;
  client?: string;
  destination?: string;
  // Tambahkan properti lain yang mungkin ada di data item Anda
}

// Data contoh untuk carousel
const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: image4,
    title: 'Detail Produk Arang 1',
    description: 'Ini adalah deskripsi lengkap untuk Produk Arang 1. Kami menggunakan bahan baku berkualitas tinggi dan proses produksi yang ramah lingkungan.',
    longDescription: 'Produk arang ini sangat cocok untuk penggunaan BBQ dan pemanas ruangan. Dibuat dari batok kelapa pilihan, menjamin pembakaran yang lama dan panas yang konsisten tanpa asap berlebihan. Berat per kemasan: 10kg.',
    price: '$15.00',
  },
  {
    id: 2,
    image: image1,
    title: 'Galeri Proses Produksi',
    description: 'Lihat bagaimana arang kami diproduksi dengan standar kualitas internasional.',
    longDescription: 'Foto-foto ini menunjukkan tahapan penting dalam proses produksi kami, mulai dari pengumpulan bahan baku, karbonisasi, hingga pengemasan akhir. Kami bangga dengan fasilitas modern kami.',
    details: 'Lokasi pabrik: Bogor, Indonesia. Kapasitas produksi: 50 ton/bulan.',
  },
  {
    id: 3,
    image: image2,
    title: 'Portofolio Proyek Ekspor',
    description: 'Kami telah mengekspor produk arang ke berbagai negara di Asia dan Eropa.',
    longDescription: 'Proyek ini menampilkan pengiriman besar ke klien di Timur Tengah. Ini adalah bukti komitmen kami terhadap kualitas dan layanan pengiriman yang efisien. Kami siap melayani permintaan dalam jumlah besar.',
    client: 'Client Internasional X',
    destination: 'Timur Tengah',
  },
  {
    id: 4,
    image: image1,
    title: 'Detail Produk Arang 1',
    description: 'Ini adalah deskripsi lengkap untuk Produk Arang 1. Kami menggunakan bahan baku berkualitas tinggi dan proses produksi yang ramah lingkungan.',
    longDescription: 'Produk arang ini sangat cocok untuk penggunaan BBQ dan pemanas ruangan. Dibuat dari batok kelapa pilihan, menjamin pembakaran yang lama dan panas yang konsisten tanpa asap berlebihan. Berat per kemasan: 10kg.',
    price: '$15.00',
  },
  {
    id: 5,
    image: image2,
    title: 'Galeri Proses Produksi',
    description: 'Lihat bagaimana arang kami diproduksi dengan standar kualitas internasional.',
    longDescription: 'Foto-foto ini menunjukkan tahapan penting dalam proses produksi kami, mulai dari pengumpulan bahan baku, karbonisasi, hingga pengemasan akhir. Kami bangga dengan fasilitas modern kami.',
    details: 'Lokasi pabrik: Bogor, Indonesia. Kapasitas produksi: 50 ton/bulan.',
  },
  {
    id: 6,
    image: image3,
    title: 'Portofolio Proyek Ekspor',
    description: 'Kami telah mengekspor produk arang ke berbagai negara di Asia dan Eropa.',
    longDescription: 'Proyek ini menampilkan pengiriman besar ke klien di Timur Tengah. Ini adalah bukti komitmen kami terhadap kualitas dan layanan pengiriman yang efisien. Kami siap melayani permintaan dalam jumlah besar.',
    client: 'Client Internasional X',
    destination: 'Timur Tengah',
  },
  // Tambahkan item lain sesuai kebutuhan Anda
];

export const ClickableCarousel: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  // selectedItem bisa berupa CarouselItem atau null
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);

  const handleSlideClick = (item: CarouselItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-12 px-4  ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Products & catalogue</h2>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper w-full max-w-6xl mx-auto"
      >
        {carouselItems.map((item: CarouselItem) => ( // Tipe `item` juga didefinisikan di sini
          <SwiperSlide key={item.id}>
            <div
              className="bg-primary dark:bg-primary/10 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              onClick={() => handleSlideClick(item)}
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="flex pt-8 items-center justify-center">
            <Link to="/about-company" className="max-w-md md:w-1/3"> {/* Class w-full/md:w-1/3 dipindahkan ke Link */}
                <Button className="w-full">Get More Product</Button> {/* Button kini mengambil 100% lebar Link */}
            </Link>
            </div>

      {/* Dialog untuk menampilkan detail informasi */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-xl lg:max-w-2xl dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {selectedItem?.title} {/* Gunakan optional chaining `?.` karena selectedItem bisa null */}
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              {selectedItem?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {selectedItem?.image && (
                <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="max-w-sm h-auto rounded-md object-cover mb-4" 
                />
            )}
            {selectedItem?.longDescription && (
              <p className="text-gray-700 dark:text-gray-200">{selectedItem.longDescription}</p>
            )}
            {selectedItem?.price && (
              <p className="text-lg font-semibold text-primary">Harga: {selectedItem.price}</p>
            )}
            {selectedItem?.details && (
              <p className="text-sm text-gray-600 dark:text-gray-300">Detail: {selectedItem.details}</p>
            )}
            {selectedItem?.client && (
              <p className="text-sm text-gray-600 dark:text-gray-300">Klien: {selectedItem.client}</p>
            )}
            {selectedItem?.destination && (
              <p className="text-sm text-gray-600 dark:text-gray-300">Tujuan: {selectedItem.destination}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};