import Hero from "./components/Hero";
import "./App.css";
import Mode from "./components/Mode";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
const App = () => {
  return (
    <div>
      <Mode />
      <Nav />
      <Hero />
      <Skills />
      <Profile />
    </div>
  );
};

export default App;
