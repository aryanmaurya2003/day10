import { use, useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/login'
import ProtectedRoute from './protectedRoute/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Counter from './pages/counter'
import Stopwatch from './pages/Stopwatch'


function App() {

  const [authenticated,setauthenticated]=useState(()=> {return localStorage.getItem("userAuthenticated")=="true"});
  

  return (
    <>
    <div>
      <Routes>
        {/* <Route path='/' element={<Login setauthenticated={setauthenticated} authenticated={authenticated}  />}/> */}
        <Route path='/login' element={<Login setauthenticated={setauthenticated} authenticated={authenticated}  />}/>
        <Route path='/' element={<ProtectedRoute authenticated={authenticated} > <Dashboard/> </ProtectedRoute>}>
        <Route path='' element={<Counter/>}/>
        <Route path='watch' element={<Stopwatch/>}/>
        </Route>
        <Route path='*' element={<h1>404 page not found</h1>}/>
      </Routes>
  
    </div>
    </>
  )
}

export default App
