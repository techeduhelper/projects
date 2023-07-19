import React, { useState } from "react";
import Layout from "./../components/layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        phone,
        address,
        pin,
        answer,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something Wrong");
    }
  };

  return (
    <>
      <Layout>
        <div className="register-outer">
          <form className="register-form" onSubmit={handleSubmit}>
            <h1 className="text-center">Register Here</h1>

            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputName1"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="exampleInputPhone1"
                placeholder="Enter your phone"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputAddress"
                placeholder="Enter your Address"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="form-control"
                id="exampleInputPin1"
                placeholder="Enter your pin"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputPin1"
                placeholder="your favourite pet name?"
              />
            </div>
            <div>
              <button type="submit" className="text-center btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
