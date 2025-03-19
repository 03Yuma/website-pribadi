import type { Metadata } from "next";
import Image from "next/image";
import Image1 from "/public/images/project1.png";
import Image2 from "/public/images/cover.jpg";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman Tentang Saya",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman tentang saya",
  },
};

export default function Home() {
  return (
    <div className="mt-6 px-8 max-w-5xl mx-auto">
      <header className="relative text-center">
        <div className="relative">
          <Image src={Image2} alt="Cover" className="w-full h-64 object-cover" />
        <h1 className="absolute text-gray-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl px-4 py-2">
          Tentang Saya
        </h1>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-10 mt-6 container mx-auto mb-4">
        <div className="flex flex-col items-center text-center max-w-xs">
          <Image
            src={Image1}
            alt="Gambar Project"
            className="w-40 h-40 object-cover rounded-lg shadow-md"
          />
          <p className="text-lg text-zinc-600 text-left items-start mt-4 mb-4">
            Merupakan sebuah website pribadi yang berisikan informasi data
            pribadi dan juga pencapaian projek yang pernah dilakukan.
          </p>
          <button className="text-left bg-blue-500 text-white px-4 py-2 rounded">
            Lihat
          </button>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <Image
            src={Image1}
            alt="Gambar Project"
            className="w-40 h-40 object-cover rounded-lg shadow-md"
          />
          <p className="text-lg text-zinc-600 text-left mt-4 mb-4">
            Merupakan sebuah website pribadi yang berisikan informasi data
            pribadi dan juga pencapaian projek yang pernah dilakukan.
          </p>
          <button className="text-left bg-blue-500 text-white px-4 py-2 rounded">
            Lihat
          </button>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <Image
            src={Image1}
            alt="Gambar Project"
            className="w-40 h-40 object-cover rounded-lg shadow-md"
          />
          <p className="text-lg text-zinc-600 text-left mt-4 mb-4">
            Merupakan sebuah website pribadi yang berisikan informasi data
            pribadi dan juga pencapaian projek yang pernah dilakukan.
          </p>
          <button className="text-left bg-blue-500 text-white px-4 py-2 rounded">
            Lihat
          </button>
        </div>
      </div>
    </div>
  );
}
