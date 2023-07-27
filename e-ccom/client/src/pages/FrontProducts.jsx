import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FrontProducts = () => {
  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const [similarProducts, setSimilarProducts] = useState([]);

  // get Single Product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping);
      setCategory(data.product.category.name);
      getSimilarProducts(data.product._id, data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  // get similar products
  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(`/api/v1/product/${pid}/${cid}`);
      setSimilarProducts(data?.setSimilarProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="container-fluid row product-container mb-4">
        <div className="col-md-6 text-center mb-4">
          <div className="border product-photo">
            <img src={`/api/v1/product/product-photo/${id}`} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="bold">{name}</h2>
          <span className="mb-3">Price: ₹{price}</span>
          <p>{category}</p>
          <hr />
          <h4 className="bold">About this item:</h4>
          <p
            className="text-justify mt-2"
            style={{ fontFamily: "-moz-initial" }}
          >
            {description}
          </p>
          <hr />
          <button className="btn btn-outline-danger">Add to cart</button>
        </div>
        <div className="col-md-12">{JSON.stringify(similarProducts)}</div>
      </div>
    </Layout>
  );
};

export default FrontProducts;
