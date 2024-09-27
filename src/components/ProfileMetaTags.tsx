import React, { useEffect } from 'react';

interface ProfileMetaTagsProps {
  username: string;
  firstName: string;
  lastName: string;
  profileUrl: string;
  image: string;
}

const ProfileMetaTags: React.FC<ProfileMetaTagsProps> = ({
  username,
  firstName,
  lastName,
  profileUrl,
  image,
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

    setMetaTag('og:type', 'profile');
    setMetaTag('og:site_name', username);
    setMetaTag('profile:first_name', firstName);
    setMetaTag('profile:last_name', lastName);
    setMetaTag('profile:username', username);
    setMetaTag('og:url', profileUrl);
    setMetaTag('og:image', image);
  }, [username, firstName, lastName, profileUrl, image]);

  return null;
};

export default ProfileMetaTags;
