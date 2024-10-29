
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts'
import About from './views/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
