// src/images.d.ts (atau src/custom.d.ts)

// Deklarasi untuk file gambar (JPG, JPEG, PNG, GIF, SVG, WebP)
declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

// Jika Anda menggunakan .JPG (huruf besar) pastikan untuk menambahkannya juga:
declare module '*.JPG' {
  const content: string;
  export default content;
}

declare module '*.JPEG' {
  const content: string;
  export default content;
}