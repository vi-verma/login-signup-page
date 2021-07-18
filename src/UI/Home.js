import Button from '../component/Button';
import {TOKEN_KEY} from '../constants';


function Home(props){
    const logoutHandeler = () => {
        localStorage.removeItem(TOKEN_KEY);
        props.setIsLoggedIn(false); 
    };

    return(
        <div>
            <p>hommie</p>
            <Button onClick={logoutHandeler}>Log out</Button>
        </div>
    );
};

export default Home;