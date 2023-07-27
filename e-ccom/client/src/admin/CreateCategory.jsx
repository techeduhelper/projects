import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import AdminMenu from "../components/layout/AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth.jsx";
 
const CreateCategory = () => {
  const [auth] = useAuth();
  const [categories, setCategories] = useState([]);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went to wrong");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row" style={{ margin: "0" }}>
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div
              className="card"
              style={{ marginTop: "1rem", padding: "0.5rem" }}
            >
              <h2>{auth?.user?.name} manage category</h2>
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Category Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {categories.map((c) => (
                        <td key={c._id}>{c.name}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
