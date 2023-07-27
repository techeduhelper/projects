import React, { useState, useEffect } from "react";
import Layout from "./../components/layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeCarosel from "./HomeCarosel";

const HomePage = () => {
  return (
    <Layout title={"Home -best offers for you"}>
      <div className="row container-fluid mt-3">
        <HomeCarosel />
      </div>
    </Layout>
  );
};

export default HomePage;
