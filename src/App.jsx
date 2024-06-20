import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './component/Register/Register'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register'element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
