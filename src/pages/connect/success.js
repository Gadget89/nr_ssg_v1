import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

// eslint-disable-next-line
export default () => (
  <>
    <Helmet>
      <title>Success!</title>
    </Helmet>
    <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Hooray!</h1>
          <p>Your message is on the way and I'm thrilled that you reached out! Thank you so much! I promise to respond as soon as possible. In the meantime, go ahead and keep on being amazing!</p>
          <a className="button-link" style={{marginTop: "1rem"}} href="/">Return home</a>
        </div>
      </div>
    </section>
  </Layout>
  </>
);
