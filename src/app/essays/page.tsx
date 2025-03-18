import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Esai",
  description: "Halaman Esai",
  openGraph: {
    title: "Esai",
    description: "Halaman Esai",
  },
};

const articles = [
  { title: "Terbitnya Matahari", date: "11 Februari 2024" },
  { title: "Perubahan Dimulai Dari Hal Kecil", date: "24 Januari 2022" },
  { title: "Teknologi dan Kehidupan", date: "5 Maret 2023" },
  { title: "Menulis Sebagai Kebiasaan", date: "12 April 2021" },
];

export default function Essays() {
  return (
    <div className="mt-5 px-8">
      <header className="mb-4">
        <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
      </header>
      <div className="grid grid-cols-2 text-xl bg-blue-300 font-bold p-2 border-b">
        <div>Judul</div>
        <div>Tanggal Terbit</div>
      </div>
      {articles.map((article, index) => (
        <div key={index} className="grid grid-cols-2 p-2 border-b">
          <div>{article.title}</div>
          <div>{article.date}</div>
        </div>
      ))}
    </div>
  );
}
