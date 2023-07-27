import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import AdminMenu from "../components/layout/AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth.jsx";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import CategoryForm from "./Form/CategoryForm";
import Dialog from "@mui/material/Dialog";

const CreateCategory = () => {
  const [auth] = useAuth();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdateName] = useState();
  const [updatedDesc, setUpdateDesc] = useState();

  const handleClose = () => {
    setOpenDialog(false);
  };
  // create category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", {
        name,
        description,
      });
      if (data?.success) {
        toast.success(`${name} is created`);
        setName("");
        setDescription("");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went to wrong");
    }
  };

  // get category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data.success) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went to wrong");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  // updated category
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName, description: updatedDesc }
      );
      if (data.success) {
        toast.success(`${updatedName} successfully updated`);
        setSelected(null);
        setUpdateName("");
        setUpdateDesc("");
        handleClose();
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // deleting category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`Category successfully Deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row" style={{ margin: "0" }}>
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mb-3">
            <div
              className="card"
              style={{ marginTop: "1rem", padding: "0.5rem" }}
            >
              <h2>{auth?.user?.name} manage category</h2>
              <div>
                <div className="mb-3 d-flex">
                  <CategoryForm
                    handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                  />
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Category Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((c) => (
                      <>
                        <tr>
                          <td key={c._id}>{c.name}</td>
                          <td>{c.description}</td>
                          <td className="d-flex">
                            <button
                              type="button"
                              class="btn btn-success m-1 d-flex align-items-center"
                              onClick={() => {
                                setOpenDialog(!openDialog);
                                setUpdateName(c.name);
                                setUpdateDesc(c.description);
                                setSelected(c);
                              }}
                            >
                              <FaEdit
                                style={{
                                  fontSize: "1.2rem",
                                  paddingRight: "0.1rem",
                                }}
                              />
                              Edit
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger m-1 d-flex align-items-center"
                              onClick={() => {
                                handleDelete(c._id);
                              }}
                            >
                              <AiTwotoneDelete
                                style={{
                                  fontSize: "1.2rem",
                                  paddingRight: "0.1rem",
                                }}
                              />
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Dialog open={openDialog} onClose={handleClose}>
            <div className="mb-3">
              <CategoryForm
                name={updatedName}
                setName={setUpdateName}
                description={updatedDesc}
                setDescription={setUpdateDesc}
                handleSubmit={handleUpdateSubmit}
              />
            </div>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
