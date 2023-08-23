import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import ContactUs from "./pages/Projects/Contact/ContactUs";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <Techstack />
          <Education />
          <Projects />
          <WorkExp />
          <About />
          <ContactUs />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">❤️ With 😍 Recat js <span style={{ color: 'greenyellow' }}> Coding  </span> &copy; 2023</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="red"
        style={{ backgroundColor: "silver", borderRadius: "80px" }}
      />
    </>

  );
}

export default App;
