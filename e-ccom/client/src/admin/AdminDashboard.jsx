import React from "react";
import Layout from "../components/layout/Layout";
import AdminMenu from "../components/layout/AdminMenu";
import { useAuth } from "../context/auth.jsx";

const AdminDashboard = () => {
  const [auth] = useAuth();
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
              style={{
                marginTop: "1rem",
                padding: "0.5rem",
                background:
                  "linear-gradient(90deg, rgba(251,157,63,1) 0%, rgba(82,67,165,1) 54%, rgba(110,252,70,0.9949229691876751) 100%)",
                color: "white",
              }}
            >
              <h2 style={{ textTransform: "capitalize" }}>
                {`Welcome ${auth?.user?.name}`}
              </h2>
              <p>{`Email: ${auth?.user?.email}`}</p>
              <p>{`Mob: ${auth?.user?.phone}`}</p>
              <p
                style={{ textTransform: "capitalize" }}
              >{`Address: ${auth?.user?.address}`}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
