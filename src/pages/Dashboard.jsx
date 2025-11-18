import { Outlet } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userAuthenticated");
     window.location.reload()
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