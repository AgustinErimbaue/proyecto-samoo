import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './component/Register/Register'
import Login from './component/Login/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register'element={<Register />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
