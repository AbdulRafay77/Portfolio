import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import Stack from "./sections/Stack/Stack";
import Work from "./sections/Work/Work";
import MoreProjects from "./sections/MoreProjects/MoreProjects";
import About from "./sections/About/About";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stack />
        <Work />
        <MoreProjects />
        <About />
      </main>
    </>
  );
}

export default App;