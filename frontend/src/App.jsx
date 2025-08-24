import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore'
import {Loader} from 'lucide-react'

const App = () => {
  const {authUser, checkAuth, isCheckingAuth}= useAuthStore()
  useEffect(()=>{
    checkAuth()
  }, [checkAuth])
  console.log({authUser});
  if(isCheckingAuth && !authUser)return(
    <div className='flex justify-center items-center h-screen'>
      <Loader className="size-10 animate-spin"/>

    </div>
  )
  
  return (<>
    <Navbar/>
    <Routes>
      <Route path='/' element={authUser?<HomePage/>: <Navigate to="/login"/>} />
      <Route path='/signup' element={!authUser?<SignUpPage/>:<Navigate to="/" />} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/settings' element={authUser?<SettingsPage/>: <Navigate to="/login"/> } />
      <Route path='/profile' element={authUser?<ProfilePage/>: <Navigate to="/login"/> } />
    </Routes>

  </>
  )
}

export default App
