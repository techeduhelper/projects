import React from "react";
import Img2 from "../assets/girls.png";
import Img3 from "../assets/mens.png";
import { Link } from "react-router-dom";

const HomeCarosel = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <Link className="carousel-item active">
            <img src={Img2} className="d-block w-100" alt="..." />
          </Link>
          <Link className="carousel-item" to={"/products"}>
            <img src={Img3} className="d-block w-100" alt="..." />
          </Link>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HomeCarosel;
