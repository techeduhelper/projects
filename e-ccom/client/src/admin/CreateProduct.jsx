import React from "react";
import Layout from "../components/layout/Layout";
import AdminMenu from "../components/layout/AdminMenu";

const CreateProduct = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row" style={{ margin: "0" }}>
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div
              className="card"
              style={{ marginTop: "1rem", padding: "0.5rem" }}
            >
              <h2>Create Your Product</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
