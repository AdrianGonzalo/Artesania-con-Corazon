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
    //Rocas
    `/rocks/r1.jpg`,
    `/rocks/r2.jpg`,
    `/rocks/r3.jpg`,
    `/rocks/r4.jpg`,
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
    `/rocks/r29.jpg`,
    `/rocks/r31.jpg`,
    `/rocks/r32.jpg`,
    `/rocks/r33.jpg`,
    `/rocks/r34.jpg`,
    `/rocks/r35.jpg`,
    `/rocks/r36.jpg`,
    `/rocks/r38.jpg`,
    `/rocks/r40.jpg`,
    `/rocks/r43.jpg`,
    `/rocks/r44.jpg`,
    `/rocks/r45.jpg`,
    `/rocks/r46.jpg`,
    `/rocks/r47.jpg`,
    `/rocks/r48.jpg`,
    `/rocks/r49.jpg`,
    `/rocks/r50.jpg`,
    `/rocks/r51.jpg`,
    `/rocks/r52.jpg`,
    `/rocks/r53.jpg`,
    `/rocks/r54.jpg`,
    `/rocks/r55.jpg`,
    `/rocks/r56.jpg`,
    `/rocks/r57.jpg`,
    `/rocks/r58.jpg`,
    `/rocks/r59.jpg`,
    `/rocks/r60.jpg`,
    `/rocks/r61.jpg`,
    `/rocks/r62.jpg`,
    `/rocks/r63.jpg`,
    `/rocks/r67.jpg`,
    `/rocks/r68.jpg`,
    `/rocks/r69.jpg`,
    `/rocks/r70.jpg`,
    `/rocks/r71.jpg`,
    `/rocks/r72.jpg`,
    `/rocks/r73.jpg`,
    `/rocks/r74.jpg`,
    `/rocks/r75.jpg`,
    `/rocks/r76.jpg`,

    //Pirograbados

    `/woods/w1.jpg`,
    `/woods/w7.jpg`,
    `/woods/w8.jpg`,
    `/woods/w9.jpg`,
    `/woods/w10.jpg`,
    `/woods/w11.jpg`,
    `/woods/w12.jpg`,
    `/woods/w13.jpg`,
    `/woods/w14.jpg`,
    `/woods/w17.jpg`,
    `/woods/w18.jpg`,
    `/woods/w2.jpg`,
    `/woods/w3.jpg`,
    `/woods/w4.jpg`,
    `/woods/w5.jpg`,
    `/woods/w6.jpg`,

    //Macetas

    `/pots/p1.jpg`,
  ].filter((src) => src.includes(folder));

  return (
    <>
      <div className="mt-16 grid grid-cols-2 gap-x-20 gap-y-4 justify-items-center m-14">
        {imagenes.map((src, index) => (
          <div
            key={index}
            className="relative w-37 h-auto flex items-center justify-center cursor-pointer"
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
                width={300}
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
      <p className="text-center text-lg mt-8 font-medium text-gray-700">
        Total de imágenes:{" "}
        <span className="text-red-500">{imagenes.length} </span> y creciendo :)
      </p>
    </>
  );
};

export default Images;
