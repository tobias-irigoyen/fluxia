export default `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Fluxia - AI-Powered Business Automation Platform</title>
    <base href="/"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content="Fluxia replaces repetitive workflows with intelligent automation. Deploy AI agents in minutes to streamline operations, boost productivity, and scale your business."/>
    <meta name="keywords" content="AI automation, business automation, AI agents, workflow automation, artificial intelligence, machine learning, productivity tools, enterprise AI, AI software, automation platform"/>
    <link rel="manifest" href="/site.webmanifest">
    <meta name="author" content="Fluxia"/>
    <meta name="robots" content="index, follow"/>
    <link rel="canonical" href="https://fluxia-ai.vercel.app/">

    <!-- Open Graph -->
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://fluxia-ai.vercel.app/"/>
    <meta property="og:title" content="Fluxia - AI-Powered Business Automation Platform"/>
    <meta property="og:description" content="Fluxia replaces repetitive workflows with intelligent automation. Deploy AI agents in minutes to streamline operations, boost productivity, and scale your business."/>
    <meta property="og:image" content="https://fluxia-ai.vercel.app/og.png"/>
    <meta property="og:site_name" content="Fluxia"/>
    <meta property="og:locale" content="en_US"/>

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@fluxia-ai"/>
    <meta name="twitter:title" content="Fluxia - AI-Powered Business Automation Platform"/>
    <meta name="twitter:description" content="Fluxia replaces repetitive workflows with intelligent automation. Deploy AI agents in minutes to streamline operations, boost productivity, and scale your business."/>
    <meta name="twitter:image" content="https://fluxia-ai.vercel.app/og-2.png"/>

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"/>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

    <!-- Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
    <style>@font-face{font-family:'Inter';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwkT9nA2.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Inter';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwAT9nA2.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Inter';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwgT9nA2.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Inter';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwcT9nA2.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Inter';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwsT9nA2.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Inter';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwoT9nA2.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Inter';font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwQT9g.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvvYwYL8g.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvmYwYL8g.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvuYwYL8g.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvhYwYL8g.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvtYwYL8g.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvsYwYL8g.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcviYwY.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>

    <!-- JSON-LD Schema -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Fluxia",
        "alternateName": "Fluxia AI",
        "description": "AI-powered business automation platform that replaces repetitive workflows with intelligent automation. Deploy AI agents in minutes to streamline operations, boost productivity, and scale your business.",
        "url": "https://fluxia-ai.vercel.app"
        "logo": "https://fluxia-ai.vercel.app/logo.png",
        "image": "https://fluxia-ai.vercel.app/og.png",
        "sameAs": [
          "https://twitter.com/fluxia-ai",
          "https://linkedin.com/company/fluxia-ai",
          "https://github.com/fluxia-ai"
        ],
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "14-day free trial, no credit card required",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127"
        },
        "author": {
          "@type": "Organization",
          "name": "Fluxia",
          "url": "https://fluxia-ai.vercel.app"
        },
        "featureList": [
          "AI-powered workflow automation",
          "Intelligent document processing",
          "Natural language interfaces",
          "Custom AI agents",
          "Real-time analytics",
          "Enterprise security",
          "API integrations",
          "No-code automation builder"
        ],
        "screenshot": "https://fluxia-ai.vercel.app/screenshot.png",
        "softwareVersion": "2.0",
        "releaseNotes": "https://fluxia-ai.vercel.app/changelog"
      }
    </script>

    <!-- Organization Schema -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Fluxia",
        "url": "fluxia-ai.vercel.app",
        "logo": "https://fluxia-ai.vercel.app/logo.png",
        "description": "AI-powered business automation platform that replaces repetitive workflows with intelligent automation.",
        "sameAs": [
          "https://twitter.com/fluxia-ai",
          "https://linkedin.com/company/fluxia-ai",
          "https://github.com/fluxia-ai"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "availableLanguage": "English"
        },
        "areaServed": "Worldwide",
        "serviceType": "Business Automation"
      }
    </script>

    <!-- FAQ Schema for SEO -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Fluxia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fluxia is an AI-powered business automation platform that replaces repetitive workflows with intelligent automation. It allows you to deploy AI agents in minutes to streamline operations, boost productivity, and scale your business."
            }
          },
          {
            "@type": "Question",
            "name": "How does Fluxia work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fluxia uses advanced AI and machine learning to understand your business processes and automate them. You can create custom AI agents without coding, connect to your existing tools via API, and monitor performance through real-time analytics."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Fluxia cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fluxia offers flexible pricing plans starting with a 14-day free trial. No credit card is required to start. Visit our pricing page for detailed information on all plans."
            }
          },
          {
            "@type": "Question",
            "name": "Is Fluxia secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Fluxia provides enterprise-grade security with encryption at rest and in transit, SOC 2 compliance, GDPR compliance, and role-based access controls. Your data is always protected."
            }
          },
          {
            "@type": "Question",
            "name": "Can I integrate Fluxia with my existing tools?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Fluxia offers seamless integrations with popular business tools including CRM systems, ERP platforms, communication tools, and custom APIs. Our team can help you set up any integration you need."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need coding skills to use Fluxia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, Fluxia is designed with a no-code interface that allows anyone to create and manage AI automation workflows. However, for advanced customizations, our API provides full programmatic access."
            }
          }
        ]
      }
    </script>

    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://fluxia-ai.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Solutions",
            "item": "https://fluxia-ai.vercel.app/solutions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Pricing",
            "item": "https://fluxia-ai.vercel.app/pricing"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Contact",
            "item": "https://fluxia-ai.vercel.app/contact"
          }
        ]
      }
    </script>
  <link rel="stylesheet" href="styles-GV65MC6R.css"></head>
  <body><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script>
    <app-root></app-root>
  <script src="main-3DBHCYI5.js" type="module"></script></body>
</html>
`;