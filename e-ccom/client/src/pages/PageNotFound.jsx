import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="page-not-found">
        <h1>404</h1>
        <span className="pnf-subheading">😩OPS! Page Not Found</span>
        <Link className="pnf-button" to="/">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
