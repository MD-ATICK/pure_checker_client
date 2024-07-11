import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'


function UseHelmet({ title, description, param }) {
    return (
        <div>
            <Helmet>
                <title>{title} | PureChecker</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="Gmail checker, validate Gmail, check Gmail existence, disposable Gmail checker, email validation tool" />
                <link rel="canonical" href={`https://purechecker.com/${param}`} />
                {/* social  */}
                <meta property="og:title" content={`${title} | PureChecker`} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={`https://purechecker.com/${param}`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://purechecker.com/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title + ' | Pure Checker'} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://purechecker.com/twitter-image.jpg" />
                {/* social end */}
                {/* Schema */}
                <script type="application/ld+json">
                    {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://purechecker.com/${param}",
                    "potentialAction": {
                        "@type": "SearchAction",
                    "target": "https://purechecker.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
                }
                `}
                </script>
                {/* Schema end */}
            </Helmet>

        </div>
    )
}

UseHelmet.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    param: PropTypes.string
}

export default UseHelmet


