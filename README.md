[![npm version](https://img.shields.io/npm/v/react-advance-meta-tags)](https://www.npmjs.com/package/react-advance-meta-tags)
[![npm downloads](https://img.shields.io/npm/dm/react-advance-meta-tags)](https://www.npmjs.com/package/react-advance-meta-tags)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-advance-meta-tags)](https://bundlephobia.com/result?p=react-advance-meta-tags)


# React Advance Meta Tags

A React component designed for adding comprehensive meta tags for SEO and social media sharing, including support for Open Graph, Twitter Cards, and other essential tags. This flexible and reusable library makes it easy to manage various SEO-related meta tags in your React application, helping improve search engine visibility and social media integration.


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [BasicMetaTags](#basicmetatags)
  - [BookMetaTags](#bookmetatags)
  - [EcommerceMetaTags](#ecommercemetatags)
  - [ProfileMetaTags](#profilemetatags)
  - [RobotsMetaTags](#robotsmetatags)
  - [SocialMetaTags](#socialmetatags)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- Set various types of meta tags for SEO
- Support for Open Graph and Twitter Card meta tags
- Flexible components for different use cases
- Simple and intuitive API

## Installation

To install the package, run:

```bash
npm install react-advance-meta-tags
```

or

```bash
yarn add react-advance-meta-tags
```


## Usage

Import the desired meta tag component and include it in your React component.

```jsx
import React from 'react';
import BasicMetaTags from 'react-meta-tags/BasicMetaTags';

const App = () => (
  <div>
    <BasicMetaTags 
      title="My App Title"
      description="This is a description of my app."
      keywords="app, react, meta tags"
      author="Your Name"
      canonicalUrl="https://yourdomain.com"
    />
    {/* Other components */}
  </div>
);
```

## Components

### BasicMetaTags

   `BasicMetaTags` manages the basic meta tags crucial for SEO, including the page title, description, keywords, and other common meta attributes like viewport and charset.

   **Benefits**:  
   - Improves the visibility of your website in search engines by providing accurate and concise information about the page.
   - Enhances user experience through proper viewport settings, especially for mobile devices.
   - Ensures content is indexed correctly with essential information.

   **Role in SEO**:  
   Basic meta tags like the title and description are fundamental for search engines to understand your page's content. Including keywords helps boost relevancy for specific searches, and the canonical URL prevents duplicate content issues.

**Example**
```jsx
    <BasicMetaTags
        title="Welcome to My Website"
        description="This is the homepage of my awesome website."
        keywords="React, SEO, Meta Tags, Website"
        author="Deepak Kumar"
        canonicalUrl="https://www.mywebsite.com"
        viewport="width=device-width, initial-scale=1.0"
        charset="UTF-8"
        language="en"
      />
```
**Props**
| Prop         | Type   | Default                              | Description                           |
| ------------ | ------ | ------------------------------------ | ------------------------------------- |
| title        | string | undefined                            | The title of the page.                |
| description  | string | undefined                            | A brief description of the page content. |
| keywords     | string | undefined                            | A comma-separated list of keywords.   |
| author       | string | undefined                            | The author of the page.               |
| canonicalUrl | string | undefined                            | The canonical URL of the page.        |
| viewport     | string | width=device-width, initial-scale=1   | The viewport settings for responsive design. |
| charset      | string | UTF-8                                | The character encoding for the HTML document. |
| language     | string | en                                   | The language of the content in the document. |

### BookMetaTags
   This component handles Open Graph meta tags tailored for books. It includes properties like title, description, author, ISBN, and more.

   **Benefits**:  
   - Ideal for book-related websites or blogs where you want to share book details with search engines and social media platforms.
   - Allows you to showcase essential information (like author and release date) that increases engagement for book reviews or product pages.

   **Role in SEO**:  
   Open Graph tags allow you to control how your book content appears on social media. Accurate tags can increase click-through rates and social sharing, indirectly boosting SEO rankings through higher engagement.

**Example**
```jsx
<BookMetaTags
  title="The Great Gatsby"
  description="A novel by F. Scott Fitzgerald."
  image="https://example.com/image.jpg"
  url="https://example.com/great-gatsby"
  author="F. Scott Fitzgerald"
  isbn="978-0743273565"
  releaseDate="1925-04-10"
  genre="Fiction"
/>
```
**Props**
| Prop         | Type   | Default    | Description                       |
| ------------ | ------ | ---------- | --------------------------------- |
| title        | string | undefined  | The title of the book.            |
| description  | string | undefined  | A description of the book.        |
| image        | string | undefined  | The cover image of the book.      |
| url          | string | undefined  | The URL of the book.              |
| author       | string | undefined  | The author of the book.           |
| isbn         | string | undefined  | The ISBN of the book.             |
| releaseDate  | string | undefined  | The release date of the book.     |
| genre        | string | undefined  | The genre of the book.            |



### EcommerceMetaTags

 **Description**:  
   This component is designed for e-commerce websites, setting meta tags for product details like price, availability, condition, and brand.

   **Benefits**:  
   - Helps search engines and social media platforms display product details in rich formats.
   - Improves user engagement by providing essential product information, boosting click-through rates from search results and social media.

   **Role in SEO**:  
   E-commerce meta tags ensure products are indexed correctly and display valuable product data in search engine results and social media cards, helping increase sales and product visibility.

**Example**

```jsx
<EcommerceMetaTags
  ogProductPriceAmount="29.99"
  ogProductPriceCurrency="USD"
  productAvailability="in stock"
  productCondition="new"
  productBrand="Acme Corporation"
/>
```
**Props**
| Prop                    | Type   | Default   | Description                       |
| ----------------------- | ------ | --------- | --------------------------------- |
| ogProductPriceAmount     | string | undefined | The product price amount.         |
| ogProductPriceCurrency   | string | undefined | The currency of the product price. |
| productAvailability      | string | undefined | Availability status of the product. |
| productCondition         | string | undefined | The condition of the product (new, used, etc.). |
| productBrand             | string | undefined | The brand of the product.         |

### ProfileMetaTags

 **Description**:  
   Manages meta tags specific to user profiles, including username, first and last names, profile URL, and profile image.

   **Benefits**:  
   - Enhances how user profiles are represented in search engines and social sharing.
   - Useful for social platforms or user-driven sites to make profiles more discoverable.

   **Role in SEO**:  
   Accurate profile meta tags ensure user profiles are indexed properly, improving user discoverability on search engines. This is especially beneficial for platforms where profiles contribute to the site's overall SEO performance.

**Example**
```jsx
<ProfileMetaTags
  username="john_doe"
  firstName="John"
  lastName="Doe"
  profileUrl="https://example.com/john_doe"
  image="https://example.com/profile.jpg"
/>
```
**Props**
| Prop        | Type   | Default    | Description                       |
| ----------- | ------ | ---------- | --------------------------------- |
| username    | string | undefined  | The username of the profile.      |
| firstName   | string | undefined  | The first name of the user.       |
| lastName    | string | undefined  | The last name of the user.        |
| profileUrl  | string | undefined  | The URL of the user profile.      |
| image       | string | undefined  | The profile image of the user.    |

### RobotsMetaTags

Sets robots meta tags to control how search engines interact with your site. It supports attributes like noindex, nofollow, and others.

   **Benefits**:  
   - Provides control over what pages should be indexed or crawled by search engines, protecting sensitive or non-important pages.
   - Helps manage content visibility and reduce duplicate content penalties.

   **Role in SEO**:  
   Robots meta tags are crucial for controlling how search engines handle your content. Setting noindex or nofollow on specific pages can prevent them from appearing in search results, which can help you avoid dilution of SEO value across unimportant pages.

**Example**

```jsx
<RobotsMetaTags
  noindex
  nofollow
  maxSnippet={20}
  maxVideoPreview={30}
  maxImagePreview="large"
/>
```
**Props**
| Prop           | Type    | Default     | Description                                  |
| -------------- | ------- | ----------- | -------------------------------------------- |
| noindex        | boolean | false       | Prevents indexing of the page.               |
| nofollow       | boolean | false       | Prevents following links on the page.        |
| noarchive      | boolean | false       | Prevents archiving the page.                 |
| nosnippet      | boolean | false       | Prevents showing snippets in search results. |
| noimageindex   | boolean | false       | Prevents indexing images on the page.        |
| robots         | string  | index, follow| Custom robots directive.                    |
| maxSnippet     | number  | undefined   | Maximum snippet length.                      |
| maxVideoPreview| number  | undefined   | Maximum video preview length.                |
| maxImagePreview| string  | undefined   | Maximum image preview length.                |

### SocialMetaTags

 Manages Open Graph and Twitter Card meta tags, which are essential for social media sharing. This includes content like title, description, URL, and image.

   **Benefits**:  
   - Optimizes how your content appears when shared on social platforms like Facebook, Twitter, and LinkedIn.
   - Increases the likelihood of user engagement by controlling how the content preview looks on social media.

   **Role in SEO**:  
   While social signals are not direct ranking factors, enhanced social sharing can lead to higher engagement (click-through rates, shares), which indirectly influences SEO. Properly set Open Graph and Twitter Cards ensure your content is represented attractively on social media.

**Example**

```jsx
    <SocialMetaTags
        ogType="article"
        ogTitle="Understanding React Hooks"
        ogDescription="A comprehensive guide to understanding and using React Hooks."
        ogUrl="https://yourwebsite.com/blog/understanding-react-hooks"
        ogImage="https://yourwebsite.com/images/react-hooks.jpg"
        ogImageAlt="React Hooks Illustration"
        ogSiteName="Your Website"
        twitterTitle="Understanding React Hooks"
        twitterDescription="A comprehensive guide to understanding and using React Hooks."
        twitterImage="https://yourwebsite.com/images/react-hooks.jpg"
        twitterImageAlt="React Hooks Illustration"
        twitterSite="@yourtwitterhandle"
        ogProductPriceAmount="29.99"
        ogProductPriceCurrency="USD"
      />
```
**Props**

| Prop                 | Type   | Default            | Description                          |
| -------------------- | ------ | ------------------ | ------------------------------------ |
| ogType               | string | undefined          | The type of content (e.g., website, article). |
| ogTitle              | string | undefined          | The title for Open Graph.            |
| ogDescription        | string | undefined          | The description for Open Graph.      |
| ogUrl                | string | undefined          | The URL of the content for Open Graph. |
| ogImage              | string | undefined          | The image for Open Graph.            |
| ogImageAlt           | string | undefined          | The alt text for the Open Graph image. |
| ogLocale             | string | en_US              | The locale for Open Graph.           |
| ogSiteName           | string | undefined          | The site name for Open Graph.        |
| twitterCard          | string | summary_large_image| The type of Twitter Card.            |
| twitterTitle         | string | undefined          | The title for Twitter Card.          |
| twitterDescription   | string | undefined          | The description for Twitter Card.    |
| twitterImage         | string | undefined          | The image for Twitter Card.          |
| twitterImageAlt      | string | undefined          | The alt text for the Twitter Card image. |
| twitterSite          | string | undefined          | The Twitter handle of the site.      |
| twitterCreator       | string | undefined          | The Twitter handle of the content creator. |

## General Benefits of React Advance Meta Tags

- **Improved SEO**: By including proper meta tags, you provide essential signals to search engines, leading to better indexing and search engine ranking.
- **Social Media Optimization**: Meta tags for Open Graph and Twitter cards improve how your site is displayed when shared, increasing click-through rates and engagement.
- **User Experience**: Meta tags such as viewport ensure that your website works well across devices, enhancing user experience, which indirectly impacts SEO performance.

These components ensure that your site is equipped with the necessary meta tags, providing both search engines and social platforms with accurate data to display your content in the best possible way.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.