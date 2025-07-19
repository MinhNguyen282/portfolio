import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Nguyễn Hữu Hoàng Minh - Software Engineer Portfolio",
  description = "I am a back-end developer with a B.S. in Computer Science from Ho Chi Minh City University of Science. I specialize in building robust, scalable web applications with Spring Boot, Node.js, and ReactJS.",
  keywords = "software engineer, backend developer, spring boot, nodejs, reactjs, portfolio, web development, full stack",
  image = "/avatar.jpg",
  url = window.location.href,
  type = "website"
}) => {
  const siteUrl = process.env.REACT_APP_SITE_URL || window.location.origin;
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Nguyễn Hữu Hoàng Minh" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Minh's Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Nguyễn Hữu Hoàng Minh",
          "jobTitle": "Software Engineer",
          "description": description,
          "url": fullUrl,
          "image": fullImageUrl,
          "email": "nhhminh.2004.work@gmail.com",
          "sameAs": [
            "https://github.com/MinhNguyen282",
            "https://linkedin.com/in/minhnguyenapcs22"
          ],
          "alumniOf": {
            "@type": "Organization",
            "name": "Ho Chi Minh City University of Science (VNU-HCM)"
          },
          "knowsAbout": [
            "Spring Boot",
            "Node.js",
            "ReactJS",
            "Java",
            "JavaScript",
            "MySQL",
            "MongoDB",
            "Web Development",
            "Backend Development"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
