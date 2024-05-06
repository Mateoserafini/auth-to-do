import { BrowserRouter, Routes, Route } from "react-router-dom"

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/tasks" element={<h1>Task Page</h1>}/>
        <Route path="/add-task" element={<h1>new task</h1>}/>
        <Route path="/tasks/:id" element={<h1>update-task</h1>}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App