import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import WorkMain from "./Pages/WorkMain";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Pricing />
      <WorkMain />
      <Footer />
    </div>
  );
}

export default App;
