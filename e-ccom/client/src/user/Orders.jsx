import React from "react";
import Layout from "../components/layout/Layout";
import UserMenu from "../components/layout/UserMenu";
import { useAuth } from "../context/auth";

const Orders = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row" style={{ margin: "0" }}>
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div
              className="card"
              style={{
                marginTop: "1rem",
                padding: "0.5rem",
              }}
            >
              <h3>{`Hey! ${auth?.user?.name} see your orders`}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
