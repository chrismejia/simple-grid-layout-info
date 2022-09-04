import { Helmet } from "react-helmet";

export default function Metadata() {
  return (
    <Helmet>
      <meta property="og:title" content="Build Layouts Using CSS Grid" />
      <meta property="og:url" content="https://christianmejia.dev" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content="Flexbox wishes it could do all this as easily..."
      />
      <meta property="og:image" content={`../og-image.png`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="https://christianmejia.dev" />
      <meta name="twitter:creator" content="Christian Mejia" />
    </Helmet>
  );
}
