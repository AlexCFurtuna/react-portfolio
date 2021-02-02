import "./App.scss";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div>
        <Landing></Landing>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
