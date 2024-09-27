import React, { useEffect } from 'react';

interface ArticleMetaTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const ArticleMetaTags: React.FC<ArticleMetaTagsProps> = ({
  title,
  description,
  image,
  url,
  author,
  publishedTime,
  modifiedTime,
}) => {
  useEffect(() => {
    const setMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('og:type', 'article');
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', image);
    setMetaTag('og:url', url);
    if (author) setMetaTag('article:author', author);
    if (publishedTime) setMetaTag('article:published_time', publishedTime);
    if (modifiedTime) setMetaTag('article:modified_time', modifiedTime);
  }, [title, description, image, url, author, publishedTime, modifiedTime]);

  return null;
};

export default ArticleMetaTags;
