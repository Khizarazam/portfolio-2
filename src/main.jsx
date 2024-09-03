import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Resume from './Components/Resume.jsx';
import Home from './Components/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<App />}/>
          <Route path='/' element={<About />}/>
          <Route path='resume' element={<Resume />}/>
          <Route path='projects' element={<Projects />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
