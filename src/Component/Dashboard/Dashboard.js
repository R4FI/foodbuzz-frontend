/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "flowbite";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import AddProduct from "../Profile/AddProduct/AddProduct";
import User from "./User/User";
import {
  MongoAuthProvider,
  useMongoAuth,
} from "../../Context/MongoAuthProvider";

const Dashboard = () => {
  const { user } = useMongoAuth();
  // const [user, setuser] = useState("");
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/orders/my-orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data.data));
  }, [user.email]);
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="/dashboard/dashboard/me"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span class="ml-3">Dashboard</span>
              </a>
            </li>

            {user && (
              <div>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span class="flex-1 ml-3 whitespace-nowrap">
                      Welcome: {user?.name}
                    </span>
                  </a>
                </li>

                <Link to={"dashboard/me"}>
                  <li>
                    <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">Me</span>
                    </a>
                  </li>
                </Link>

                <Link to="dashboard/manage-account">
                  <li>
                    <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">
                        Manage Account
                      </span>
                    </a>
                  </li>
                </Link>

                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400
                   group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 
                    00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Orders</span>
                    <span
                      class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium
                 text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                    >
                      {order.length}
                    </span>
                  </a>
                </li>
              </div>
            )}

            {/* admin start */}

            {!user && (
              <div>
                <li>
                  <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg
                      aria-hidden="true"
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400
                   group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                  </a>
                </li>

                <Link to="dashboard/add-product">
                  <li>
                    <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400
                   group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0
                     0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">
                        Add Products
                      </span>
                    </a>
                  </li>
                </Link>
              </div>
            )}

            {/* admin area end */}
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <Routes>
          <Route path="dashboard/me" element={<User />} />
          <Route path="dashboard/manage-account" element={<Profile />} />
          <Route path="dashboard/add-product" element={<AddProduct />} />
          <Route path="dashboard/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
