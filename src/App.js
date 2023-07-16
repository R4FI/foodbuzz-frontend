import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/User/LogIn/Login";
import AuthProvider from "./Context/Authprovider";
import Register from "./Component/User/Register/Register";
import Navbar from "./Component/Navbar/Navbar";
import NotFound from "./Component/404Notfound/NotFound";
import Profile from "./Component/Profile/Profile";
import Admin from "./Component/Admin/Admin";
import Dashboard from "./Component/Dashboard/Dashboard";
import AddProduct from "./Component/Profile/AddProduct/AddProduct";
import About from "./Component/About/About";
import PlaceOrder from "./Component/PlaceOrder/PlaceOrder";
import { MongoAuthProvider } from "./Context/MongoAuthProvider";

function App() {
  return (
    <div className="App">
      <MongoAuthProvider>
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/about-us" exact element={<About />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/place-order/:id" element={<PlaceOrder />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/dashboard/dashboard/me/*" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MongoAuthProvider>
    </div>
  );
}

export default App;
