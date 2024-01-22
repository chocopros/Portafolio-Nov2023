import { Route, Routes } from 'react-router-dom'
import Header from './components/pages/header/Header.jsx'
import AboutMe from './components/routes/aboutMe/AboutMe'
import Footer from './components/pages/footer/Footer'
import Portada from './components/routes/aboutMe/details/Portada'
import BodyInfo from './components/routes/aboutMe/details/BodyInfo.jsx'
import styled from 'styled-components'
import Contact from './components/routes/contact/Contact.jsx'
import Works from './components/routes/works/Works.jsx'

const App = () => {

  

  return (
    <>
      <Header />
      <ContainerHero>
        <SectionHero>

          <Portada />
          <BodyInfo />
        </SectionHero>

      </ContainerHero>


      <Routes>

        <Route path='/' element={<AboutMe />} />
        <Route path='/works' element={<Works />} />
        <Route path='/posts' element={<h1>Post</h1>} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App

const ContainerHero = styled.div`
  background-color: rgb(32, 32, 35);
  position: relative;
`

const SectionHero = styled.section`
  
  padding-top: 100px;
  
  color: white;

  max-width: 1024px;
  margin: 0 auto;


  padding-bottom:50px;

`


