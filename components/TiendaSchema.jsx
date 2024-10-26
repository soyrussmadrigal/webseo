import Script from 'next/script'

export default function TiendaSchema({ data }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "postalCode": "98052",
      "streetAddress": "20341 Whitworth Institute 405 N. Whitworth"
    },
    "colleague": [
      "http://www.xyz.edu/students/alicejones.html",
      "http://www.xyz.edu/students/bobsmith.html"
    ],
    "email": "mailto:jane-doe@xyz.edu",
    "image": "janedoe.jpg",
    "jobTitle": "Professor",
    "name": "Jane Doe",
    "telephone": "(425) 123-4567",
    "url": "http://www.janedoe.com"
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}