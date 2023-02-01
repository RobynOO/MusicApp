import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';



function App() {

  const CLIENT_ID = '6f0017dcdabc41438fa281c906e6ce93';
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const REDIRECT_URI = 'http://localhost:3000'; 
  const RESPONSE_TYPE = "token";


  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
      

    }

    setToken(token);

  }, [])

  // const logout = () => {
  //     setToken("")
  //     window.localStorage.removeItem("token")
  // }
  
  

  return (
    <div>
        <div className='login-page-div'>
          <h1 >Spotify React </h1>
          {!token ? 
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="login-link">
            Log In to Spotify </a> 
            : window.location.assign("http://localhost:3000/home")
          }
        </div>
    </div>
  )
};

export default App;
