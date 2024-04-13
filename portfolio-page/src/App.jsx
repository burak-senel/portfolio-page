import Hero from "./components/Hero";
import "./App.css";
import Mode from "./components/Mode";
import Nav from "./components/Nav";
const App = () => {
  return (
    <div>
      <Mode />
      <Nav />
      <Hero />
    </div>
  );
};

export default App;
