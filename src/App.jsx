import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress.jsx";
import PageLoader from "./components/PageLoader/PageLoader.jsx";
import FloatingContact from "./components/FloatingContact/FloatingContact.jsx";
import JumpMenu from "./components/JumpMenu/JumpMenu.jsx";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";
import Work from "./pages/Work/Work.jsx";
import Testimonials from "./pages/Testimonials/Testimonials.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { PROJECTS } from "./data/index.js";

export default function App() {
  const location = useLocation();

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      {/* fixed-position UI lives OUTSIDE .route-view: that wrapper's
          transition animation applies a CSS transform, which would
          otherwise make position:fixed children resolve against the
          page instead of the actual viewport */}
      {location.pathname === "/work" && <JumpMenu items={PROJECTS} />}
      {/* keyed wrapper replays the page-enter animation on every route change */}
      <div className="route-view" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <FloatingContact />
    </>
  );
}