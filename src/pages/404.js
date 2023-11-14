import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Oh snap!</h1>
      <p>The page you are looking for doesn't exist yet, the sadness is real</p>
      <a className="button-link" style={{marginTop: "1rem"}} href="/">Return home</a>
    </div>
  </Layout>
);

export default NotFoundPage;
