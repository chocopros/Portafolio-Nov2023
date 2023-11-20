import { Route, Routes } from 'react-router-dom'
import Header from './components/pages/header/header'
import AboutMe from './components/routes/aboutMe/AboutMe'
import Footer from './components/pages/footer/Footer'

const App = () => {


  return (
    <>
    
      <Header />

      <Routes>

        <Route path='/' element={<AboutMe />} />
        <Route path='/works' element={<h1>Works</h1>} />
        <Route path='/posts' element={<h1>Post</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
