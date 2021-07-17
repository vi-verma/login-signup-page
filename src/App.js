import Login from "./UI/LoginPage";
import {useState} from 'react';
import Home from "./UI/Home";
import Signup from './UI/Signup';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <Home/> : <Login setIsLoggedIn={setIsLoggedIn} />} 
      <Signup/>
    </div>
  );
};

export default App;
