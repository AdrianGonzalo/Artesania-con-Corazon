import Images from "@/app/components/Images";

const PotPage = () => {
  return (
    <>
      <div className="tems-center justify-center">
        <h1 className="text-center mt-10 text-4xl font-serif text-gray-800 uppercase tracking-wider">
          Mis macetas
        </h1>
        <Images folder="pots" />
      </div>
    </>
  );
};

export default PotPage;
