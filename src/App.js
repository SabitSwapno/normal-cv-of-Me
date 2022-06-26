import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Skill from './Pages/Skills/Skills';
import Experiences from './Pages/Experience/Experiences';
import AboutMe from './Pages/About Me/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import Achievements from './Pages/Achievements/Achievements';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skill />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="achievements" element={< Achievements />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
