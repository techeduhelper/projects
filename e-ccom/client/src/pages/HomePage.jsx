import React, { useState, useEffect } from "react";
import Layout from "./../components/layout/Layout";
import HomeCarosel from "./HomeCarosel";
import useCategory from "../hooks/useCategory.js";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const categories = useCategory();
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"Home -best offers for you"}>
      <div className="row container-fluid mt-3">
        <HomeCarosel />
      </div>
      <div>
        {categories?.map((c) => (
          <div className="category">{c.name}</div>
        ))}
      </div>
      <div className="col-md-12 text-center mt-3 mb-3">
        <h3 className="text-capitalize" style={{ color: "#6C7B8B" }}>
          --- latest products ---
        </h3>
      </div>
      <div
        className="row d-flex m-2 gap-2 justify-content-center"
        style={{ marginTop: "1rem", padding: "0.5rem" }}
      >
        {products?.map((p) => (
          <div className="col-md-2 card m-1">
            <Link to={`/product/${p.slug}`}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top p-2"
                alt={p.name}
                height="250px"
              />
            </Link>
            <div class="card-body pb-5 pt-2 px-2">
              {" "}
              <b style={{ fontSize: "large", color: "#6C7B8B" }}>{p.name}</b>
              <br /> <span>{p.price}$</span>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
