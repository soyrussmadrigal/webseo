import TiendaSchema from "@/components/TiendaSchema";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

export const metadata = {
  title: "Recetas Saludables: 10 Platos Fáciles y Rápidos para | Web 2024",
  description: "Descubre 12 recetas saludables, fáciles y ddddd ssss para ddddssssssd en la cociffffffna. ¡Comienza tu viaje culinario hoydd!",
  canonical: "https://webseo-ten.vercel.app/tienda",
  
   // Open Graph - para compartir en redes sociales
   openGraph: {
    title: 'Título para Redes Sociales',
    description: 'Descripción para redes sociales',
    type: 'website',
    url: 'https://tusitio.com',
    image: 'https://tusitio.com/og-image.jpg',
    locale: 'es_ES',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        {children}
        <TiendaSchema />
      </body>
      <link rel="canonical" href={metadata.canonical} />
    </html>
  );
}
