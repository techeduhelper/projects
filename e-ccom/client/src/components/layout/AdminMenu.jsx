import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
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
                "linear-gradient(90deg, rgba(202,252,70,0.9949229691876751) 15%, rgba(251,63,228,1) 100%)",
            }}
          >
            Admin Panel
          </h3>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create product
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
          <NavLink
            to="/dashboard/admin/Products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/analytics"
            className="list-group-item list-group-item-action"
          >
            Analytics
          </NavLink>
          <NavLink
            to="/dashboard/admin/promotions"
            className="list-group-item list-group-item-action"
          >
            Promotions
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
