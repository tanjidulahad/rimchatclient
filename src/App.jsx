import { Route, Routes } from "react-router-dom"
import Auth from "./components/Pages/Auth/Auth"
import Home from "./components/Pages/Home/Home"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Layout from "./components/Layout/Layout"


function App() {


  return (
    <>
    <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoute/>}>        
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
          </Route>
          </Route>
      </Routes>
    </>
  )
}

export default App
