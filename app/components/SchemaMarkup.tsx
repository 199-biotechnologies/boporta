import Script from 'next/script';

interface SchemaMarkupProps {
  schema: object | object[];
}

/**
 * SEO Component: Injects JSON-LD structured data for Google
 * Invisible to users, critical for search engines
 */
export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemaArray.map((schemaItem, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaItem),
          }}
        />
      ))}
    </>
  );
}
