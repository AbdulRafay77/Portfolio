import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Stack from "./sections/Stack/Stack";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stack />
      </main>
    </>
  );
}

export default App;