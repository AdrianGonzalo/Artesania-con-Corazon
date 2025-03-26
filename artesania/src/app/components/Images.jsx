"use client";

import Image from "next/image";

const Images = ({ folder }) => {
  if (!folder) {
    return <p>Debe proporcionarse una carpeta de imágenes</p>;
  }

  const imagenes = [
    // ROCKS

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
  ].filter((src) => src.includes(folder));

  return (
    <div className="mt-24 grid grid-cols-2 gap-x-8 gap-y-33 justify-items-center m-14">
      {" "}
      {imagenes.map((src, index) => (
        <div
          key={index}
          className="relative w-55 h-48 flex items-center justify-center"
        >
          {" "}
          <Image
            src={src}
            alt={`Imagen ${index + 1}`}
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover "
            className="border-[#113313] border-6 rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
