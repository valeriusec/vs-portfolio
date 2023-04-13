import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";

function App() {
  return (
    <>
      <Hero />
      <div className="w-full flex justify-center overflow-hidden-web">
        <About />
      </div>
      <div className="w-full overflow-hidden-web flex justify-center">
        <Projects />
      </div>
      <div className="w-full h-screen"></div>
    </>
  );
}

export default App;
