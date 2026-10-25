import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <div style={{ paddingTop: "120px" }}>
          <h1>Abdul Rafay Siddiqui</h1>
          <p>Navbar setup successful.</p>
        </div>
      </main>
    </>
  );
}

export default App;