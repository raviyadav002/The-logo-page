import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Preloader from "./components/Preloader";
import Header from "../src/components/Header";
import Toke from "./components/Toke";
import Top from "./components/Top";
import Ratiry from "./components/Ratiry";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <Toke />
      <Top />
      <Ratiry />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
