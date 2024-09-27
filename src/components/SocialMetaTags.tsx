import React from 'react';

interface SocialMetaTagsProps {
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogLocale?: string;
  ogSiteName?: string;

  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterImageAlt?: string;
  twitterSite?: string;
  twitterCreator?: string;

  ogProductPriceAmount?: string;
  ogProductPriceCurrency?: string;
}

const SocialMetaTags: React.FC<SocialMetaTagsProps> = ({
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

  ogProductPriceAmount,
  ogProductPriceCurrency,
}) => {
  React.useEffect(() => {
    // Set Open Graph Meta Tags
    setPropertyMetaTag('og:type', ogType);
    setPropertyMetaTag('og:title', ogTitle);
    setPropertyMetaTag('og:description', ogDescription);
    setPropertyMetaTag('og:url', ogUrl);
    setPropertyMetaTag('og:image', ogImage);
    setPropertyMetaTag('og:image:alt', ogImageAlt);
    setPropertyMetaTag('og:locale', ogLocale);
    setPropertyMetaTag('og:site_name', ogSiteName);

    // Set Twitter Meta Tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', twitterTitle);
    setMetaTag('twitter:description', twitterDescription);
    setMetaTag('twitter:image', twitterImage);
    setMetaTag('twitter:image:alt', twitterImageAlt);
    setMetaTag('twitter:site', twitterSite);
    setMetaTag('twitter:creator', twitterCreator);

    // Pinterest Rich Pins
    if (ogProductPriceAmount) setPropertyMetaTag('og:product:price:amount', ogProductPriceAmount);
    if (ogProductPriceCurrency) setPropertyMetaTag('og:product:price:currency', ogProductPriceCurrency);
  }, [
    ogType, ogTitle, ogDescription, ogUrl, ogImage, ogImageAlt, ogLocale, ogSiteName,
    twitterCard, twitterTitle, twitterDescription, twitterImage, twitterImageAlt, twitterSite, twitterCreator,
    ogProductPriceAmount, ogProductPriceCurrency
  ]);

  const setMetaTag = (name: string, content?: string) => {
    if (!content) return;
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const setPropertyMetaTag = (property: string, content?: string) => {
    if (!content) return;
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  return null;
};

export default SocialMetaTags;
