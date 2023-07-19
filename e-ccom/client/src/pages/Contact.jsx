import React from "react";
import Layout from "../components/layout/Layout";
import Img from "../assets/contact.jpg";
import { MdEmail } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";
import { CiPhone } from "react-icons/ci";

const Contact = () => {
  const descp =
    "Any query and info about the product to call & and email us anytime we 24*7 available";
  return (
    <Layout title={"Contact- E-comm"} description={descp}>
      <div className="contact-page row text-center p-3">
        <div className="col-md-8">
          <img className="contact-image" src={Img} alt="" />
        </div>
        <div className="col-md-4 contact-details">
          <span className="con-heading">Contact us</span>
          <span>{descp}</span>
          <span>
            <MdEmail />: ecomm@support.com{" "}
          </span>
          <span>
            <FiHeadphones />: 1800-0000-0000(Toll-free)
          </span>
          <span>
            <CiPhone />: 8617559654
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
