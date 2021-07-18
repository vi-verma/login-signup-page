import Login from "./UI/LoginPage";
import {useEffect, useState} from 'react';
import Home from "./UI/Home";
import Signup from './UI/Signup';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  // const [login, setLogin] = useState(false)

  useEffect(() => {
    console.log(localStorage.TOKEN_key)
    if(localStorage.token){
      setIsLoggedIn(true);
      return;
    }setIsLoggedIn(false);
  },[])

  return (
    <div>
      {isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn}/> :   signUp ?   <Signup setSignUp={setSignUp} /> : <Login setSignUp={setSignUp} setIsLoggedIn={setIsLoggedIn} />} 
     
    </div>
  );
};

export default App;
