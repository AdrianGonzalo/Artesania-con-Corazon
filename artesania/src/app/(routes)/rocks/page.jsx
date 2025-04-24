"use client";

import Images from "@/app/components/Images";

import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("@/app/components/ScrollToTop"), {
  ssr: false,
});

const RocksPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-center mt-10 text-4xl font-serif text-gray-800 uppercase tracking-wider">
          Mis Piedras
        </h1>
        <Images folder="rocks" />
        <ScrollToTop />
      </div>
    </>
  );
};

export default RocksPage;
