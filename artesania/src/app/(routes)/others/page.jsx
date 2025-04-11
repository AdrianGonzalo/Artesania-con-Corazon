import Images from "@/app/components/Images";

const OthersPage = () => {
  return (
    <>
      <div className=" items-center justify-center">
        <h1 className="text-center mt-10 text-3xl  font-serif text-gray-800 uppercase tracking-wider">
          Proximamente una seccion de una variedad de manualidades propias, sean
          pacientes :)
        </h1>
        <Images folder="others" />
      </div>
    </>
  );
};

export default OthersPage;
