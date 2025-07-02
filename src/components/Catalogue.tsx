import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import CardImage from '../assets/brown-2.jpg';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'; 

import React, { useState } from 'react';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];

  longDescription?: string; // Deskripsi lebih panjang untuk popup
  image?: string;
}

const pricingList: PricingProps[] = [
  {
    title: "Briket Kelapa",
    popular: 0,
    price: 0,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Details Product",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Upto 4 pages",
      "Community support",
      "lorem ipsum dolor",
    ],
    longDescription: "Briket kelapa super kami dibuat dari batok kelapa pilihan dengan proses karbonisasi sempurna, menghasilkan briket dengan kalori tinggi dan residu abu sangat rendah. Sangat direkomendasikan untuk restoran BBQ dan shisha lounge yang mencari kualitas terbaik.",
    image: CardImage, // Menggunakan gambar yang sama untuk contoh
  },
  {
    title: "Briket Kelapa Premium",
    popular: 1,
    price: 5,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Details Product",
    benefitList: [
      "4 Team member",
      "4 GB Storage",
      "Upto 6 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Briket Kelapa",
    popular: 0,
    price: 40,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Details Product",
    benefitList: [
      "10 Team member",
      "8 GB Storage",
      "Upto 10 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Briket Kelapa",
    popular: 0,
    price: 0,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Details Product",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Upto 4 pages",
      "Community support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Briket Kelapa Premium",
    popular: 1,
    price: 5,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Details Product",
    benefitList: [
      "4 Team member",
      "4 GB Storage",
      "Upto 6 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Briket Kelapa",
    popular: 0,
    price: 40,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Details Product",
    benefitList: [
      "10 Team member",
      "8 GB Storage",
      "Upto 10 pages",
      "Priority support",
      "lorem ipsum dolor",
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
        Temukan berbagai jenis produk arang berkualitas tinggi kami.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
                <img
                src={CardImage}// Adjust path to your image
                alt="Card feature image" // Always provide descriptive alt text
                className="w-full h-auto mb-4 rounded-t-md" // Example classes for styling
              />
              <CardTitle className="flex item-center justify-between">
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
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /Ton</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full"
              onClick={() => handleDetailsClick(pricing)}
              >
                {pricing.buttonText}
              </Button>
            </CardContent>

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
        <DialogContent className="sm:max-w-[425px] md:max-w-xl lg:max-w-2xl dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {selectedProduct?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              {selectedProduct?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {selectedProduct?.image && (
                <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="max-w-xs h-auto rounded-md object-cover mb-4"
                />
            )}
            {selectedProduct?.longDescription && (
              <p className="text-gray-700 dark:text-gray-200">{selectedProduct.longDescription}</p>
            )}

            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mt-4 mb-2">Manfaat & Fitur Utama:</h4>
            <div className="space-y-2">
              {selectedProduct?.benefitList.map((benefit: string, index: number) => (
                <span key={index} className="flex items-center text-gray-700 dark:text-gray-200">
                  <Check className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                  {benefit}
                </span>
              ))}
            </div>

            {selectedProduct?.price !== undefined && ( // Tampilkan harga jika ada
              <p className="text-lg font-bold text-primary mt-4">Harga: ${selectedProduct.price} / Ton</p>
            )}

            {/* Anda bisa menambahkan lebih banyak properti detail di sini sesuai kebutuhan */}
          </div>
          {/* Opsi: Footer dialog dengan tombol tutup */}
          {/* <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Tutup</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </section>
  );
};
