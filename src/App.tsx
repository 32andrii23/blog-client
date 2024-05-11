import { Route, Routes } from 'react-router-dom'

import '@/App.css'
import { 
  LogIn, 
  SignUp, 
  Features } from '@/pages'

function App() {
  return (
    <Routes>
      <Route path="/features" element={<Features />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<LogIn />} />
    </Routes>
  )
}

export default App
