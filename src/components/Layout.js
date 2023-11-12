import React, { useState, useEffect } from "react";
// import * as React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from '@reach/router';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/bulma-style.sass";
import "../style/custom-style.sass";
import "../style/global.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import brandmark from "../img/brand_assets/brandmark_main_black.svg"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasShownSplashBefore = sessionStorage.getItem('hasShownSplash');

    if (location.pathname === '/' && !hasShownSplashBefore) {
      setShowSplash(true);

      setTimeout(() => {
        setShowSplash(false);
        // sessionStorage.setItem('hasShownSplash', 'true');
      }, 2500);
    } else {
      setShowSplash(false);
    }
  }, [location]);

  // const showSplash = true;

  return (
    <div>
      <Helmet>
        <html className="has-navbar-fixed-top" lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/pictoral_mark_alt1.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <div>
      {showSplash && (
        <div className="splash">
        <div className="splash-column">
            <img id="splash-logo" src={brandmark} alt="Brandmark" />
        </div>
        <div className="splash-column">
          <section className="stage">
          <figure className="sphere">
              <span className="shadow"></span>
            </figure>
          </section>
        </div>
    </div>
    
      )}
      {!showSplash && (
        <div><Navbar /><main className="payload">{children}</main><Footer /></div>
      )}
    </div>
    </div>
  );
};

export default TemplateWrapper;
