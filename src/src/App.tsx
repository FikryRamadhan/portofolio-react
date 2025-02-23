import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portofolio from "./Pages/Portofolio";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";


const App = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/404"; // Jika di halaman NotFound, sembunyikan

  return (
    <div className="kanit-semibold">
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
