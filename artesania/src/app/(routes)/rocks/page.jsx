import Images from "@/app/components/Images";
import Footer from "@/app/components/Footer";

const RocksPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-center mt-10 text-4xl font-serif text-gray-800 uppercase tracking-wider">
          Mis Piedras
        </h1>
        <Images folder="rocks" />
      </div>
      <Footer />
    </>
  );
};

export default RocksPage;
