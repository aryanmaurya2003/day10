import { createContext, use, useContext, useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/login'
import ProtectedRoute from './protectedRoute/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Counter from './pages/counter'
import Stopwatch from './pages/Stopwatch'

   const  LoginContext=createContext();



function App() {

  const [authenticated,setauthenticated]=useState(()=> {return localStorage.getItem("userAuthenticated")=="true"});
  

  return (
    <>
    <LoginContext.Provider value={{authenticated,setauthenticated}}>
    <div>
      <Routes>
        <Route path='/' element={<Login setauthenticated={setauthenticated} authenticated={authenticated}  />}/>
        <Route path='/dashboard' element={<ProtectedRoute authenticated={authenticated} > <Dashboard/> </ProtectedRoute>}>
        <Route path='' element={<Counter/>}/>
        <Route path='watch' element={<Stopwatch/>}/>
        </Route>
        <Route path='*' element={<h1>404 page not found</h1>}/>
      </Routes>
  
    </div>
    </LoginContext.Provider>
    </>
  )
}

export default App
export {LoginContext}
