import React from 'react';

interface RobotsMetaTagsProps {
  noindex?: boolean;
  nofollow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  robots?: string;
  maxSnippet?: number;            
  maxVideoPreview?: number;       
  maxImagePreview?: string;      
}

const RobotsMetaTags: React.FC<RobotsMetaTagsProps> = ({
  noindex,
  nofollow,
  noarchive,
  nosnippet,
  noimageindex,
  robots = 'index, follow',
  maxSnippet,
  maxVideoPreview,
  maxImagePreview,
}) => {
  React.useEffect(() => {
    let content = robots;

    if (noindex) content = 'noindex';
    if (nofollow) content += ', nofollow';
    if (noarchive) content += ', noarchive';
    if (nosnippet) content += ', nosnippet';
    if (noimageindex) content += ', noimageindex';

    setMetaTag('robots', content);

    // Set max-snippet, max-video-preview, and max-image-preview meta tags if provided
    if (maxSnippet !== undefined) setMetaTag('max-snippet', maxSnippet.toString());
    if (maxVideoPreview !== undefined) setMetaTag('max-video-preview', maxVideoPreview.toString());
    if (maxImagePreview) setMetaTag('max-image-preview', maxImagePreview);
  }, [noindex, nofollow, noarchive, nosnippet, noimageindex, robots, maxSnippet, maxVideoPreview, maxImagePreview]);

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

  return null;
};

export default RobotsMetaTags;
