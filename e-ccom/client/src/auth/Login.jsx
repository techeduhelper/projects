import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../context/auth.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something Wrong");
    }
  };

  return (
    <Layout>
      <div className="login-outer">
        <form
          className="login-form col-md-4 d-flex itmes-center"
          onSubmit={handleLogin}
        >
          <h1 className="Login-heading ">Login Here</h1>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div
            style={{
              cursor: "pointer",
              marginBottom: "0.5rem",
              color: "black",
            }}
            onClick={() => {
              navigate("/forget-password");
            }}
          >
            Forgot Password
          </div>
          <button type="submit" className="login-btn btn-btn-danger mt-2">
            Log in
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
