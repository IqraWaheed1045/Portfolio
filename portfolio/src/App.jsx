import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection'
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HeroSection/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
