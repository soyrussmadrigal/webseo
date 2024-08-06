import { Inter } from "next/font/google";
import Head from 'next/head';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "contact - page",
  description: "description",
  canonical: "https://example.com/tienda", // Full canonical URL
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
