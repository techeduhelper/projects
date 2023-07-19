import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
        <ToastContainer /> {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "E-comm - shopping app",
  description: "maximum category products are available here",
  keywords: "shop, products, electronics product",
  author: "Maniruddin",
};
export default Layout;
