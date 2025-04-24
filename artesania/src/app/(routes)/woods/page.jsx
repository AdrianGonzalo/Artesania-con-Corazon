"use client";

import Images from "@/app/components/Images";
import ScrollToTop from "@/app/components/scrollToTop";

const WoodPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-center mt-10 text-4xl font-serif text-gray-800 uppercase tracking-wider">
          Arte en pirograbado
        </h1>
        <Images folder="woods" />
      </div>
    </>
  );
};

export default WoodPage;
