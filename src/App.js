import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import Footer from './pages/Footer'
import Services from './pages/Services'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Sidebar from './components/Sidebar'
import Error from './pages/ErrorPage'
import { ScrollToTop } from './context/Context'



function App() {
  return(
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/> }></Route>
        <Route path='/services' element={<Services/> }></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='*' element={<Error/> }></Route>
      </Routes>
      <Footer/>
    </Router> 
  
  ) 
}

export default App
