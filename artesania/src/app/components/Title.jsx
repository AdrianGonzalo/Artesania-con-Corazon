import Link from "next/link";

const Title = ({ sofiaClass }) => {
  return (
    <Link href="/" passHref>
      <h1 className={`text-center mt-13 text-5xl ${sofiaClass}`}>
        Artesanias con ❤️
      </h1>
    </Link>
  );
};

export default Title;
