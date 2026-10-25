import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import Stack from "./sections/Stack/Stack";
import Work from "./sections/Work/Work";
import MoreProjects from "./sections/MoreProjects/MoreProjects";
import About from "./sections/About/About";
import Credentials from "./sections/Credentials/Credentials";
import Contact from "./sections/Contact/Contact";

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
        <Credentials />
        <Contact />
      </main>
    </>
  );
}

export default App;