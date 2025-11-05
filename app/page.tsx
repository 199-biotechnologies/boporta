import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import SchemaMarkup from "./components/SchemaMarkup";
import ContactForm from "./components/ContactForm";
import PhoneLink from "./components/PhoneLink";

export default function Home() {
  // JSON-LD Schema for SEO
  const schemas = [
    // Attorney Schema
    {
      "@context": "https://schema.org",
      "@type": "Attorney",
      "name": "Bolívar C. Porta, P.A.",
      "alternateName": "Bo Porta",
      "url": "https://bolivarporta.com",
      "logo": "https://bolivarporta.com/portrait-bo-porta.webp",
      "image": "https://bolivarporta.com/portrait-bo-porta.webp",
      "description": "Miami trial attorney with 29 years experience specializing in criminal defense and family law. Avvo 8.6 rated with over 1,550 cases.",
      "telephone": "+1-305-371-5060",
      "email": "info@boporta.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2000 S Dixie Highway, Suite 108",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "postalCode": "33133",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.7617",
        "longitude": "-80.1918"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Miami"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Miami-Dade County"
        },
        {
          "@type": "State",
          "name": "Florida"
        }
      ],
      "knowsAbout": ["Criminal Defense", "Family Law", "DUI Defense", "Domestic Violence", "Divorce", "Child Custody"],
      "memberOf": {
        "@type": "Organization",
        "name": "Florida Bar"
      },
      "award": [
        "Client's Choice Award 2022 (Avvo)",
        "Best DUI Lawyer Miami 2022 (Expertise.com)",
        "Best DUI Lawyer Miami 2021 (Expertise.com)",
        "Best DUI Lawyer Miami 2020 (Expertise.com)",
        "Best DUI Lawyer Miami 2016 (Expertise.com)"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "20",
        "bestRating": "5",
        "worstRating": "1"
      },
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ]
    },
    // LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://bolivarporta.com",
      "name": "Bolívar C. Porta, P.A.",
      "image": "https://bolivarporta.com/portrait-bo-porta.webp",
      "telephone": "+1-305-371-5060",
      "email": "info@boporta.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2000 S Dixie Highway, Suite 108",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "postalCode": "33133"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.7617",
        "longitude": "-80.1918"
      },
      "url": "https://bolivarporta.com",
      "priceRange": "$$"
    },
    // Review Schemas
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Barry Wax",
        "jobTitle": "Criminal Defense Attorney"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I have known Bo since he graduated from law school... He has distinguished himself with judges and his colleagues based upon his professionalism and knowledge of the law. His clients are well served with him as their advocate."
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Robert Malove",
        "jobTitle": "Criminal Defense Attorney"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I endorse this lawyer without any reservation whatsoever... Any client in trouble with the law would be well-served to be represented by Bo Porta. Bo is an effective advocate and is known for delivering excellent results."
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Patrick McGeehan",
        "jobTitle": "Criminal Defense Attorney, Former Miami-Dade Police Officer"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I've known Bo for years. I first met him when i was a Miami Dade Police Officer. He is an aggressive advocate that really looks out for his clients."
    },
    // Person Schema (E-E-A-T for AI Search)
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Bolívar C. Porta",
      "alternateName": "Bo Porta",
      "jobTitle": "Trial Attorney",
      "description": "Miami trial attorney with 29 years experience in criminal defense and family law. Former Public Defender for Miami-Dade County. Licensed in Florida Bar since 1996 and U.S. District Court, Southern District of Florida.",
      "worksFor": {
        "@type": "LegalService",
        "name": "Bolívar C. Porta, P.A.",
        "url": "https://bolivarporta.com"
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Tulane University Law School",
          "sameAs": "https://law.tulane.edu"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Tulane University"
        }
      ],
      "award": [
        "Client's Choice Award 2022 (Avvo)",
        "Best DUI Lawyer Miami 2022 (Expertise.com)",
        "Best DUI Lawyer Miami 2021 (Expertise.com)",
        "Best DUI Lawyer Miami 2020 (Expertise.com)",
        "Best DUI Lawyer Miami 2016 (Expertise.com)"
      ],
      "knowsAbout": [
        "Criminal Defense Law",
        "Family Law",
        "DUI Defense",
        "Domestic Violence Defense",
        "Divorce Litigation",
        "Child Custody",
        "Trial Advocacy"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "license",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Florida Bar"
          },
          "dateCreated": "1996"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "license",
          "recognizedBy": {
            "@type": "Organization",
            "name": "U.S. District Court, Southern District of Florida"
          }
        }
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "Florida Bar",
          "url": "https://www.floridabar.org"
        },
        {
          "@type": "Organization",
          "name": "Florida Bar Family Law Section"
        },
        {
          "@type": "Organization",
          "name": "Florida Bar Criminal Law Section"
        },
        {
          "@type": "Organization",
          "name": "Florida Criminal Defense Lawyers Association"
        },
        {
          "@type": "Organization",
          "name": "Dade County Bar Association"
        },
        {
          "@type": "Organization",
          "name": "American Bar Association"
        }
      ],
      "telephone": "+1-305-371-5060",
      "email": "info@boporta.com",
      "url": "https://bolivarporta.com",
      "sameAs": [
        "https://www.avvo.com/attorneys/33133-fl-bolivar-porta-1287666.html",
        "https://www.floridabar.org/directories/find-mbr/profile/?num=100160",
        "https://www.yelp.com/biz/bolivar-c-porta-miami-3",
        "https://www.yellowpages.com/miami-fl/mip/law-offices-of-bolivar-c-porta-pa-511351329"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2000 S Dixie Highway, Suite 108",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "postalCode": "33133",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.7617",
        "longitude": "-80.1918"
      }
    },
    // Organization Schema (AI Search Context)
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Bolívar C. Porta, P.A.",
      "legalName": "Bolívar C. Porta, P.A.",
      "url": "https://bolivarporta.com",
      "logo": "https://bolivarporta.com/portrait-bo-porta.webp",
      "image": "https://bolivarporta.com/portrait-bo-porta.webp",
      "foundingDate": "1998",
      "founder": {
        "@type": "Person",
        "name": "Bolívar C. Porta"
      },
      "slogan": "Two worlds collide. One lawyer who operates in both.",
      "description": "Miami trial attorney with 29 years experience specializing in criminal defense and family law. Dual practice enables comprehensive representation when cases overlap, such as domestic violence allegations during divorce proceedings.",
      "telephone": "+1-305-371-5060",
      "email": "info@boporta.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2000 S Dixie Highway, Suite 108",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "postalCode": "33133",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.7617",
        "longitude": "-80.1918"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Miami",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Miami-Dade County"
          }
        },
        {
          "@type": "State",
          "name": "Florida"
        }
      ],
      "serviceType": [
        "Criminal Defense",
        "Family Law",
        "DUI Defense",
        "Domestic Violence Defense",
        "Divorce",
        "Child Custody",
        "Trial Litigation"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "20",
        "bestRating": "5",
        "worstRating": "1",
        "ratingExplanation": "Based on verified Avvo client reviews"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Avvo Verified Client"
          },
          "reviewBody": "Avvo 8.6 Excellent rating with Client's Choice Award 2022. Highly recommended for criminal defense and family law matters in Miami."
        }
      ],
      "sameAs": [
        "https://www.avvo.com/attorneys/33133-fl-bolivar-porta-1287666.html",
        "https://www.floridabar.org/directories/find-mbr/profile/?num=100160",
        "https://www.yelp.com/biz/bolivar-c-porta-miami-3"
      ],
      "priceRange": "$$"
    }
  ];

  return (
    <main id="main-content" className="min-h-screen">
      <SchemaMarkup schema={schemas} />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-midnight">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/portrait-bo-porta.webp"
            alt="Bolívar C. Porta, Miami criminal defense and family law trial attorney with 29 years of experience"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 container-custom text-center text-bone">
          {/* Logo */}
          <div className="mb-16 animate-fade-in flex justify-center">
            <svg
              className="h-32 md:h-40 w-auto fill-bone"
              viewBox="0 0 300 179"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fillRule="nonzero">
                <g transform="translate(-1, 149)">
                  <polygon points="1.19204211 8.96963501 1.19204211 7.17382812 17.6557415 7.17382812 17.6557415 8.96963501 10.4303997 8.96963501 10.4303997 29 8.43706775 29 8.43706775 8.96963501"/>
                  <path d="M25.8610831,29 L25.8610831,7.17382812 L33.5618125,7.17382812 C34.9944602,7.17382812 36.2361441,7.44074249 37.2868643,7.97457123 C38.3375845,8.50839996 39.1500388,9.26287079 39.724227,10.2379837 C40.2984152,11.2130966 40.5855094,12.3592987 40.5855094,13.67659 C40.5855094,14.9874725 40.2875815,16.1295547 39.6917258,17.1028366 C39.0958701,18.0761185 38.2626257,18.828949 37.1919928,19.3613281 C36.1213599,19.8937073 34.8711691,20.1598969 33.4414206,20.1598969 L26.9613181,20.1598969 L26.9613181,18.3629456 L33.5185538,18.3629456 C34.564086,18.3629456 35.4674445,18.171257 36.2286292,17.7878799 C36.9898139,17.4045029 37.5771246,16.8613663 37.9905615,16.1584702 C38.4039984,15.455574 38.6107169,14.6282806 38.6107169,13.67659 C38.6107169,12.711319 38.4025488,11.8785706 37.9862128,11.1783447 C37.5698767,10.4781189 36.9809638,9.93475342 36.2194739,9.54824829 C35.457984,9.16174316 34.551116,8.9684906 33.4988699,8.9684906 L27.854415,8.9684906 L27.854415,29 L25.8610831,29 Z M38.5878287,29 L33.3198844,19.1454926 L35.5768881,19.1454926 L40.9034262,29 L38.5878287,29 Z"/>
                  <polygon points="51.3483538 7.17382812 51.3483538 29 49.3550219 29 49.3550219 7.17382812"/>
                  <path d="M59.0360774,29 L67.1169795,7.17382812 L69.4341792,7.17382812 L77.4757136,29 L75.3528346,29 L70.1835383,14.6108856 C69.8855342,13.7762299 69.5631923,12.8530731 69.2165126,11.8414154 C68.8698329,10.8297577 68.4586848,9.58677673 67.9830684,8.11247253 L68.5612239,8.11247253 C68.0863704,9.58815002 67.6752605,10.8325424 67.3278941,11.8456497 C66.9805278,12.858757 66.6560115,13.7805023 66.3543452,14.6108856 L61.1264552,29 L59.0360774,29 Z M62.8744258,22.5198975 L62.8744258,20.7263794 L73.6373652,20.7263794 L73.6373652,22.5198975 L62.8744258,22.5198975 Z"/>
                  <polygon points="85.1633914 29 85.1633914 7.17382812 87.1665652 7.17382812 87.1665652 27.2041931 97.8848727 27.2041931 97.8848727 29"/>
                  <path d="M116.43405,29 L124.514952,7.17382812 L126.832152,7.17382812 L134.873687,29 L132.750808,29 L127.581511,14.6108856 C127.283507,13.7762299 126.961165,12.8530731 126.614485,11.8414154 C126.267806,10.8297577 125.856658,9.58677673 125.381041,8.11247253 L125.959197,8.11247253 C125.484343,9.58815002 125.073233,10.8325424 124.725867,11.8456497 C124.378501,12.858757 124.053984,13.7805023 123.752318,14.6108856 L118.524428,29 L116.43405,29 Z M120.272399,22.5198975 L120.272399,20.7263794 L131.035338,20.7263794 L131.035338,22.5198975 L120.272399,22.5198975 Z"/>
                  <polygon points="138.20914 8.96963501 138.20914 7.17382812 154.67284 7.17382812 154.67284 8.96963501 147.447498 8.96963501 147.447498 29 145.454166 29 145.454166 8.96963501"/>
                  <polygon points="161.413338 8.96963501 161.413338 7.17382812 177.877037 7.17382812 177.877037 8.96963501 170.651695 8.96963501 170.651695 29 168.658363 29 168.658363 8.96963501"/>
                  <path d="M193.573242,29.3103638 C191.695953,29.3103638 190.033508,28.8348236 188.585907,27.8837433 C187.138305,26.932663 186.005493,25.6137695 185.187469,23.927063 C184.369446,22.2403564 183.960434,20.2985229 183.960434,18.1015625 C183.960434,15.8858337 184.370247,13.9346161 185.189872,12.2479095 C186.009498,10.561203 187.142311,9.24211884 188.58831,8.29065704 C190.034309,7.33919525 191.695953,6.86346436 193.573242,6.86346436 C195.45282,6.86346436 197.114006,7.33919525 198.556801,8.29065704 C199.999595,9.24211884 201.129814,10.561203 201.947456,12.2479095 C202.765098,13.9346161 203.173919,15.8858337 203.173919,18.1015625 C203.173919,20.3017273 202.765098,22.245163 201.947456,23.9318695 C201.129814,25.618576 199.999595,26.9366684 198.556801,27.8861465 C197.114006,28.8356247 195.45282,29.3103638 193.573242,29.3103638 Z M193.573242,27.4362793 C195.000702,27.4362793 196.289459,27.0649185 197.439514,26.322197 C198.589569,25.5794754 199.50151,24.5105972 200.175338,23.1155624 C200.849167,21.7205276 201.186081,20.0491943 201.186081,18.1015625 C201.186081,16.1434021 200.849167,14.4653549 200.175338,13.067421 C199.50151,11.669487 198.589569,10.5983582 197.439514,9.85403442 C196.289459,9.10971069 195.000702,8.73754883 193.573242,8.73754883 C192.144867,8.73754883 190.854698,9.10826111 189.702736,9.84968567 C188.550773,10.5911102 187.637077,11.6607895 186.961647,13.0587234 C186.286216,14.4566574 185.948501,16.1376038 185.948501,18.1015625 C185.948501,20.04599 186.284576,21.7155304 186.956726,23.1101837 C187.628875,24.504837 188.540931,25.5745163 189.692894,26.3192215 C190.844856,27.0639267 192.138305,27.4362793 193.573242,27.4362793 Z"/>
                  <path d="M211.867422,29 L211.867422,7.17382812 L219.568151,7.17382812 C221.000799,7.17382812 222.242483,7.44074249 223.293203,7.97457123 C224.343923,8.50839996 225.156377,9.26287079 225.730566,10.2379837 C226.304754,11.2130966 226.591848,12.3592987 226.591848,13.67659 C226.591848,14.9874725 226.29392,16.1295547 225.698064,17.1028366 C225.102209,18.0761185 224.268964,18.828949 223.198331,19.3613281 C222.127699,19.8937073 220.877508,20.1598969 219.447759,20.1598969 L212.967657,20.1598969 L212.967657,18.3629456 L219.524892,18.3629456 C220.570425,18.3629456 221.473783,18.171257 222.234968,17.7878799 C222.996153,17.4045029 223.583463,16.8613663 223.9969,16.1584702 C224.410337,15.455574 224.617056,14.6282806 224.617056,13.67659 C224.617056,12.711319 224.408888,11.8785706 223.992551,11.1783447 C223.576215,10.4781189 222.987302,9.93475342 222.225813,9.54824829 C221.464323,9.16174316 220.557455,8.9684906 219.505209,8.9684906 L213.860754,8.9684906 L213.860754,29 L211.867422,29 Z M224.594167,29 L219.326223,19.1454926 L221.583227,19.1454926 L226.909765,29 L224.594167,29 Z"/>
                  <path d="M235.361361,29 L235.361361,7.17382812 L237.616075,7.17382812 L247.622103,22.1504822 C247.878908,22.5258484 248.167986,22.966713 248.489336,23.4730759 C248.810686,23.9794388 249.147142,24.5150223 249.498705,25.0798264 C249.850267,25.6446304 250.192598,26.2094727 250.525698,26.774353 L250.262484,27.0870056 C250.244478,26.5488281 250.225901,25.9620895 250.206751,25.3267899 C250.187601,24.6914902 250.173868,24.0801468 250.165552,23.4927597 C250.157236,22.9053726 250.153078,22.4207153 250.153078,22.0387878 L250.153078,7.17382812 L252.14641,7.17382812 L252.14641,29 L249.872011,29 L240.537752,15.084671 C240.25989,14.6700897 239.938768,14.1790619 239.574388,13.6115875 C239.210009,13.0441132 238.805574,12.4046555 238.361086,11.6932144 C237.916597,10.9817734 237.436098,10.2094116 236.919588,9.37612915 L237.221254,8.95933533 C237.253756,9.88020325 237.279581,10.7240524 237.298731,11.4908829 C237.317881,12.2577133 237.332186,12.9405823 237.341646,13.5394897 C237.351107,14.1383972 237.355837,14.6468964 237.355837,15.0649872 L237.355837,29 L235.361361,29 Z"/>
                  <polygon points="261.816397 29 261.816397 7.17382812 275.558921 7.17382812 275.558921 8.96963501 263.809729 8.96963501 263.809729 16.95578 274.645224 16.95578 274.645224 18.7515869 263.809729 18.7515869 263.809729 27.2041931 275.580436 27.2041931 275.580436 29"/>
                  <path d="M290.216923,29 L290.216923,19.5609131 L282.092075,7.17382812 L284.409733,7.17382812 L289.088077,14.3115082 C289.537601,14.9951019 289.971065,15.6759491 290.38847,16.3540497 C290.805874,17.0321503 291.225757,17.7242126 291.648121,18.4302368 L290.809498,18.4302368 C291.226063,17.7228394 291.645489,17.0297089 292.067776,16.3508453 C292.490063,15.6719818 292.920399,14.9922028 293.358784,14.3115082 L298.017444,7.17382812 L300.325489,7.17382812 L292.210255,19.5609131 L292.210255,29 L290.216923,29 Z"/>
                </g>
                <g transform="translate(38, -24)">
                  <path d="M3.695625,45.04 C5.904375,45.12 8.7965625,45.2 12.3721875,45.28 C15.9478125,45.36 19.535625,45.4 23.135625,45.4 C27.095625,45.4 30.8865625,45.36 34.5084375,45.28 C38.1303125,45.2 40.699375,45.16 42.215625,45.16 C52.664375,45.16 60.4565625,46.92 65.5921875,50.44 C70.7278125,53.96 73.295625,58.48 73.295625,64 C73.295625,66.8 72.3796875,69.668125 70.5478125,72.604375 C68.7159375,75.540625 65.9,78.140625 62.1,80.404375 C58.3,82.668125 53.42375,84.25625 47.47125,85.16875 L47.47125,85.40875 C55.3275,85.88875 61.595625,87.2125 66.275625,89.38 C70.955625,91.5475 74.335625,94.159375 76.415625,97.215625 C78.495625,100.271875 79.535625,103.44 79.535625,106.72 C79.535625,111.92 78.155625,116.244062 75.395625,119.692188 C72.635625,123.140313 68.670625,125.720313 63.500625,127.432187 C58.330625,129.144062 52.155625,130 44.975625,130 C43.088125,130 40.3090625,129.94 36.6384375,129.82 C32.9678125,129.7 28.546875,129.64 23.375625,129.64 C19.615625,129.64 15.9478125,129.66 12.3721875,129.7 C8.7965625,129.74 5.904375,129.84 3.695625,130 L3.695625,127.6 C6.224375,127.44 8.1053125,127.12 9.3384375,126.64 C10.5715625,126.16 11.399375,125.2 11.821875,123.76 C12.244375,122.32 12.455625,120.16 12.455625,117.28 L12.455625,57.76 C12.455625,54.8 12.2403125,52.62 11.8096875,51.22 C11.3790625,49.82 10.535,48.86 9.2775,48.34 C8.02,47.82 6.159375,47.52 3.695625,47.44 L3.695625,45.04 Z M41.135625,47.44 C38.251875,47.44 36.3709375,48.12 35.4928125,49.48 C34.6146875,50.84 34.175625,53.6 34.175625,57.76 L34.175625,117.28 C34.175625,120.08 34.39,122.2 34.81875,123.64 C35.2475,125.08 36.03375,126.04 37.1775,126.52 C38.32125,127 40.000625,127.24 42.215625,127.24 C47.373125,127.24 51.1225,125.42 53.46375,121.78 C55.805,118.14 56.975625,112.96 56.975625,106.24 C56.975625,100.08 55.475625,95.32 52.475625,91.96 C49.475625,88.6 44.495625,86.92 37.535625,86.92 L28.055625,86.92 C28.055625,86.92 28.055625,86.58 28.055625,85.9 C28.055625,85.22 28.055625,84.88 28.055625,84.88 L38.375625,84.88 C41.811875,84.88 44.4615625,83.98 46.3246875,82.18 C48.1878125,80.38 49.46875,77.98 50.1675,74.98 C50.86625,71.98 51.215625,68.76 51.215625,65.32 C51.215625,59.4 50.435625,54.94 48.875625,51.94 C47.315625,48.94 44.735625,47.44 41.135625,47.44 Z"/>
                  <polygon points="119 24 119 150.36 112 143.887932 112 24"/>
                  <path d="M153.86343,45.04 C156.05593,45.12 158.944055,45.2 162.527805,45.28 C166.111555,45.36 169.70343,45.4 173.30343,45.4 C177.25593,45.4 181.048118,45.36 184.679993,45.28 C188.311868,45.2 190.87968,45.16 192.38343,45.16 C204.04718,45.16 212.743118,47.36 218.471243,51.76 C224.199368,56.16 227.06343,61.84 227.06343,68.8 C227.06343,71.68 226.487493,74.7 225.335618,77.86 C224.183743,81.02 222.21968,83.94 219.44343,86.62 C216.66718,89.3 212.871243,91.48 208.055618,93.16 C203.239993,94.84 197.13593,95.68 189.74343,95.68 L177.26343,95.68 L177.26343,93.28 L188.54343,93.28 C192.94343,93.28 196.291555,92.2 198.587805,90.04 C200.884055,87.88 202.444055,85.04 203.267805,81.52 C204.091555,78 204.50343,74.2 204.50343,70.12 C204.50343,62.52 203.515618,56.84 201.539993,53.08 C199.564368,49.32 196.15218,47.44 191.30343,47.44 C188.39218,47.44 186.504368,48.12 185.639993,49.48 C184.775618,50.84 184.34343,53.6 184.34343,57.76 L184.34343,116.32 C184.34343,119.52 184.675618,121.904062 185.339993,123.472188 C186.004368,125.040312 187.280305,126.064375 189.167805,126.544375 C191.055305,127.024375 193.80718,127.28 197.42343,127.31125 L197.42343,130 C194.83218,129.90375 191.456555,129.819688 187.296555,129.747813 C183.136555,129.675938 178.744055,129.64 174.119055,129.64 C170.551555,129.64 167.023743,129.675938 163.535618,129.747813 C160.047493,129.819688 156.82343,129.90375 153.86343,130 L153.86343,127.6 C156.39218,127.44 158.276555,127.12 159.516555,126.64 C160.756555,126.16 161.584368,125.2 161.999993,123.76 C162.415618,122.32 162.62343,120.16 162.62343,117.28 L162.62343,57.76 C162.62343,54.8 162.415618,52.62 161.999993,51.22 C161.584368,49.82 160.740305,48.86 159.467805,48.34 C158.195305,47.82 156.32718,47.52 153.86343,47.44 L153.86343,45.04 Z"/>
                </g>
              </g>
            </svg>
          </div>

          {/* Main Headline */}
          <div className="flex items-center justify-center mb-8">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-bone md:text-right md:w-[280px] lg:w-[420px] pr-6 md:pr-8 animate-hero-slide-left">
              FAMILY
            </h2>
            <span className="inline-block w-px h-16 md:h-20 lg:h-24 bg-bone/80 flex-shrink-0 animate-hero-divider"></span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-bone md:text-left md:w-[280px] lg:w-[420px] pl-6 md:pl-8 animate-hero-slide-right">
              CRIMINAL
            </h2>
          </div>

          <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed text-bone/80 animate-fade-in-delay-2">
            Two worlds collide.<br />
            One <Link href="/about" className="text-bone hover:text-crimson transition-colors duration-300 underline-offset-4 hover:underline">Miami trial attorney</Link> who operates in both.
          </p>

          <div className="font-sans text-sm md:text-base uppercase tracking-[0.15em] mb-8 text-bone/60 animate-fade-in-delay-3">
            Avvo 8.6 Rating (Excellent) <span className="mx-3">|</span> 1,550+ Cases <span className="mx-3">|</span> 29 Years
          </div>

          <div className="font-sans text-xs md:text-sm mb-12 text-bone/60 animate-fade-in-delay-3">
            Best DUI Lawyer Miami (Expertise.com 2016-2022) • Client's Choice Award 2022 (Avvo)
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-4">
            <a href="/#contact" className="btn-primary group">
              <span className="relative">Request Consultation</span>
            </a>
            <PhoneLink className="btn-secondary group">
              <span className="relative">Call (305) 371-5060</span>
            </PhoneLink>
          </div>
        </div>
      </header>

      {/* Credentials Bar */}
      <section className="section-padding-sm bg-midnight border-t border-bone/10">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
              {/* Florida Bar */}
              <div className="group">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-crimson/40 transition-all duration-300 group-hover:border-crimson group-hover:scale-110">
                  <svg className="w-6 h-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-display text-xl font-bold text-bone mb-1">Florida Bar</div>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">Licensed 1996</div>
              </div>

              {/* Federal Court */}
              <div className="group">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-crimson/40 transition-all duration-300 group-hover:border-crimson group-hover:scale-110">
                  <svg className="w-6 h-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div className="font-display text-xl font-bold text-bone mb-1">Federal Court</div>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">Southern District FL</div>
              </div>

              {/* Tulane JD */}
              <div className="group">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-crimson/40 transition-all duration-300 group-hover:border-crimson group-hover:scale-110">
                  <svg className="w-6 h-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="font-display text-xl font-bold text-bone mb-1">Tulane JD</div>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">Law School 1996</div>
              </div>

              {/* 25+ Years */}
              <div className="group">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-crimson/40 transition-all duration-300 group-hover:border-crimson group-hover:scale-110">
                  <svg className="w-6 h-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="font-display text-xl font-bold text-bone mb-1">25+ Years</div>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">Trial Experience</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="section-padding-sm bg-bone border-t border-midnight/10">
        <div className="container-custom">
          <ScrollReveal>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12 uppercase tracking-wide">
              Awards & Recognition
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Avvo Rating */}
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-crimson mb-2">8.6/10</div>
                  <div className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight mb-1">Avvo Rating</div>
                  <div className="font-body text-xs text-midnight/60">Excellent</div>
                </div>

                {/* Cases */}
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-crimson mb-2">1,550+</div>
                  <div className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight mb-1">Cases</div>
                  <div className="font-body text-xs text-midnight/60">29 Years Experience</div>
                </div>

                {/* Client Reviews */}
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-crimson mb-2">5.0/5.0</div>
                  <div className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight mb-1">Client Reviews</div>
                  <div className="font-body text-xs text-midnight/60">20 Reviews (Avvo)</div>
                </div>
              </div>

              <div className="border-t border-midnight/10 pt-8">
                <div className="font-sans text-xs uppercase tracking-wider text-center text-midnight/60 mb-4">Honors</div>
                <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
                  <div className="font-body text-sm text-midnight/80">
                    <span className="font-semibold">2022:</span> Client's Choice Award (Avvo)
                  </div>
                  <div className="font-body text-sm text-midnight/80">
                    <span className="font-semibold">2022:</span> Best DUI Lawyers in Miami (Expertise.com)
                  </div>
                  <div className="font-body text-sm text-midnight/80">
                    <span className="font-semibold">2021:</span> Best DUI Lawyer in Miami (Expertise.com)
                  </div>
                  <div className="font-body text-sm text-midnight/80">
                    <span className="font-semibold">2020:</span> Best DUI Lawyer in Miami (Expertise.com)
                  </div>
                  <div className="font-body text-sm text-midnight/80">
                    <span className="font-semibold">2016:</span> Best DUI Lawyers in Miami (Expertise.com)
                  </div>
                  <div className="font-body text-sm text-midnight/80">
                    <span className="font-semibold">11 Peer Endorsements</span> from Florida Attorneys
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Practices Section */}
      <section className="section-padding bg-bone">
        <div className="container-custom">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Two Practices. One Standard.
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 md:gap-0">
            {/* Family Law */}
            <ScrollReveal delay={100}>
              <div className="md:pr-12 md:border-r md:border-titanium transition-all duration-300 ease-out hover:scale-[1.02]">
                <h4 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold">
                  <Link href="/family-law" className="hover:text-crimson transition-colors duration-300">
                    FAMILY LAW
                  </Link>
                </h4>
                <div className="font-sans text-sm uppercase tracking-wider text-titanium mb-4">
                  500+ Family Law Cases | 29 Years
                </div>
                <p className="font-body text-lg md:text-xl leading-relaxed mb-6 text-midnight/80">
                  Custody. Assets. Future. Your family's foundation under attack requires precision, strategy, and resolve. According to Florida Bar statistics, only 3% of attorneys maintain active practice in both family law and criminal defense—providing unique insight when cases overlap.
                </p>
                <p className="font-body text-lg md:text-xl font-semibold text-midnight mb-2">
                  I protect what matters most.
                </p>
                <p className="font-sans text-xs text-midnight/60 italic">
                  Source: Florida Bar Family Law Section, 2024
                </p>
              </div>
            </ScrollReveal>

            {/* Criminal Defense */}
            <ScrollReveal delay={200}>
              <div className="md:pl-12 transition-all duration-300 ease-out hover:scale-[1.02]">
                <h4 className="font-display text-2xl md:text-3xl font-bold mb-6 text-steel">
                  <Link href="/criminal-defense" className="hover:text-crimson transition-colors duration-300">
                    CRIMINAL DEFENSE
                  </Link>
                </h4>
                <div className="font-sans text-sm uppercase tracking-wider text-titanium mb-4">
                  750+ Criminal Defense Cases | 29 Years
                </div>
                <p className="font-body text-lg md:text-xl leading-relaxed mb-6 text-midnight/80">
                  Your freedom. Your name. Your life as you know it. Charges don't disappear by hoping. They end through preparation and execution. Former Public Defender experience (1997-2006) provides critical insight into prosecution strategies.
                </p>
                <p className="font-body text-lg md:text-xl font-semibold text-midnight mb-2">
                  I end what shouldn't begin.
                </p>
                <p className="font-sans text-xs text-midnight/60 italic">
                  Source: Miami-Dade Public Defender's Office Records
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Trial */}
          <ScrollReveal delay={300}>
            <div className="mt-20 pt-20 border-t border-titanium/30 text-center max-w-4xl mx-auto">
              <h4 className="font-display text-2xl md:text-3xl font-bold mb-6">
                TRIAL
              </h4>
              <p className="font-body text-lg md:text-xl leading-relaxed text-midnight/80 mb-2">
                The courtroom is where preparation meets consequence. 29 years of trial advocacy across Florida state and federal courts. I know what the other side doesn't.
              </p>
              <p className="font-sans text-xs text-midnight/60 italic">
                Last Updated: March 2025
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-midnight text-bone">
        <div className="container-custom">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Outcomes Speak
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Case 1 */}
            <ScrollReveal delay={100}>
              <div className="border border-titanium/40 p-8 transition-all duration-300 ease-out hover:border-crimson/60 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(139,0,0,0.2)] group">
                <div className="font-display text-4xl font-bold text-crimson mb-4 transition-transform duration-300 group-hover:scale-110">
                  $2.1M
                </div>
                <h5 className="font-sans font-semibold uppercase tracking-wide mb-4 text-sm text-bone/70">
                  High-Net-Worth Family Case
                </h5>
                <p className="font-body text-base leading-relaxed text-bone/80">
                  Marital assets protected. Full custody secured. Opposition learned the cost of underestimation.
                </p>
              </div>
            </ScrollReveal>

            {/* Case 2 */}
            <ScrollReveal delay={200}>
              <div className="border border-titanium/40 p-8 transition-all duration-300 ease-out hover:border-crimson/60 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(139,0,0,0.2)] group">
                <div className="font-display text-4xl font-bold text-crimson mb-4 transition-transform duration-300 group-hover:scale-110">
                  Full Recovery
                </div>
                <h5 className="font-sans font-semibold uppercase tracking-wide mb-4 text-sm text-bone/70">
                  Faena House Litigation
                </h5>
                <p className="font-body text-base leading-relaxed text-bone/80">
                  Construction defect case. Client made whole. The other side's attorneys are no longer returning calls.
                </p>
              </div>
            </ScrollReveal>

            {/* Case 3 */}
            <ScrollReveal delay={300}>
              <div className="border border-titanium/40 p-8 transition-all duration-300 ease-out hover:border-crimson/60 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(139,0,0,0.2)] group">
                <div className="font-display text-4xl font-bold text-crimson mb-4 transition-transform duration-300 group-hover:scale-110">
                  Dismissed
                </div>
                <h5 className="font-sans font-semibold uppercase tracking-wide mb-4 text-sm text-bone/70">
                  Criminal Defense - Domestic Violence
                </h5>
                <p className="font-body text-base leading-relaxed text-bone/80">
                  Charges withdrawn. Record clean. Client's freedom intact. The prosecution knew they couldn't prove what wasn't true.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Bo Porta */}
      <section className="section-padding bg-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Why Clients Choose Bo Porta
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2">Florida Bar Since 1996</h4>
                  <p className="font-body text-midnight/80">Member in good standing. U.S. District Court Southern District of Florida.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2">1,550+ Cases Over 29 Years</h4>
                  <p className="font-body text-midnight/80">Bench trials, jury trials, federal and state courts across South Florida.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2">Tulane Law School J.D.</h4>
                  <p className="font-body text-midnight/80">Additional studies at Cambridge University and Université de Paris.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2">Former U.S. Magistrate Judge Law Clerk</h4>
                  <p className="font-body text-midnight/80">1996-1997. Federal court experience and judicial insight.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2">Specially Appointed Public Defender</h4>
                  <p className="font-body text-midnight/80">Miami-Dade County 1997-2006. Extensive criminal trial experience.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2">Dual Practice Expertise</h4>
                  <p className="font-body text-midnight/80">Family law AND criminal defense. Strategic advantage when cases overlap.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Peer Recognition */}
      <section className="section-padding bg-midnight text-bone">
        <div className="container-custom max-w-5xl">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wide">
              Recognized By Peers
            </h3>
            <p className="font-body text-lg text-center text-bone/70 mb-20 max-w-3xl mx-auto">
              11 attorney endorsements from Florida criminal defense and family law practitioners who have worked with, opposed, or observed Bo Porta in court.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={100}>
              <div className="border border-bone/20 p-8">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-crimson" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="font-body text-bone/80 mb-6 leading-relaxed">
                  "I have known Bo since he graduated from law school... He has distinguished himself with judges and his colleagues based upon his professionalism and knowledge of the law. His clients are well served with him as their advocate."
                </p>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">
                  — Barry Wax
                </div>
                <div className="font-sans text-xs text-bone/50">
                  Criminal Defense Attorney, Miami
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border border-bone/20 p-8">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-crimson" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="font-body text-bone/80 mb-6 leading-relaxed">
                  "I endorse this lawyer without any reservation whatsoever... Any client in trouble with the law would be well-served to be represented by Bo Porta. Bo is an effective advocate and is known for delivering excellent results."
                </p>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">
                  — Robert Malove
                </div>
                <div className="font-sans text-xs text-bone/50">
                  Criminal Defense Attorney, Florida
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="border border-bone/20 p-8">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-crimson" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="font-body text-bone/80 mb-6 leading-relaxed">
                  "He is an aggressive advocate that really looks out for his clients."
                </p>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">
                  — Patrick McGeehan
                </div>
                <div className="font-sans text-xs text-bone/50">
                  Former Miami-Dade Police Officer, Criminal Defense Attorney
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center border-t border-bone/20 pt-12">
              <div className="font-sans text-sm uppercase tracking-wider text-bone/60 mb-6">Client Satisfaction</div>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div>
                  <div className="font-display text-4xl font-bold text-crimson">5.0/5.0</div>
                  <div className="font-body text-sm text-bone/70">20 Client Reviews (Avvo)</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-bone/20"></div>
                <div>
                  <div className="font-display text-4xl font-bold text-crimson">8.6/10</div>
                  <div className="font-body text-sm text-bone/70">Avvo Rating (Excellent)</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-bone/20"></div>
                <div>
                  <div className="font-display text-4xl font-bold text-crimson">2022</div>
                  <div className="font-body text-sm text-bone/70">Client's Choice Award</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="section-padding bg-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              The Approach
            </h3>
          </ScrollReveal>

          <div className="space-y-16">
            <ScrollReveal delay={100}>
              <div className="group">
                <h4 className="font-display text-2xl font-bold mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-crimson">
                  Consultation
                </h4>
                <p className="font-body text-lg leading-relaxed text-midnight/80">
                  You speak. I listen. We identify what must happen. No false promises. Only realistic paths to winning.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="group">
                <h4 className="font-display text-2xl font-bold mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-crimson">
                  Strategy
                </h4>
                <p className="font-body text-lg leading-relaxed text-midnight/80">
                  Every case has a pressure point. I find it. I apply force. They fold or we proceed.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="group">
                <h4 className="font-display text-2xl font-bold mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-crimson">
                  Execution
                </h4>
                <p className="font-body text-lg leading-relaxed text-midnight/80">
                  Negotiation when leverage exists. Trial when it doesn't. Either way, you're protected.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-midnight text-bone">
        <div className="container-custom max-w-4xl text-center">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-12 uppercase tracking-wide">
              Why Experience Matters
            </h3>
          </ScrollReveal>

          <div className="space-y-8 font-body text-lg md:text-xl leading-relaxed">
            <ScrollReveal delay={100}>
              <p className="text-bone/80">
                25 years means I've seen the move your opponent's attorney thinks is clever.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-bone/80">
                25 years means I know which judge responds to which argument.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-bone/80">
                25 years means when we walk into court, they know who's across the table.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-2xl font-semibold pt-8 text-bone">
                Preparation isn't everything. It's the only thing.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wide">
              The Clock Is Running
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-center mb-16 font-body text-lg md:text-xl leading-relaxed space-y-4 text-midnight/80">
              <p>Your spouse retained counsel.</p>
              <p>The prosecution filed charges.</p>
              <p>Their timeline began.</p>
              <p className="text-2xl font-bold pt-4 text-midnight">When does yours?</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-midnight text-bone p-12 mb-12 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(10,25,41,0.3)]">
              <div className="text-center mb-8">
                <div className="font-display text-2xl font-bold mb-2">BO PORTA</div>
                <div className="font-sans text-sm uppercase tracking-wider text-bone/60">
                  Family & Criminal Defense Trial Lawyer
                </div>
              </div>

              <div className="text-center font-body space-y-2 mb-8 text-bone/80">
                <p>2000 S. Dixie Hwy, Suite 108</p>
                <p>Miami, Florida 33133</p>
                <p className="text-bone/60 text-sm pt-2">Mon-Fri: 9:00 AM – 5:00 PM</p>
                <p className="text-bone/60 text-sm">By Appointment Only</p>
              </div>

              <div className="text-center mb-12">
                <PhoneLink className="font-display text-4xl md:text-5xl font-bold text-crimson hover:text-crimson/80 transition-all duration-300 hover:tracking-wider inline-block">
                  (305) 371-5060
                </PhoneLink>
              </div>

              <div className="text-center">
                <a
                  href="mailto:info@boporta.com"
                  className="font-sans text-lg text-bone/60 hover:text-bone transition-colors duration-300"
                >
                  info@boporta.com
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={300}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight text-bone section-padding-sm">
        <div className="container-custom text-center font-sans text-sm">
          <div className="mb-6">
            <span className="font-display text-2xl font-bold">BOLÍVAR C. PORTA, ESQ.</span>
          </div>
          <p className="text-bone/80 mb-2">
            Florida Bar Member Since 1996 • Federal Court Admitted
          </p>
          <p className="text-bone/70 mb-2">
            Avvo 8.6 Rating (Excellent) • 1,550+ Cases in 29 Years
          </p>
          <p className="text-bone/60 mb-4 text-xs">
            Best DUI Lawyer Miami 2016-2022 (Expertise.com) • Client's Choice Award 2022 (Avvo)
          </p>
          <div className="w-16 h-px bg-bone/20 mx-auto my-6"></div>
          <p className="text-titanium mb-2">
            Family Law • Criminal Defense • Trial Attorney
          </p>
          <p className="text-titanium text-xs">
            bolivarporta.com
          </p>
          <p className="text-titanium mt-4 text-xs">
            © 1998–2025 Bolívar C. Porta, P.A. • Appointments by arrangement only
          </p>
        </div>
      </footer>
    </main>
  );
}
