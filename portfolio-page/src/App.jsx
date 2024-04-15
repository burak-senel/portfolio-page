import "./App.css";
import Hero from "./components/Hero";

import Mode from "./components/Mode";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Mode />
      <Nav />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
