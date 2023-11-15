import React from "react";
import Layout from "../../components/Layout";
import SocialMedia from "../../components/SocialMediaLinks";

// eslint-disable-next-line
export default () => (
  <>
    <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="center-wrapper">
            <h1>Hooray!</h1>
            <p>Your message is on the way and I'm thrilled that you reached out! Thank you so much! I promise to respond as soon as possible. In the meantime, go ahead and keep on being amazing!</p>
            <div className="social-media-icons">
              <a 
                className="button-link" 
                style={{margin: "1rem 0"}} 
                href="/"
              >
                Return home
              </a>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  </Layout>
  </>
);
