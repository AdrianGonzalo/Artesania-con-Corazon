import Link from "next/link";

const Title = ({ sofiaClass }) => {
  return (
    <Link href="/" passHref>
      <h1 className={`text-center mt-13 text-5xl ${sofiaClass}`}>
        ARTESANÍA <br /> <span className="block mt-5 text-3xl"> CON 🤎</span>
      </h1>
    </Link>
  );
};

export default Title;
