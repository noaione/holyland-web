import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class HolylandDocument extends Document {
    render() {
        return (
            <Html prefix="og: https://ogp.me/ns#" lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap"
                        rel="stylesheet"
                    />
                    <meta property="og:url" content="https://holyland.my.id" />
                    <meta name="theme-color" content="#0C4B4A" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="og:image" content="/assets/splash.png" />
                    <link rel="icon" type="image/png" href="/holyland.png" />
                    <link rel="icon" href="/holyland.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default HolylandDocument;
