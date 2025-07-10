import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import Esports from './components/Esports';
import TeamPage from './components/TeamPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <News />
              <Esports />
              <Contact />
            </>
          }
        />
        <Route path="/teams" element={<Esports />} />
        <Route path="/teams/:teamId" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
