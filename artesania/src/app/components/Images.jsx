"use client";

import { useState } from "react";
import Image from "next/image";
import ShareButton from "./ShareButton";

const Images = ({ folder }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!folder) {
    return <p>Debe proporcionarse una carpeta de imágenes</p>;
  }

  const imagenes = [
    `/rocks/r1.jpg`,
    `/rocks/r2.jpg`,
    `/rocks/r3.jpg`,
    `/rocks/r4.jpg`,
    `/rocks/r5.jpg`,
    `/rocks/r6.jpg`,
    `/rocks/r7.jpg`,
    `/rocks/r8.jpg`,
    `/rocks/r9.jpg`,
    `/rocks/r10.jpg`,
    `/rocks/r11.jpg`,
    `/rocks/r12.jpg`,
    `/rocks/r13.jpg`,
    `/rocks/r14.jpg`,
    `/rocks/r15.jpg`,
    `/rocks/r16.jpg`,
    `/rocks/r17.jpg`,
    `/rocks/r18.jpg`,
    `/rocks/r19.jpg`,
    `/rocks/r20.jpg`,
    `/rocks/r21.jpg`,
    `/rocks/r22.jpg`,
    `/rocks/r23.jpg`,
    `/rocks/r24.jpg`,
    `/rocks/r25.jpg`,
    `/rocks/r26.jpg`,
    `/rocks/r27.jpg`,
    `/rocks/r28.jpg`,
    `/rocks/r29.jpg`,
    `/rocks/r30.jpg`,
    `/rocks/r31.jpg`,
    `/rocks/r32.jpg`,
    `/rocks/r33.jpg`,
    `/rocks/r34.jpg`,
    `/rocks/r35.jpg`,
    `/rocks/r36.jpg`,
    `/rocks/r37.jpg`,
    `/rocks/r38.jpg`,
    `/rocks/r39.jpg`,
    `/rocks/r40.jpg`,
    `/rocks/r41.jpg`,
    `/rocks/r41.jpg`,
    `/rocks/r43.jpg`,
    `/rocks/r44.jpg`,
    `/rocks/r45.jpg`,
    `/rocks/r46.jpg`,
    `/rocks/r47.jpg`,
  ].filter((src) => src.includes(folder));

  return (
    <div className="mt-16 grid grid-cols-2 gap-x-20 gap-y-15 justify-items-center m-14">
      {imagenes.map((src, index) => (
        <div
          key={index}
          className="relative w-42 h-48 flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedImage(src)}
        >
          <Image
            src={src}
            alt={`Imagen ${index + 1}`}
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
            className="border-[#113313] border-4 rounded-2xl"
          />
        </div>
      ))}

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.9)] z-50">
          <div className="relative flex flex-col items-center">
            <img
              src="/Logo Mare3.png"
              alt="Logo del artista"
              className="absolute top-10 left-3 w-[55px]"
            />

            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              width={350}
              height={350}
              className="rounded-lg border-[12px] shadow-lg"
              style={{
                borderStyle: "ridge",
                borderColor: "#c8a453",
              }}
            />

            <ShareButton
              message={`¡Mira esta galería!`}
              url={`https://artesaniadecorazon.netlify.app/`}
              className="bg-blue-600 hover:bg-blue-700 mt-6"
            />
            <button
              className="mt-3 w-full max-w-[350px] bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-semibold"
              onClick={() => setSelectedImage(null)}
            >
              Volver a las imagenes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
