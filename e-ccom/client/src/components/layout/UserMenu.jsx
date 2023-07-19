import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div
        className="text-center"
        style={{
          marginTop: "1rem",
          backgroundColor: "white",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div className="list-group">
          <h3
            style={{
              background:
                "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
            }}
          >
            Dashboard
          </h3>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
