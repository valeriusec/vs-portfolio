import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";

import Arrow from "../Components/elements/Arrow";

function App() {
  return (
    <>
      <Hero />
      
        <div className="w-full projects">
          <Projects />
        </div>

      <div className="w-full h-screen">
      
      </div>
    </>
  );
}

export default App;
