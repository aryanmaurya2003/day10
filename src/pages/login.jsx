import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function login(props) {
  let navigate = useNavigate();
  console.log("welcome to login page", props.authenticated);

  useEffect(() => {
    if (props.authenticated === true) {
      console.log("user is logged in see this")
      navigate("/");
    }
  }, []);


  const LoginHandler = () => {
    props.setauthenticated(true);
    localStorage.setItem("userAuthenticated", true);
    console.log("user is logged in")
    navigate("/");
  }

  return (
    <button onClick={LoginHandler}>Login</button>
  )
}

export default login