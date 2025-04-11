import Link from "next/link";

const Buttons = () => {
  return (
    <div className="mt-14 flex flex-col justify-center items-center text-2xl gap-10 w-full max-w-[500px] px-10 mx-auto">
      <div className="w-full border-3 rounded-xl border-[#113313] border-solid bg-[var(--foundButton)] h-[60px] flex justify-center items-center">
        <Link href="/rocks">Piedras</Link>
      </div>
      <div className="w-full border-3 rounded-xl border-[#113313] border-solid bg-[var(--foundButton)] h-[60px] flex justify-center items-center">
        <Link href="/woods">Pirografia</Link>
      </div>
      <div className="w-full border-3 rounded-xl border-[#113313] border-solid bg-[var(--foundButton)] h-[60px] flex justify-center items-center">
        <Link href="/flower-pots">Macetas</Link>
      </div>
      <div className="w-full border-3 rounded-xl border-[#113313] border-solid bg-[var(--foundButton)] h-[60px] flex justify-center items-center">
        <Link href="/others">Otros</Link>
      </div>
    </div>
  );
};

export default Buttons;
