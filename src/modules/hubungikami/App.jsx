import { Route, Routes } from 'react-router-dom'
import Layout from './layouts'
import Contact from './views/Contact'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element={<Contact/>}/>
        </Route>
      </Routes>
  )
}

export default App
