import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routers/AuthRoutes'
import { ViewsRouters } from '../views/routes/ViewsRouters'

export const AppRouter = () => {
  return (
    <Routes>
      
       {/* Login y registro */}
        <Route path='/auth/*' element= { <AuthRoutes/> }/>



      {/* YunexApp */}
        <Route path='/*' element={ <ViewsRouters/> }/>

    </Routes>
  )
}
