import { Route, Routes } from "react-router-dom"

export const ViewsRouters = () => {
  return (
    <Routes>
        <Route path="home" element={ <Home/> } />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="editProfile" element={<EditProfile/>} />
        <Route path="laboratorio" element={<Laboratorio/>} />
        <Route path="ensamble" element={<Ensamble/>} />

        <Route path='/*' element={ <Navigate to="/"/>} />
    </Routes>
  )
}
