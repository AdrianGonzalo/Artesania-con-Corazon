import { FaPinterest, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      X
      <div className="flex flex-col items-center justify-center text-center p-6">
        {/* Imagen de ornamento */}
        <Image
          src="/ornamentoFinal.png"
          alt="ornamento final"
          width={150}
          height={150}
          className="mb-6 mt-4"
        />

        <p>
          Manualidades dibujadas y pintadas por{" "}
          <span className="text-red-600 hover:underline">Alba</span>
        </p>
        {/* Iconos de redes sociales */}
        <div className="flex space-x-6 my-4">
          <a
            href="https://es.pinterest.com/agonzalojulibert/_created"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest size={30} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>

        <p>
          Web diseñada por{" "}
          <a
            href="https://portfolio-adrian-martin-gonzalo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            AdrianDev
          </a>
        </p>
      </div>
      <div className="bg-amber-900 text mt-4 p-4 text-center">
        <p className="w-full text-(--beige)">
          © 2025 Artesania Con Corazon. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
