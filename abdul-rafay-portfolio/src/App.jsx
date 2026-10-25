import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import Stack from "./sections/Stack/Stack";
import Work from "./sections/Work/Work";
import MoreProjects from "./sections/MoreProjects/MoreProjects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stack />
        <Work />
        <MoreProjects />
      </main>
    </>
  );
}

export default App;