// src/components/BookMetaTags.tsx

import React, { useEffect } from 'react';

interface BookMetaTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
  author: string;
  isbn: string;
  releaseDate?: string;
  genre?: string;
}

const BookMetaTags: React.FC<BookMetaTagsProps> = ({
  title,
  description,
  image,
  url,
  author,
  isbn,
  releaseDate,
  genre,
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

    setMetaTag('og:type', 'book');
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', image);
    setMetaTag('og:url', url);
    setMetaTag('book:author', author);
    setMetaTag('book:isbn', isbn);
    if (releaseDate) setMetaTag('book:release_date', releaseDate);
    if (genre) setMetaTag('book:genre', genre);
  }, [title, description, image, url, author, isbn, releaseDate, genre]);

  return null;
};

export default BookMetaTags;
