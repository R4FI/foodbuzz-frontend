/* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { useForm } from "react-hook-form";
// import "./Register.css";
// import { useMongoAuth } from "../../../Context/MongoAuthProvider";
// const Register = () => {
//   const { register, handleSubmit } = useForm();
//   const { error, handleCreateUser } = useMongoAuth();
//   const onSubmit = (data) => {
//     const { name, email, password } = data;
//     handleCreateUser(name, email, password);
//   };

//   return (
//     <div className="reg">
//       <div className="mx-auto">
//         <div className="w-full max-w-md space-y-3 rounded-xl cardbg m-auto mt-2 p-10">
//           <h1 className="text-2xl font-bold text-black text-center">Sign Up</h1>
//           <h2 className="font-bold text-black text-center">
//             Let's create an account
//           </h2>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="space-y-5 ng-untouched ng-pristine ng-valid"
//           >
//             <div className="space-y-1 text-sm">
//               <label for="username" className="block dark:text-gray-400">
//                 Username
//               </label>
//               <input
//                 {...register("name", {
//                   required: "Name is Required",
//                 })}
//                 type="text"
//                 name="name"
//                 id="username"
//                 placeholder="Username"
//                 className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
//               />
//             </div>
//             {error.name && <p className="text-red-500">{error.name.message}</p>}
//             <div className="space-y-1 text-sm">
//               <label for="username" className="block dark:text-gray-400">
//                 Email
//               </label>
//               <input
//                 {...register("email", {
//                   required: true,
//                 })}
//                 type="text"
//                 name="email"
//                 id="username"
//                 placeholder="Email"
//                 className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
//               />
//             </div>
//             {error.email && (
//               <p className="text-red-500">{error.email.message}</p>
//             )}
//             <div className="space-y-1 text-sm">
//               <label for="password" className="block dark:text-gray-400">
//                 Password
//               </label>
//               <input
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be 6 characters long",
//                   },
//                   pattern: {
//                     value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
//                     message:
//                       "Password must have uppercase, number and special characters",
//                   },
//                 })}
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
//               />
//             </div>

//             <div className="space-y-1 text-sm">
//               <label for="password" className="block dark:text-gray-400">
//                 Confirm Password
//               </label>
//               <input
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be 6 characters long",
//                   },
//                   pattern: {
//                     value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
//                     message:
//                       "Password must have uppercase, number and special characters",
//                   },
//                 })}
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Confirm Password"
//                 className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
//               />
//             </div>
//             {error.password && (
//               <p className="text-red-500">{error.password.message}</p>
//             )}
//             <button className="block w-full p-3 text-center text-white rounded-sm signbtn">
//               Sign Up
//             </button>
//           </form>
//           <div className="flex items-center pt-4 space-x-1">
//             <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
//             <p className="px-3 text-sm text-black">
//               Login with social accounts
//             </p>
//             <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
//           </div>
//           <div className="flex justify-center space-x-4">
//             <button aria-label="Log in with Google" className="p-3 rounded-sm">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 32 32"
//                 className="w-5 h-5 fill-current"
//               >
//                 <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
//               </svg>
//             </button>
//             <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 32 32"
//                 className="w-5 h-5 fill-current"
//               >
//                 <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
//               </svg>
//             </button>
//             <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 32 32"
//                 className="w-5 h-5 fill-current"
//               >
//                 <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
//               </svg>
//             </button>
//           </div>

//           <p className="text-xs text-center sm:px-6 text-black">
//             Already have an account?
//             <a
//               rel="noopener noreferrer"
//               href="/signin"
//               className="underline text-black"
//             >
//               Sign In
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import "./Register.css";
const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleCreateUser = async () => {
    const response = await fetch("http://localhost:5000/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
        name,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      setSuccessMessage("User created successfully!");
    } else {
      const errorData = await response.json();
      if (errorData.errors) {
        setErrors(errorData.errors);
      } else {
        setErrors({ general: errorData.message || "An error occurred." }); // Set the general error message
      }
    }
  };

  return (
    <div className="mt-10">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto cardsignUp">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              Username
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md "
            />
            {errors.name && <p className="text-red-600">{errors.name}</p>}
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md "
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md"
            />
            {errors.confirmPassword && (
              <p className="text-red-600">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            onClick={handleCreateUser}
            className="signbtn block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <a
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-100"
          >
            Sign up
          </a>
        </p>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
};

export default CreateUser;

/*

 <div className="mt-5 mx-auto">
       <input
       className="inputform mx-auto mt-2"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {errors.name && <p className="text-red-600">{errors.name}</p>}

      <br/>

      {errors.general && <p className="text-red-600">{errors.general}</p>}
      <input
       className="inputform mt-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {errors.email && <p className="text-red-600">{errors.email}</p>}
      <br/>
      <input
       className="inputform"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {errors.password && <p className="text-red-600">{errors.password}</p>}
      <br/>
      <input
       className="inputform"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}
      <br/>
    
      
      <button onClick={handleCreateUser}>Create User</button>
      {successMessage && <p>{successMessage}</p>}
      </div>
*/
