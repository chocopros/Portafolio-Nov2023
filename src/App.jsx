import { Route, Routes } from 'react-router-dom'
import Header from './components/pages/header/header'
import AboutMe from './components/routes/aboutMe/AboutMe'
import Footer from './components/pages/footer/Footer'
import Portada from './components/routes/aboutMe/details/Portada'
import BodyInfo from './components/routes/aboutMe/details/BodyInfo'
import styled from 'styled-components'

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
        <Route path='/works' element={<h1>Works</h1>} />
        <Route path='/posts' element={<h1>Post</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />

      </Routes>

      <Footer />
    </>
  )
}

export default App

const ContainerHero = styled.div`
  background-color: rgb(32, 32, 35);
`

const SectionHero = styled.section`
  
  padding-top: 100px;
  
  color: white;

  max-width: 1024px;
  margin: 0 auto;


  padding-bottom:50px;

`


