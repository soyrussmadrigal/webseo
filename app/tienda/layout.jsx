import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

export const metadata = {
  title: "Recetas Saludables: 10 Platos Fáciles y Rápidos para | Web 2024",
  description:
    "Descubre 12 recetas saludables, fáciles y ddddd ssss para ddddssssssd en la cociffffffna. ¡Comienza tu viaje culinario hoydd!",
  canonical: "https://webseo-ten.vercel.app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <test />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
      <link rel="canonical" href={metadata.canonical} />
    </html>
  );
}
