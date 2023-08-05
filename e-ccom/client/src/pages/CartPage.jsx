import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const Navigate = useNavigate();

  // Delete Item from cart
  const removeItem = () => {
    let new_cart = [...cart];
    for (let i of Object.keys(new_cart)) {
      if (!i) {
        continue;
      }
      console.log("item", JSON.parse(localStorage.getItem(`CART${i}`)));
      localStorage.removeItem(`CART${i}`);
      delete new_cart[parseInt(i)];
      break;
    }
    setCart([...Object.values(new_cart)]);
  };
  return (
    <Layout>
      <div className="row text-center">
        <div className="col-md-12">
          <h1 className="mt-2 ">{`Hello ${
            auth?.token && auth?.user?.name
          }`}</h1>
          <h4>
            {cart?.length > 1
              ? `${cart?.length} Items in Your Cart ${
                  auth?.token ? "" : `Please login to Checkout`
                }`
              : `Your cart is Empty`}
          </h4>

          <div className="row container-fluid mb-2">
            <div className="col-md-6">
              {cart?.map((p) => (
                <div className="row container-fluid p-5 m-2 card flex-row">
                  <div className="col-md-4">
                    <Link to={`/product/${p.slug}`}>
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top p-2"
                        alt={p.name}
                        height={"100px"}
                        width="70px"
                      />
                    </Link>
                  </div>
                  <div className="d-flex flex-column col-md-7 align-items-start mt-2">
                    <h3>{p.name}</h3>
                    <p className="text-start">
                      {p.description.substring(0, 40)}
                    </p>
                    <h4>Price: ₹{p.price}</h4>
                    <button className="btn btn-danger" onClick={removeItem}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
