import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import Resume from './Components/Resume.jsx'
import Home from './Components/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<About />}/>
      <Route path='about' element={<About />}/>
      <Route path='resume' element={<Resume />}/>
      <Route path='projects' element={<Projects />}/>
      <Route path='contact' element={<Contact />}/>
    </Route>
  ),
  { basename: "/portfolio-2" } // Add this line for GitHub Pages
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
