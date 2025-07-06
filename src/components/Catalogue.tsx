import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import CardImage from '../assets/brown-2.JPG';
import hexa from '../assets/hexa.jpg';
import finger from '../assets/finger.jpg';
import kubah from '../assets/kubah.jpg';

import { MessageSquareText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'; 

import { useState } from 'react';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}
interface SpecificationItem {
  label: string;
  value: string;
}


interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;

  longDescription?: string; // Deskripsi lebih panjang untuk popup
  image?: string;
   specifications?: SpecificationItem[];
}

const pricingList: PricingProps[] = [
  {
    title: "Cube",
    popular: 0,
    price: "Contact",
    description:
      "Super coconut briquettes are made from selected coconut shells.",
    buttonText: "Details Product",
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
    title: "Hexagonal",
    popular: 0,
    price: "Contact",
    description:
      "Super coconut briquettes are made from selected coconut shells.",
    buttonText: "Details Product",
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
    title: "Finger",
    popular: 0,
    price: "Contact",
    description:
      "Super coconut briquettes are made from selected coconut shells.",
    buttonText: "Details Product",
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
    title: "Kubah",
    popular: 0,
    price: "Contact",
    description:
      "Super coconut briquettes are made from selected coconut shells.",
    buttonText: "Details Product",
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
];

export const Catalogue = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<PricingProps | null>(null);

  const handleDetailsClick = (product: PricingProps) => {
    setSelectedProduct(product);
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
    <section
      id="catalogue"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our
        <span className="bg-gradient-to-b from-primary/20 to-primary text-transparent bg-clip-text">
          {" "}
          Product{" "}
        </span>
        Catalog
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Discover our wide range of high quality charcoal products.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl text-center shadow-black/10 dark:shadow-white/10"
                : "text-center"
            }
            onClick={() => handleDetailsClick(pricing)}
          >
            <CardHeader>
                <img
                src={pricing.image}// Adjust path to your image
                alt="Card feature image" // Always provide descriptive alt text
                className="w-full h-64 object-cover rounded-t-lg mb-4" // Example classes for styling
              />
              <CardTitle className="text-xl font-bold text-white mb-2">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
            </CardHeader>

            {/* <CardContent>
              <Button className="w-full"
              onClick={() => handleDetailsClick(pricing)}
              >
                {pricing.buttonText}
              </Button>
            </CardContent> */}

            {/* <hr className="w-4/5 m-auto mb-4" /> */}

            {/* <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter> */}
          </Card>
        ))}
      </div>

      {/* Dialog untuk Detail Produk */}
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
              {selectedProduct?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              {selectedProduct?.description}
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
            {selectedProduct?.specifications && (
              <>
                <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-100 mt-4 mb-2">Product Specification:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  {selectedProduct.specifications.map((spec, index) => (
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
