import Head from 'next/head';

export default function TiendaSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mi Tienda",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Principal 123",
      "addressLocality": "Ciudad"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
}