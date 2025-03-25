import Image from "next/image";

const Ornamento = () => {
  return (
    <div
      className="flex justify-center items-center w-full mt-10 -mb-8
    "
    >
      <Image
        src="/ornamentoInit.png"
        alt="Ornamento del título"
        width={300}
        height={150}
        className="-mt-2 mb-2"
        priority
      />
    </div>
  );
};

export default Ornamento;
