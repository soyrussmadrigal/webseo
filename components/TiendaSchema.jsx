import Head from 'next/head'

export default function TiendaSchema () {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Sobre Nosotros",
              "description": "Página sobre nuestra empresa"
            })
          }}
        />
      </Head>
      <h1>Sobre Nosotros</h1>
    </>
  )
}