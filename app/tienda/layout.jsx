import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

export const metadata = {
  title: "Recetas Saludables: 10 Platos Fáciles y Rápidos para Principiantes",
  description:
    "Descubre 10 recetas saludables, fáciles y rápidas perfectas para principiantes en la cocina. ¡Comienza tu viaje culinario hoy!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
