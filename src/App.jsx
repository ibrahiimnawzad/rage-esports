import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "tailwindcss";
import About from "./components/About";
import Works from "./components/Works.jsx";
import Contact from "./components/Contact.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
    </>
  )
}

export default App
