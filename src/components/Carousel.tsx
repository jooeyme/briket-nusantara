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
import { MessageSquareText } from 'lucide-react';
// Import Shadcn UI Dialog components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';    // Pastikan path ini sesuai

import CardImage from '../assets/brown-2.JPG';
import hexa from '../assets/hexa.jpg';
import finger from '../assets/finger.jpg';
import kubah from '../assets/kubah.jpg';


interface SpecificationItem {
  label: string;
  value: string;
}

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
  specifications?: SpecificationItem[];
  // Tambahkan properti lain yang mungkin ada di data item Anda
}

// Data contoh untuk carousel
const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "Cube",
    price: "Contact",
    description:
      "Super coconut briquettes are made from selected coconut shells.",
    longDescription: "Our super coconut briquettes are made from selected coconut shells with a perfect carbonization process, producing briquettes with high calories and very low ash residue. Highly recommended for BBQ restaurants and shisha lounges looking for the best quality.",
    image: CardImage, // Menggunakan gambar yang sama untuk contoh
     specifications: [ // <--- Data Spesifikasi Produk
      { label: "Shape", value: "Cube" },
      { label: "Size", value: "2.5 x 2.5 x 2.5 cm / As Request" },
      { label: "Ash Content", value: "2.37%" },
      { label: "Ash Color", value: "White" },
      { label: "Moisture", value: "4.70%" },
      { label: "Burning Time", value: "90 to 120 Minutes" },
      { label: "Ingredients", value: "Pure Charcoal" },
      { label: "Fixed Carbon", value: "80.73%" },
      { label: "Packaging", value: "Inner Box / As Request" },
      { label: "Volatile Matter", value: "16.90%" },
    ],
  },
  {
    id: 2,
    title: "Hexagonal",
    price: "Contact",
    description:
      "Super coconut briquettes are made from selected coconut shells.",
    longDescription: "Our super coconut briquettes are made from selected coconut shells with a perfect carbonization process, producing briquettes with high calories and very low ash residue. Highly recommended for BBQ restaurants and shisha lounges looking for the best quality.",
    image: hexa, // Menggunakan gambar yang sama untuk contoh
     specifications: [ // <--- Data Spesifikasi Produk
      { label: "Shape", value: "Hexagonal" },
      { label: "Size", value: "20 x 40 mm, 20 x 50 mm" },
      { label: "Ash Content", value: "2.37%" },
      { label: "Ash Color", value: "White" },
      { label: "Moisture", value: "4.70%" },
      { label: "Burning Time", value: "90 to 120 Minutes" },
      { label: "Ingredients", value: "Pure Charcoal" },
      { label: "Fixed Carbon", value: "80.73%" },
      { label: "Packaging", value: "Inner Box / As Request" },
      { label: "Volatile Matter", value: "16.90%" },
    ],
  },
  {
    id: 3,
    title: "Finger",
    price: "Contact",
    description:
      "Super coconut briquettes are made from selected coconut shells.",
    longDescription: "Our super coconut briquettes are made from selected coconut shells with a perfect carbonization process, producing briquettes with high calories and very low ash residue. Highly recommended for BBQ restaurants and shisha lounges looking for the best quality.",
    image: finger, // Menggunakan gambar yang sama untuk contoh
     specifications: [ // <--- Data Spesifikasi Produk
      { label: "Shape", value: "Finger" },
      { label: "Size", value: "20 x 40 mm, 20 x 50 mm" },
      { label: "Ash Content", value: "2.37%" },
      { label: "Ash Color", value: "White" },
      { label: "Moisture", value: "4.70%" },
      { label: "Burning Time", value: "90 to 120 Minutes" },
      { label: "Ingredients", value: "Pure Charcoal" },
      { label: "Fixed Carbon", value: "80.73%" },
      { label: "Packaging", value: "Inner Box / As Request" },
      { label: "Volatile Matter", value: "16.90%" },
    ],
  },
  {
    id: 4,
    title: "Kubah",
    price: "Contact",
    description:
      "Super coconut briquettes are made from selected coconut shells.",
    longDescription: "Our super coconut briquettes are made from selected coconut shells with a perfect carbonization process, producing briquettes with high calories and very low ash residue. Highly recommended for BBQ restaurants and shisha lounges looking for the best quality.",
    image: kubah, // Menggunakan gambar yang sama untuk contoh
     specifications: [ // <--- Data Spesifikasi Produk
      { label: "Shape", value: "Kubah" },
      { label: "Size", value: "20 x 40 mm, 20 x 50 mm" },
      { label: "Ash Content", value: "2.37%" },
      { label: "Ash Color", value: "White" },
      { label: "Moisture", value: "4.70%" },
      { label: "Burning Time", value: "90 to 120 Minutes" },
      { label: "Ingredients", value: "Pure Charcoal" },
      { label: "Fixed Carbon", value: "80.73%" },
      { label: "Packaging", value: "Inner Box / As Request" },
      { label: "Volatile Matter", value: "16.90%" },
    ],
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

  const WHATSAPP_NUMBER = '6281548468353';

  const handleClick = () => {
    let message = `Halo, saya tertarik untuk memesan produk Anda.`;

    message += `%0A%0AMohon berikan informasi lebih lanjut atau bantu saya melakukan pemesanan. Terima kasih.`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Buat URL WhatsApp API
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Buka link WhatsApp di tab/jendela baru
    window.open(whatsappUrl, '_blank');
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
        className="mySwiper text-center w-full max-w-6xl mx-auto"
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
                {/* <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{item.description}</p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="flex pt-8 items-center justify-center">
            <Link to="/catalogue" className="max-w-md md:w-1/3"> {/* Class w-full/md:w-1/3 dipindahkan ke Link */}
                <Button className="w-full">Get More Product</Button> {/* Button kini mengambil 100% lebar Link */}
            </Link>
            </div>

      {/* Dialog untuk menampilkan detail informasi */}
      {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent 
            className="
            max-w-[80vw]
            max-h-[60vh] 
            overflow-y-auto
            sm:max-w-[425px] 
            md:max-w-xl 
            lg:max-w-2xl 
            dark:bg-gray-900"
            >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {selectedItem?.title} 
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
                    className="w-full h-auto rounded-md object-cover mb-4" 
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
      </Dialog> */}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="
            max-w-[80vw]
            max-h-[60vh] 
            overflow-y-auto
            sm:max-w-[425px] 
            md:max-w-xl 
            lg:max-w-2xl 
            dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {selectedItem?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              {selectedItem?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* {selectedProduct?.image && (
                <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-auto rounded-md object-cover mb-4"
                />
            )}
            {selectedProduct?.longDescription && (
              <p className="text-gray-700 dark:text-gray-200">{selectedProduct.longDescription}</p>
            )} */}

            {/* <h4 className="font-semibold text-gray-800 dark:text-gray-100 mt-4 mb-2">Benefit:</h4>
            <div className="space-y-2">
              {selectedProduct?.benefitList.map((benefit: string, index: number) => (
                <span key={index} className="flex items-center text-gray-700 dark:text-gray-200">
                  <Check className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  {benefit}
                </span>
              ))}
            </div> */}

            {/* --- Bagian Spesifikasi Produk --- */}
            {selectedItem?.specifications && (
              <>
                <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-100 mt-4 mb-2">Product Specification:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  {selectedItem.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center">
                      <span className="font-medium w-32 md:w-40 flex-shrink-0">{spec.label}</span>
                      <span className="mr-2">:</span>
                      <span>{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* {selectedProduct?.price !== undefined && ( // Tampilkan harga jika ada
              <p className="text-lg font-bold text-primary mt-4">Harga: ${selectedProduct.price} / Ton</p>
            )} */}

            {/* Anda bisa menambahkan lebih banyak properti detail di sini sesuai kebutuhan */}
          </div>
          <Button
            onClick={handleClick}
            className="w-full"
          >
            <MessageSquareText className="w-5 h-5 mr-2" /> {/* Ikon WhatsApp */}
            Order Now
          </Button>
          {/* Opsi: Footer dialog dengan tombol tutup */}
          {/* <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Tutup</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </section>
  );
};