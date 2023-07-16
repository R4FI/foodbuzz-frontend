/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./User.css";
import { useState } from "react";
import { useEffect } from "react";
import { Alert } from "@material-tailwind/react";
import { useMongoAuth } from "../../../Context/MongoAuthProvider";

const User = () => {
  const { user } = useMongoAuth();
  const [order, setOrder] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/orders/my-orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data.data));
  }, [user.email]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm(
      "Are you sure, You want to delete your order"
    );
    if (proceed) {
      const url = `http://localhost:5000/api/v1/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remainingOrder = order.filter((orders) => orders._id !== id);
            setOrder(remainingOrder);
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage(`${error}`);
        });
    }
  };
  //
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row mx-auto">
        {/* user photo */}
        <div>
          <img src={user?.avatar} alt="" className="userImage mx-3 mt-5" />
        </div>

        {/* user information */}
        <div className="mt-5 mx-3">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Personal Information
            </h4>
            <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {user.name}
            </h5>
            <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
              {user.email}
            </p>
            <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
              {user.contactNumber}
            </p>
          </div>
        </div>

        {/* user address */}

        <div className="mt-5 mx-3">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Default Shipping Address
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {user.shippingAddress}
            </p>
            <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
              {user.contactNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Order table */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <p className="mb-3">Total Order: {order.length}</p>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Index
              </th>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>

              <th scope="col" class="px-6 py-3">
                Category
              </th>

              <th scope="col" class="px-6 py-3">
                Placed On
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3 ">
                Action
              </th>
            </tr>
          </thead>
          {order.map((orders, index) => (
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" />
              <td class="px-6 py-4">{index + 1}</td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {orders.name}
              </th>

              <td class="px-6 py-4">{orders.categories}</td>

              <td class="px-6 py-4">
                {new Date(orders.createdAt).toLocaleDateString()}
              </td>
              <td class="px-6 py-4">${orders.totalPrice}</td>
              <td class="px-6 py-4">{orders.quantity}</td>
              <td class="px-6 py-4">{orders.status}</td>
              <td class="flex items-center px-6 py-4 space-x-6">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Pay Now
                </a>
                <button
                  onClick={() => handleDeleteOrder(orders._id)}
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </button>
              </td>
            </tbody>
          ))}
        </table>
      </div>
      {errorMessage && (
        <Alert color="red" className="mt-4">
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default User;
