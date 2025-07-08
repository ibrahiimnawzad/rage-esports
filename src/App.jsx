import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "tailwindcss";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import News from "./components/News.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <News />
      <Contact />
    </>
  )
}

export default App
