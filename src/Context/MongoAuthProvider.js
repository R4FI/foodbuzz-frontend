// import { useEffect, useState } from "react";

// const MongoAuthProvider = () => {

// const [user,setUser] = useState("");

// /*  here i put the code for  log in */
// const getToken = () => {
//   return localStorage.getItem("token");

// };

// const handleLogout = () => {
//   localStorage.removeItem("token"); // Remove token from local storage

// };

// const handleGetUser = async () => {
//   const token = getToken();
//   const response = await fetch("http://localhost:5000/api/v1/user/me", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`, // Add Authorization header with token
//     },
//   });
//   if (response.ok) {
//     const responseData = await response.json();
//   setUser(responseData.data);
//   } else {
//     // handle the error
//   }
// };
// useEffect(() => {
//   handleGetUser();
// }, []);

//     return{
//         getToken,
//         handleGetUser,
//         user,
//         handleLogout
//     }
// };

// export default MongoAuthProvider;

import React, { createContext, useContext, useEffect, useState } from "react";

const MongoAuthContext = createContext();

const MongoAuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [createUser, setCreateUser] = useState("");
  const [error, setError] = useState("");

  const handleCreateUser = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:5000/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        // Include any necessary user creation data here
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      setCreateUser(responseData.data); // Update the createUser state with the created user data
    } else {
      const errorData = await response.json();
      if (errorData.errors) {
        // Handle validation errors
        const errorMessages = Object.values(errorData.errors).map(
          (error) => error.message
        );
        setError(errorMessages.join(", "));
      } else {
        setError(errorData.message || "An error occurred."); // Set the error message
      }
    }
  };

  // Get token from local storage
  const getToken = () => {
    return localStorage.getItem("token");
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
  };

  // Retrieve user data from the server
  const handleGetUser = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:5000/api/v1/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add Authorization header with token
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      setUser(responseData.data);
    } else {
      // Handle the error
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <MongoAuthContext.Provider
      value={{ error, getToken, user, handleCreateUser, handleLogout }}
    >
      {children}
    </MongoAuthContext.Provider>
  );
};

const useMongoAuth = () => {
  return useContext(MongoAuthContext);
};

export { MongoAuthProvider, useMongoAuth };
