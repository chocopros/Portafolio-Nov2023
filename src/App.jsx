import { Route, Routes } from 'react-router-dom'
import Header from './components/pages/header/Header.jsx'
import AboutMe from './components/routes/aboutMe/AboutMe'
import Footer from './components/pages/footer/Footer'
import Contact from './components/routes/contact/Contact.jsx'
import Works from './components/routes/works/Works.jsx'
import Post from './components/routes/post/Post.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/works' element={<Works />} />
        <Route path='/posts' element={<Post />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
