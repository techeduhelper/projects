import React from "react";

const CategoryForm = ({
  handleSubmit,
  name,
  setName,
  description,
  setDescription,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-2 align-items-center md-9">
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 m-1">
            <input
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
