import { Rochester, Sofia } from "next/font/google";
import "./globals.css";

import Logo from "./components/Logo";

import Ornamento from "./components/OrnamentoInit";
import Title from "./components/Title";

const rochester = Rochester({
  weight: "400",
  subsets: ["latin"],
});

const sofia = Sofia({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Artesania con Corazon",
  description: "Web Artesanal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rochester.className} antialiased`}>
        <Logo />
        <Ornamento />
        <Title sofiaClass={sofia.className} />
        {children}
      </body>
    </html>
  );
}
