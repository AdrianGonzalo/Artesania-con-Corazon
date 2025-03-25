import Link from "next/link";

const Buttons = () => {
  return (
    <div className="mt-14 flex flex-col justify-center items-center text-2xl gap-10 w-full max-w-[500px] px-10 mx-auto">
      <div className="w-full border-3 rounded-xl border-[#113313] border-solid bg-[var(--foundButton)] h-[60px] flex justify-center items-center">
        <Link href="/rocks">Piedras</Link>
      </div>
      <div className="w-full border-3 rounded-xl border-[#113313] border-solid bg-[var(--foundButton)] h-[60px] flex justify-center items-center">
        <Link href="/piedras">Madera</Link>
      </div>
      <div className="w-full border-3 rounded-xl border-[#113313] border-solid bg-[var(--foundButton)] h-[60px] flex justify-center items-center">
        <Link href="/dibujos">Dibujos</Link>
      </div>
      <div className="w-full border-3 rounded-xl border-[#113313] border-solid bg-[var(--foundButton)] h-[60px] flex justify-center items-center">
        <Link href="/otros">Pirografia</Link>
      </div>
      <div className="w-full border-3 rounded-xl border-[#113313] border-solid bg-[var(--foundButton)] h-[60px] flex justify-center items-center">
        <Link href="/otros">Otros</Link>
      </div>
    </div>
  );
};

export default Buttons;
