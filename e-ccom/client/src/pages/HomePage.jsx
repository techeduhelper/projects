import React from "react";
import Layout from "./../components/layout/Layout";
import { useAuth } from "../context/auth.jsx";

const HomePage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout>
      <h1 className="text-4xl font-bold">Home Page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
