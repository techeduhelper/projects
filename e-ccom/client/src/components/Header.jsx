import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
import { useAuth } from "../context/auth.jsx";
import { toast } from "react-toastify";
import { MdAccountCircle } from "react-icons/md";
import SearchInput from "../admin/Form/SearchInput.jsx";
import { useCart } from "../context/cart.jsx";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background:
            "linear-gradient(90deg, rgba(251,135,63,1) 0%, rgba(155,70,252,1) 100%)",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <HiShoppingBag style={{ fontSize: "2rem" }} />
            ComixGrid
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <SearchInput />
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Shop
                </NavLink>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <div className="dropdown">
                    <button
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
                        backgroundColor: "greenyellow",
                        fontWeight: "500",
                        borderRadius: "5px",
                        padding: "0.5rem",
                      }}
                      className=" dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <MdAccountCircle
                        style={{
                          fontSize: "1.7rem",
                          paddingRight: "3px",
                        }}
                      />
                      {auth?.user?.name}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          className="dropdown-item"
                          to="/login"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              <li className="nav-item">
                <NavLink className="btn btn-danger" to="/cart">
                  <FaShoppingCart style={{ fontSize: "1.5rem" }} />
                  <span
                    class="badge badge-light"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {cart?.length}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
