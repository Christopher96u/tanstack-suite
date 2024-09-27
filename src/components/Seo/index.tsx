import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonicalLink: string;
}
/* 
    - We need to add constant values
    - We need to add more meta tags
    - We need to add optional tags
    - ReactJS v19 will bring built-in meta tags so we'll need to migrate/remove this component
    - Check docs at https://www.npmjs.com/package/react-helmet-async and add tests
    - Also check some docs about SEO to show warnings like (title > 50 characters) and add those rules to the tests
    - Add a test to check that all our pages under routes folder has a <Seo /> component if not, throw failed test
*/
const Seo = ({ title, description, canonicalLink }: SeoProps) => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalLink} />
        <meta
          name="copyright"
          content="Test123 Pty Ltd 2024. All rights reserved."
        />
        <meta name="author" content="Test123 Pty Ltd" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:creator" content="Test123 Pty Ltd" />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    </>
  );
};
export { Seo };
