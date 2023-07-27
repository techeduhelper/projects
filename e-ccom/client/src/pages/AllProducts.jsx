import React, { useState, useEffect } from "react";
import Layout from "./../components/layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import { Prices } from "./PriceFilter";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState();
  // get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // load more product
  const handleLoadMoreProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/product/product-per-page/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    handleLoadMoreProduct();
  }, [page]);

  // get all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/product/product-per-page/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // get category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  // filter by category

  const handleFilter = (value, id) => {
    const allP = [...checked];
    if (value) {
      AllProducts.push(id);
    } else {
      all = allP.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  useEffect(() => {
    if (!checked.length || radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  // get product using filter

  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filter", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Home -best offers for you"}>
      <div className="row container-fluid items-center">
        <div className="col-md-3 mt-3">
          <span
            className="mb-3"
            style={{
              color: "darkblue",
              fontSize: "1.5rem",
              fontFamily: "cursive",
            }}
          >
            Filter by Category
          </span>
          {categories.map((c) => (
            <div className="d-flex flex-column">
              <li style={{ listStyle: "none" }}>
                <input
                  // name={c.name}
                  type="checkbox"
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                />
                <label>{c.name}</label>
              </li>
            </div>
          ))}
          <span
            className="mb-3 mt-3"
            style={{
              color: "darkblue",
              fontSize: "1.5rem",
              fontFamily: "cursive",
            }}
          >
            Filter by Price
          </span>
          {Prices.map((pr) => (
            <div className="d-flex flex-column">
              <li style={{ listStyle: "none" }}>
                <input
                  type="radio"
                  name="price"
                  key={pr._id}
                  value={pr.array}
                  onChange={(e) => setRadio(e.target.value)}
                />
                &nbsp;
                <label>{pr.name}</label>
              </li>
            </div>
          ))}
          <div className="d-flex flex-column mt-3">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              Clear Filters
            </button>
          </div>
        </div>
        <div className="col-md-9 mt-1">
          <div
            className="row mb-3 d-flex gap-2"
            style={{ marginTop: "1rem", padding: "0.5rem" }}
          >
            {products.map((p) => (
              <div
                className="card mt-3"
                key={p._id}
                style={{
                  textDecoration: "none",
                  color: "black",
                  width: "14rem",
                }}
              >
                <Link to={`/product/${p.slug}`}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top p-2"
                    alt={p.name}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">₹ {p.price}</p>
                </div>
                <div className="btn-container d-flex justify-content-between mb-3">
                  <button className="btn btn-outline-success">Buy Now</button>
                  <button className="btn btn-outline-danger">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="loading-btn m-3 p-2">
            {products && products.length < total && (
              <button
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "loading..." : "see more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
