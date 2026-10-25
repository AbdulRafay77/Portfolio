import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Stack from "./sections/Stack/Stack";
import Work from "./sections/Work/Work";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stack />
        <Work />
      </main>
    </>
  );
}

export default App;