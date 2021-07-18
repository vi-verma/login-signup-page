import classes from './Login.module.css';
import Card from './Card';
import Button from '../component/Button';
import image from '../contents/Amazon_logo.svg';
import {useReducer} from 'react';
import { TOKEN_KEY } from '../constants';
// import Signup from './Signup';

// email
const userIdReducer = (state, action) => {
    if(action.type === 'USER_ID'){
        return {value: action.val, isValid: action.val.includes('@') || action.val.trim().length > 5}
    }return {value: '', isValid: true};
};
const passwordReducer = (state, action) => {
    if(action.type === 'LOGIN_PASSWORD'){
        return {value: action.val, isValid: action.val.length > 5}
    }
    return{value:'', isvalid: true};
};

function Login(props){

const [userIdState, userIdDispatch] = useReducer(userIdReducer, {value:'',isValid: true});
const [passwordState, passwordDispatch] = useReducer(passwordReducer, {value: '', isValid: true});

    const userIdHandeler = (event) => {
        // console.log(event.target.value)
        userIdDispatch({type:'USER_ID', val:event.target.value})
    };
    const passwordHandeler = (event) => {
        passwordDispatch({type:'LOGIN_PASSWORD', val:event.target.value})
    };

    const loginFetch = async() => {
        try{
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                body:JSON.stringify({userId:userIdState.value, password: passwordState.value }),
                headers:{
                    'Content-Type':'application/json',
                },
                mode: 'cors'
            });
            try{
                const data = await response.json();
                if(data.token){
                    localStorage.setItem(TOKEN_KEY, data.token);
                    props.setIsLoggedIn(true)
                }
                // console.log(data.token);
                alert(data.msg)
            }catch(err){
                console.log(err);
            };
        }catch(error){
            console.log(error);
        }
    };


    const loginHandeler = () => {
        // console.log(userIdState);
        //console.log(passwordState.value)
        if(userIdState.isValid === true || passwordState.isValid === true){
            loginFetch();
        }else{
            alert("email or password field shouls not be empty.")
        };
    };

    const signupHandeler = () => {
        props.setSignUp(true);
    };

     
    return(
        <div className='container-fluid'>
            <div className='container'>
                <div className={classes.container_body}>
                    <img className={classes.image} src={image} alt='img'></img>
                    <Card className={classes.card}> 
                        <p className={classes.head}>
                            Sign-In
                        </p>
                        <div className={classes.username}>
                            <label className={'form-label'}>Email</label>
                            <input  onChange={userIdHandeler} className={userIdState.isValid ? 'form-control ' : 'form-control '+ classes.invalid} type="text" placeholder="Username" />
                        </div>
                        <div className={classes.password}>
                            <label className='form-label'>Password</label>
                            <input onChange={passwordHandeler} className={passwordState.isValid ? 'form-control' : "form-control " + classes.invalid} type='password' placeholder="Password"/>
                        </div>
                        <div className={classes.login_btn}>
                            <Button onClick={loginHandeler} className={"btn btn-warning col-10"}>Login</Button>
                        </div>
                    </Card>
                    
                    <div className ={classes.signup}>
                        <Button className={'btn btn-success ' + classes.signup_btn} onClick={signupHandeler}>Create your amazon account</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;