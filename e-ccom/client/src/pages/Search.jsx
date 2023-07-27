import React from "react";
import Layout from "./../components/layout/Layout";
import { useSearch } from "../context/search";
import { Link } from "react-router-dom";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"search results"}>
      <div className="container">
        <div className="text-center">
          <h2>Search Results</h2>
          <h4>
            {values?.results.length < 1
              ? "No products Found"
              : `Found ${values?.results.length}`}
          </h4>
          <div
            className="row mb-3 d-flex gap-2"
            style={{ marginTop: "1rem", padding: "0.5rem" }}
          >
            {values?.results.map((p) => (
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
                <div className="card-body text-left">
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
        </div>
      </div>
    </Layout>
  );
};

export default Search;
