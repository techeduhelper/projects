import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import PageNotFound from "./pages/PageNotFound";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./user/Dashboard";
import PrivateRoute from "./components/Routes/Private.jsx";
import ForgotPassword from "./auth/ForgotPassword";
import AdminDashboard from "./admin/AdminDashboard";
import AdminRoutes from "./components/Routes/AdminRoute.jsx";
import CreateCategory from "./admin/CreateCategory";
import CreateProduct from "./admin/CreateProduct";
import Users from "./admin/Users";
import Analytics from "./admin/Analytics";
import Promotions from "./admin/Promotions";
import Orders from "./user/Orders";
import Profile from "./user/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoutes />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/analytics" element={<Analytics />} />
          <Route path="admin/promotions" element={<Promotions />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<PrivacyPolicies />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
