import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth.jsx";
import UserMenu from "../components/layout/UserMenu";

const Profile = () => {
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
                background:
                  "linear-gradient(90deg, rgba(251,122,63,1) 0%, rgba(144,187,66,1) 36%, rgba(174,144,66,1) 43%, rgba(92,165,67,1) 54%, rgba(252,70,227,0.9949229691876751) 100%)",
                color: "white",
                height: "auto",
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

export default Profile;
