import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext";
import Loading from "./components/loading/Loading";
import ScrollToTop from "./components/ScrollTotop/ScrollToTop";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Engineering from "./pages/All Program/Engineering";
import Medical from "./pages/All Program/Medical";
import Management from "./pages/All Program/Management";
import Bio from "./pages/All Program/Bio";
import Contact from "./pages/contact_us/Contact"
import Computational from "./pages/All Program/Computational";
import Agriculture from "./pages/All Program/Agriculture";
import Humanities from "./pages/All Program/Humanities";
import Communication from "./pages/All Program/Communication";
import Law from "./pages/All Program/Law"



const App = () => {
  const { isAuth, user, loading } = UserData();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Header isAuth={isAuth} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/management" element={<Management />} />
            <Route path="/bio_Technology" element={<Bio />} />
             <Route path="/computational" element={<Computational />} />
            <Route path="/law" element={<Law />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/humanities" element={<Humanities />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/contact_us" element={<Contact />} />

            <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
            <Route path="/forgot" element={isAuth ? <Home /> : <ForgotPassword />} />
            <Route path="/reset-password/:token" element={isAuth ? <Home /> : <ResetPassword/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
