import React from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonicalUrl?: string;

  // Open Graph Meta Tags (Facebook, LinkedIn, etc.)
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogLocale?: string;
  ogSiteName?: string;

  // Twitter Card Meta Tags
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterImageAlt?: string;
  twitterSite?: string;
  twitterCreator?: string;

  // Facebook-specific Meta Tags
  fbAppId?: string;

  // Google SEO Tags
  robots?: string;
  googlebot?: string;
  canonical?: string;
  structuredData?: object;

  // Custom Meta Tags
  customMetaTags?: { name: string; content: string }[];
  additionalMetaTags?: React.ReactNode;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  keywords,
  author,
  canonicalUrl,
  ogType,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogImageAlt,
  ogLocale = 'en_US',
  ogSiteName,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  twitterSite,
  twitterCreator,
  fbAppId,
  robots = 'index, follow',
  googlebot = 'index, follow',
  canonical,
  structuredData,
  customMetaTags,
  additionalMetaTags,
}) => {
  React.useEffect(() => {
    // Set Basic Meta Tags
    if (title) document.title = title;
    if (description) setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    if (author) setMetaTag('author', author);
    if (canonicalUrl) setLinkTag('canonical', canonicalUrl);

    // Set Open Graph Meta Tags
    if (ogType) setPropertyMetaTag('og:type', ogType);
    if (ogTitle) setPropertyMetaTag('og:title', ogTitle);
    if (ogDescription) setPropertyMetaTag('og:description', ogDescription);
    if (ogUrl) setPropertyMetaTag('og:url', ogUrl);
    if (ogImage) setPropertyMetaTag('og:image', ogImage);
    if (ogImageAlt) setPropertyMetaTag('og:image:alt', ogImageAlt);
    if (ogLocale) setPropertyMetaTag('og:locale', ogLocale);
    if (ogSiteName) setPropertyMetaTag('og:site_name', ogSiteName);

    // Set Twitter Card Meta Tags
    if (twitterCard) setMetaTag('twitter:card', twitterCard);
    if (twitterTitle) setMetaTag('twitter:title', twitterTitle);
    if (twitterDescription) setMetaTag('twitter:description', twitterDescription);
    if (twitterImage) setMetaTag('twitter:image', twitterImage);
    if (twitterImageAlt) setMetaTag('twitter:image:alt', twitterImageAlt);
    if (twitterSite) setMetaTag('twitter:site', twitterSite);
    if (twitterCreator) setMetaTag('twitter:creator', twitterCreator);

    // Facebook-specific Meta Tags
    if (fbAppId) setPropertyMetaTag('fb:app_id', fbAppId);

    // Google SEO Meta Tags
    if (robots) setMetaTag('robots', robots);
    if (googlebot) setMetaTag('googlebot', googlebot);
    if (canonical) setLinkTag('canonical', canonical);

    // Custom Meta Tags
    customMetaTags?.forEach(({ name, content }) => setMetaTag(name, content));

    // Structured Data (JSON-LD)
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [
    title,
    description,
    keywords,
    author,
    canonicalUrl,
    ogType,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    ogImageAlt,
    ogLocale,
    ogSiteName,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterImageAlt,
    twitterSite,
    twitterCreator,
    fbAppId,
    robots,
    googlebot,
    canonical,
    customMetaTags,
    structuredData,
  ]);

  const setMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const setPropertyMetaTag = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const setLinkTag = (rel: string, href: string) => {
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };

  return <>{additionalMetaTags}</>;
};

export default MetaTags;
