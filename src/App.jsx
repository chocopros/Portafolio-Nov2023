import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>Header</h1>

      <Routes>

        <Route path='/' element={<h1>About me</h1>} />
        <Route path='/works' element={<h1>Works</h1>} />
        <Route path='/post' element={<h1>Post</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />

      </Routes>


      <h2>Footer</h2>
    </>
  )
}

export default App
