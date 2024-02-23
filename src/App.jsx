import {useRef } from 'react'
import './App.css'
import NavbarInfo from './components/NavbarInfo'
import Navbar from './components/Navbar'
import MainPoster from './components/MainPoster'
import DiscountCard from './components/DiscountCard'
import DiscountsContainer from './components/DiscountsContainer'
import Categories from './components/Categories'
import Sales from './components/Sales'
import FeaturedProducts from './components/FeaturedProducts'
import ChooseUs from './components/ChooseUs'
import Footer from './components/Footer'
import Copywrite from './components/Copywrite'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Privacy from './components/Privacy'
import Refund from './components/Refund'
import TermAndCondition from './components/TermAndCondition'
import Disclaimer from './components/Disclaimer'
import Whyus from './components/Whyus'


function App() {
  const tawkMessengerRef = useRef();

  const onLoad = () => {
    console.log('onLoad works!');
};
 
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'
    element={
      <>
      <NavbarInfo/>
      <Navbar/>
      <MainPoster/>
      <DiscountsContainer/>
      <Categories/>
      <Sales/>
      <FeaturedProducts/>
      <ChooseUs/>
      <Footer/>
      <Copywrite/>
      </>
    }
    >
    </Route>

      <Route path="/about" element={<About/>}></Route>
      <Route path="/whyus" element={<Whyus/>}></Route>
      <Route path="/disclaimer" element={<Disclaimer/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
      <Route path='/refund' element={<Refund/>}></Route>
      <Route path='/termAndCondition' element={<TermAndCondition/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
