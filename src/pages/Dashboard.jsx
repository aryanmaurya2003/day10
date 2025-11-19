import { useContext } from 'react';
import { LoginContext } from '../App';
import { Outlet } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

function Dashboard() {
  const {authenticated,setauthenticated}=useContext(LoginContext)
  console.log("authenticated",authenticated)
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userAuthenticated");
    setauthenticated(false)
    alert("user is logged out" )
    navigate('')
  }


  return (
    <div>

      <div >
        <ul className='navLink'>
          <li><Link className="whiteColor" to={""}>counter</Link></li>
          <li><Link className="whiteColor" to={"watch"}>watch</Link></li>
          <li><Link className="whiteColor" onClick={handleLogout}>logout</Link></li>
        </ul>
      </div>
      <div  >
      <Outlet   />
      </div>
    </div>
  )
}

export default Dashboard