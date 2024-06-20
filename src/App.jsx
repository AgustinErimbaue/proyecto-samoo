import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './component/Register/Register'
import CompanyRegister from './component/CompanyRegister/CompanyRegister';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register'element={<Register />} />
        <Route path="/CompanyRegister" element={<CompanyRegister />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
