import React from 'react';
import { Helmet } from 'react-helmet';
// import { FaCheckCircle } from 'react-icons/fa';
// import { IoMdClose, IoMdDoneAll } from 'react-icons/io';
import ApiUseSuggestion from '../components/home/ApiUseSuggestion';
import HowVerifyEmail from '../components/home/HowVerifyEmail';
import PricingSection from '../components/home/pricing/page';
import TestimonialSection from '../components/home/TestimonialSection';
import WhyUse from '../components/home/WhyUse';
import AccordionFags from './../components/client/AccordionFaqs';
import Hero from '../components/home/Hero';


const Home = () => {


    return (
        <>
            {/* for seo */}
            <Helmet>
                <title>Gmail Checker - Validate and Check Gmail Addresses | PureChecker</title>
                <meta name="description" content="Use PureChecker to validate Gmail addresses. Check if Gmail is disposable, exists, or is valid. Accurate and fast Gmail checker tool." />
                <meta name="keywords" content="Gmail checker, validate Gmail, check Gmail existence, disposable Gmail checker, email validation tool" />
                <link rel="canonical" href="http://localhost:5173/" />
                {/* social  */}
                <meta property="og:title" content="Gmail Checker - Validate and Check Gmail Addresses | PureChecker" />
                <meta property="og:description" content="Use PureChecker to validate Gmail addresses. Check if Gmail is disposable, exists, or is valid. Accurate and fast Gmail checker tool." />
                <meta property="og:url" content="http://localhost:5173/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="http://localhost:5173/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gmail Checker - Validate and Check Gmail Addresses | PureChecker" />
                <meta name="twitter:description" content="Use PureChecker to validate Gmail addresses. Check if Gmail is disposable, exists, or is valid. Accurate and fast Gmail checker tool." />
                <meta name="twitter:image" content="http://localhost:5173/twitter-image.jpg" />
                {/* social end */}
                {/* Schema */}
                <script type="application/ld+json">
                    {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "http://localhost:5173/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "http://localhost:5173/?s={search_term_string}",
                "query-input": "required name=search_term_string"
                }
                }
                `}
                </script>
                {/* Schema end */}
            </Helmet>

            {/* page components */}
            <Hero />
            <WhyUse />
            <HowVerifyEmail />
            <ApiUseSuggestion />
            <PricingSection />
            <TestimonialSection />
            <AccordionFags />
        </>
    )
}

export default Home
