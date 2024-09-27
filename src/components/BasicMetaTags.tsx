import React from 'react';

interface BasicMetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonicalUrl?: string;
  viewport?: string;
  charset?: string;
  language?: string;
}

const BasicMetaTags: React.FC<BasicMetaTagsProps> = ({
  title,
  description,
  keywords,
  author,
  canonicalUrl,
  viewport = 'width=device-width, initial-scale=1',
  charset = 'UTF-8',
  language = 'en',
}) => {
  React.useEffect(() => {
    if (title) document.title = title;
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', author);
    setLinkTag('canonical', canonicalUrl);
    setMetaTag('viewport', viewport);
    setMetaTag('charset', charset);
    setMetaTag('language', language);
  }, [title, description, keywords, author, canonicalUrl, viewport, charset, language]);

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

  const setLinkTag = (rel: string, href?: string) => {
    if (!href) return;
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };

  return null;
};

export default BasicMetaTags;
