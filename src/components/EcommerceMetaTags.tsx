import React from 'react';

interface EcommerceMetaTagsProps {
  ogProductPriceAmount?: string;
  ogProductPriceCurrency?: string;
  productAvailability?: string;
  productCondition?: string;
  productBrand?: string;
}

const EcommerceMetaTags: React.FC<EcommerceMetaTagsProps> = ({
  ogProductPriceAmount,
  ogProductPriceCurrency,
  productAvailability,
  productCondition,
  productBrand,
}) => {
  React.useEffect(() => {
    setPropertyMetaTag('og:product:price:amount', ogProductPriceAmount);
    setPropertyMetaTag('og:product:price:currency', ogProductPriceCurrency);
    setMetaTag('product:availability', productAvailability);
    setMetaTag('product:condition', productCondition);
    setMetaTag('product:brand', productBrand);
  }, [ogProductPriceAmount, ogProductPriceCurrency, productAvailability, productCondition, productBrand]);

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

export default EcommerceMetaTags;
