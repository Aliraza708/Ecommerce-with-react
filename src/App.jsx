import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/about'
import Auth from './pages/auth/singup&singin'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Contact from './pages/contact'
import AddToCart from './pages/AddCard'
import NotFound from './pages/notFound'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}
      />
      <Route path='/About' element ={<About/>} />
      <Route path='/Auth' element = {<Auth/>} />
      <Route path='/Contact' element = {<Contact/>} />
      <Route path=':id' element={<AddToCart/>}/>
      <Route path='*' element= {<NotFound/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
