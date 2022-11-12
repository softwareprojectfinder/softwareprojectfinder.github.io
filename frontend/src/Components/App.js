import '../CSS/App.css';
import NavMenu from './NavMenu.js'
import Home from './Home.js'
import ProjectsPage from './ProjectsPage.js'
import SignUpPage from './SignUpPage.js'
import SignInPage from './SignInPage.js'
import React from 'react'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/signinpage" element={<SignInPage />} />
          <Route path="/signuppage" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
