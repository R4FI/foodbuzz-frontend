/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */






// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../Context/Authprovider";
// import "./Navbar.css";
// import { useEffect } from "react";


// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [user, setuser] = useState("");

//   /*  here i put the code for  log in */
//   const getToken = () => {
//     return localStorage.getItem("token");
   
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove token from local storage

//   };

//   const handleGetUser = async () => {
//     const token = getToken();
//     const response = await fetch("http://localhost:5000/api/v1/user/me", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Add Authorization header with token
//       },
//     });
//     if (response.ok) {
//       const responseuser = await response.json();
//     setuser(responseuser.user.name);
//     } else {
//       // handle the error
//     }
//   };
//   useEffect(() => {
//     handleGetUser();
//   }, []);

//   /*  here i put the code for log in */

//   // useEffect(() => {
//   //   fetch(`http://localhost:5000/api/v1/user/me`)
//   //     .then((res) => res.json())
//   //     .then((user) =>console.log(user));
//   // }, []);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <div className="navbar">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52"
//             >
//               <li>
//                 <a>Home</a>
//               </li>
//               <li tabIndex={0}>
//                 <a className="justify-between">
//                   Indian
//                   <svg
//                     className="fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//                   </svg>
//                 </a>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </li>
//               <li tabIndex={1}>
//                 <a className="justify-between">
//                   Chinese
//                   <svg
//                     className="fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//                   </svg>
//                 </a>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </li>
//               <li tabIndex={2}>
//                 <a className="justify-between">
//                   Thai
//                   <svg
//                     className="fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//                   </svg>
//                 </a>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </li>
//               <li tabIndex={3}>
//                 <a className="justify-between">
//                   Italian
//                   <svg
//                     className="fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//                   </svg>
//                 </a>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a>About Us</a>
//               </li>
//             </ul>
//           </div>
//           <a href="/" className=" normal-case text-xl text-black">
//             FoodBuz....
//           </a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 text-black">
//             <li>
//               <a>Home</a>
//             </li>
//             <li tabIndex={0}>
//               <a>
//                 Indian
//                 <svg
//                   className="fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
//                 </svg>
//               </a>
//               <ul className="p-2">
//                 <li>
//                   <a>Submenu 1</a>
//                 </li>
//                 <li>
//                   <a>Submenu 2</a>
//                 </li>
//               </ul>
//             </li>
//             <li tabIndex={1}>
//               <a>
//                 Chinese
//                 <svg
//                   className="fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
//                 </svg>
//               </a>
//               <ul className="p-2">
//                 <li>
//                   <a>Submenu 1</a>
//                 </li>
//                 <li>
//                   <a>Submenu 2</a>
//                 </li>
//               </ul>
//             </li>
//             <li tabIndex={2}>
//               <a>
//                 Thai
//                 <svg
//                   className="fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
//                 </svg>
//               </a>
//               <ul className="p-2">
//                 <li>
//                   <a>Submenu 1</a>
//                 </li>
//                 <li>
//                   <a>Submenu 2</a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a>About Us</a>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end pointter">
//           <div className="dropdown dropdown-end">
//             <label tabIndex={0}>
//               <div className="avatar">
//                 <div className="w-7 rounded-full avaterimg mt-1">
//                   <img src={user?.photo} />
//                 </div>
//               </div>
//             </label>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white"
//             >
//               <p className="text-black text-center">
//                 <a  href="/profile">{user}</a>
//               </p>
              
//               {getToken() ? (
//                 <a onClick={handleLogout} className="text-black  text-center">
//                   Log Out
//                 </a>
//               ) : (
//                 <a href="/signin" className="text-black   text-center">
//                   Log In
//                 </a>
//               )}
//               {/* {user?.email? (
//                 <a onClick={handleLogOut} className="text-black  text-center">
//                   Log Out
//                 </a>
//               ) : (
//                 <a href="/signin" className="text-black   text-center">
//                   Log In
//                 </a>
//               )} */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import { MongoAuthProvider, useMongoAuth } from '../../Context/MongoAuthProvider';

const Navbar = () => {
  
    const{user,handleLogout,getToken} = useMongoAuth();

  return (
    <div>
      
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FoodBuz..</span>
  </a>
  <div class="flex items-center md:order-2">
  <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-10 h-10 rounded-full" src={user?.avatar} alt="user photo"/>
      </button>
    
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">{user?.name}</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="/dashboard/dashboard/me" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          {getToken() ? (
                <li>
                <a onClick={handleLogout} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
              ) : (
                <li>
                  <a href="/signin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign In</a>
                </li>
                
              )}
        </ul>
      </div>
      <button user-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/about-us" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  );
};

export default Navbar;










  // const [user, setuser] = useState("");

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
  //     const responseuser = await response.json();
  //   setuser(responseuser.user);
  //   } else {
  //     // handle the error
  //   }
  // };
  // useEffect(() => {
  //   handleGetUser();
  // }, []);

//   /*  here i put the code for log in */