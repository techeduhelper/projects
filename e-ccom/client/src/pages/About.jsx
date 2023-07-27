import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container-fluid d-flex">
        <div className="row col-md-8 text-center m-auto mt-4">
          <h1 style={{ textAlign: "center", marginTop: "1rem" }}>About us</h1>
          <span style={{ textAlign: "justify", fontSize: "1.5rem" }}>
            ComixGrid is the process of buying and selling goods and services
            online. It has become increasingly popular in recent years, as it
            offers a convenient and efficient way to shop. There are many
            advantages to using e commerce, including the ability to compare
            prices, access a wider range of products, and enjoy greater
            convenience. It is also typically faster and more convenient than
            traditional shopping methods. E-commerce has revolutionized the way
            businesses operate and has created new opportunities for
            entrepreneurs around the world. If you’re thinking of starting an
            online business, there’s no better time than now. With the right
            platform and a bit of creativity, you can build a successful
            e-commerce business that will thrive for years to come. Thanks for
            reading!
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default About;
