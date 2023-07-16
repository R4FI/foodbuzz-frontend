import axios from "axios";
import React, { useState } from "react";
import "./Addproducts.css";
const AddProduct = () => {
  const [error, SetError] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("categories", categories);
      if (image) {
        formData.append("image", image);
      }
      await axios.post("http://localhost:5000/api/v1/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify(formData),
      });
      console.log("User information updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Error updating user information.");
    }
  };

  return (
    <div className="mx-10">
      <form
        action="http://localhost:5000/api/v1/product"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="addproducts"
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && <p>{error.message}</p>}
        </label>{" "}
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>{" "}
        <br />
        <label>
          Category:
          <input
            type="text"
            name="categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
        </label>{" "}
        <br />
        <label>
          Image:
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>{" "}
        <br />
        <button type="submit" className="submitbn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
