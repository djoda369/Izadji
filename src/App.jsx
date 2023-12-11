import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Instructions from "./Components/Instructions/Instructions";
import Lokali from "./Components/Lokali/Lokali";
import NavBar from "./Components/Navbar/NavBar";
import { useRef } from "react";

function App() {
  const instructionsRef = useRef(null);
  const lokaliRef = useRef(null);
  const formRef = useRef(null);

  const instructionScroll = () => {
    instructionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const lokaliScroll = () => {
    lokaliRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const formScroll = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="main">
      <NavBar
        instructionScroll={instructionScroll}
        lokaliScroll={lokaliScroll}
        formScroll={formScroll}
      />
      <Header />
      <div ref={instructionsRef}>
        <Instructions />
      </div>
      <div ref={lokaliRef}>
        <Lokali />
      </div>
      <div ref={formRef}>
        <Form />
      </div>
      <Footer />
    </main>
  );
}

export default App;
