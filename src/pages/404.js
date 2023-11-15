import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="center-wrapper">
            <h1>Oh snap!</h1>
            <p>The page you are looking for doesn't exist yet, the sadness is real</p>
            <a className="button-link" style={{marginTop: "1rem"}} href="/">Return home</a>
          </div>
        </div>
      </div>
    </section>
    <div>
      
    </div>
  </Layout>
);

export default NotFoundPage;
