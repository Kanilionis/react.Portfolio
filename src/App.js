import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Nav/NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer"
import Resume from "./pages/Resume"


function App() {
  return (
    <>
    <Router>
      <div>
        <NavTabs />
        {/* telling the browser to reference the component WHEN the /"whatever" is in the browser http */}
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
    
    </>
  );
}

export default App