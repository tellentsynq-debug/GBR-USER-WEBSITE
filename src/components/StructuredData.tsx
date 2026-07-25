import { useEffect } from 'react';

export const StructuredData = () => {
  useEffect(() => {
    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Gig Force Management Group",
      "description": "Leading AI-powered workforce management and gig economy staffing solutions",
      "url": "https://gigforcemanagement.ca",
      "logo": "https://gigforcemanagement.ca/lovable-uploads/8929be1e-2b42-4cbb-8bd6-b05bb54b4da7.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-905-364-4747",
          "contactType": "customer service",
          "email": "support@gigforcemanagement.ca",
          "availableLanguage": "English",
          "areaServed": "Ontario"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-587-430-3038",
          "contactType": "customer service",
          "email": "support@gigforcemanagement.ca",
          "availableLanguage": "English",
          "areaServed": "Alberta"
        }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "2506-10 Park Lawn Rd",
          "addressLocality": "Etobicoke",
          "addressRegion": "ON",
          "postalCode": "M8V 0H9",
          "addressCountry": "CA"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "PO BOX # 409, 1122 3 St SE Ste 1906",
          "addressLocality": "Calgary",
          "addressRegion": "AB",
          "postalCode": "T2G 0E7",
          "addressCountry": "CA"
        }
      ],
      "sameAs": [
        "https://linkedin.com/company/gigforce-management",
        "https://twitter.com/gigforcemanagement"
      ],
      "foundingDate": "2018",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "50-100"
      },
      "industry": "Human Resources Services",
      "serviceArea": {
        "@type": "Country",
        "name": "Canada"
      }
    };

    // Website schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Gig Force Management Group",
      "url": "https://gigforcemanagement.ca",
      "description": "AI-powered workforce management and staffing solutions",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://gigforcemanagement.ca/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI-Powered Workforce Management",
      "description": "Comprehensive staffing and recruitment solutions using artificial intelligence",
      "provider": {
        "@type": "Organization",
        "name": "Gig Force Management Group"
      },
      "serviceType": "Staffing and Recruitment",
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Workforce Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Talent Acquisition"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Temporary Staffing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Executive Search"
            }
          }
        ]
      }
    };

    // Insert schemas into head
    const insertSchema = (schema: object, id: string) => {
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }
      
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    insertSchema(organizationSchema, 'organization-schema');
    insertSchema(websiteSchema, 'website-schema');
    insertSchema(serviceSchema, 'service-schema');

    // Cleanup function
    return () => {
      ['organization-schema', 'website-schema', 'service-schema'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.remove();
        }
      });
    };
  }, []);

  return null;
};