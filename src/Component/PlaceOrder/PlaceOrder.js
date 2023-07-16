/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
import { useMongoAuth } from "../../Context/MongoAuthProvider";
const PlaceOrder = () => {
  const { id } = useParams();
  const { user } = useMongoAuth();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
        setPrice(data.data.price);
      });
  }, [id]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const formattedPrice = product.price;
  const totalPrice = formattedPrice * quantity;

  // for order
  const handleConfirm = () => {
    if (user) {
      const order = {
        name: product.name,
        image: product.image,
        totalPrice: `${totalPrice}`,
        quantity: quantity,
        categories: product.categories,
        email: user.email,
      };

      fetch("http://localhost:5000/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`, // Include the authentication token in the headers
        },
        body: JSON.stringify(order),
      })
        .then((res) => {
          if (res.ok) {
            setSuccess("Order Placed");
            return res.json();
          } else if (res.status === 403) {
            throw new Error("Forbidden. Please log in."); // Handle forbidden case
          } else {
            throw new Error(`${res.status} ${res.statusText}`);
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage(`${error}`);
        });
    } else {
      setErrorMessage("Unauthorized. Please log in."); // Handle unauthorized case
    }
  };

  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={`data:image/png;base64,${product.image}`}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>

              <p class="leading-relaxed">{product.description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex">
                  <span class="mr-3">Category </span>
                  <p className="font-semibold">{product.categories}</p>
                </div>
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Quantity</span>
                  <div class="relative inline-flex">
                    <button
                      onClick={handleDecrease}
                      className="px-4 py-2 border border-gray-300 text-gray-500 hover:text-black"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-t border-b border-gray-300 text-gray-500">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrease}
                      className="px-4 py-2 border border-gray-300 text-gray-500 hover:text-black"
                    >
                      +
                    </button>

                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
                <button
                  onClick={handleConfirm}
                  class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Confirm Order
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>

              {errorMessage && (
                <Alert color="red" className="mt-3">
                  {errorMessage}
                </Alert>
              )}
              {success && (
                <Alert color="green" className="mt-3">
                  {success}
                </Alert>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaceOrder;
