import Link from "next/link";

const Buttons = () => {
  return (
    <div className="mt-15 flex flex-col justify-center items-center text-2xl gap-10">
      <div className="border-3 rounded-xl border-[#113313] border-solid bg-emerald-300 w-[150px] h-[65px] flex justify-center items-center">
        <Link href="/rocks">Piedras</Link>
      </div>
      <div className="border-3 rounded-xl border-[#113313] border-solid bg-emerald-300 w-[150px] h-[65px] flex justify-center items-center">
        <Link href="/piedras">Madera</Link>
      </div>
      <div className="border-3 rounded-xl border-[#113313] border-solid bg-emerald-300 w-[150px] h-[65px] flex justify-center items-center">
        <Link href="/dibujos">Dibujos</Link>
      </div>
      <div className="border-3 rounded-xl border-[#113313] border-solid bg-emerald-300 w-[150px] h-[65px] flex justify-center items-center">
        <Link href="otros">Pirografia</Link>
      </div>
      <div className="border-3 rounded-xl border-[#113313] border-solid bg-emerald-300 w-[150px] h-[65px] flex justify-center items-center">
        <Link href="otros">Otros</Link>
      </div>
    </div>
  );
};

export default Buttons;
