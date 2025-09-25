import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import InProgress from "./components/InProgress";
import Resolved from "./components/Resolved";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  return (
    <>
      <Navbar />

      <main className="mt-11">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InProgress inProgress={inProgress} />
            <Resolved resolved={resolved} />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
