import { useReducer } from 'react';
import Button from '../component/Button';
import classes from './Signup.module.css';

const userIdReducer = (state, action) => {
    if(action.type === "USER_ID"){
        return{value: action.val, isValid:action.val.includes("@")};
    }return{value:'', isvalid:true};
};
const  passwordReducer = (state, action) => {
    if(action.type === "PASSWORD"){
        return{value:action.val, isValid:action.val.length > 5};
    }return{value:'', isvalid: true};
};
const fNameReducer = (state, action) =>{
    if(action.type === "FIRST_NAME"){
        return{value: action.val, isValid: action.val.length > 1};
    }return {value: '', isValid: true};
};
const lNameReducer = (state, action) => {
    if(action.type === "LAST_NAME"){
        return{value: action.val,isValid: action.val.length > 2};
    }return{value:'', isvalid: true};
};
const cityReducer = (state, action) => {
    if(action.type === "CITY"){
        return{value: action.val,isValid: action.val.length > 3};
    }return{value:'', isvalid: true};
};
const stateReducer = (state, action) => {
    if(action.type === "STATE"){
        return{value: action.val,isValid: action.val.length > 3};
    }return{value:'', isvalid: true};
};
const countryReducer = (state, action) => {
    if(action.type === "country"){
        return{value: action.val,isValid: action.val.length > 3};
    }return{value:'', isvalid: true};
};
const pinReducer = (state, action) => {
    if(action.type === "PIN_CODE"){
        return{value: action.val,isValid: action.val.length === 6};
    }return{value:'', isvalid: true};
};

function Signup(props){
    const [idState, userIdDispatch] = useReducer(userIdReducer, {value:'', isValid: true});
    const [passwordState, passwordDispatch] = useReducer(passwordReducer, {value:'', isValid:true});
    const [fNameState, fNameDispatch] = useReducer(fNameReducer, {value:'', isValid:true});
    const [lNameState, lNameDispatch] = useReducer(lNameReducer, {value:'', isValid:true});
    const [cityState, cityDispatch] = useReducer(cityReducer, {value:'', isValid:true});
    const [stateState, stateDispatch] = useReducer(stateReducer, {value:'', isValid:true});
    const [countryState, countryDispatch] = useReducer(countryReducer, {value:'', isValid:true});
    const [pinState, pinDispatch] = useReducer(pinReducer, {value:'', isValid:true});


    const signUpToLoginHandeler = () => {
        props.setSignUp(false);     
    };

    const UserIdHandeler = (event) => {
        userIdDispatch({type:'USER_ID', val: event.target.value})
    };
    const passwordHandeler = (event) => {
        passwordDispatch({type:'PASSWORD', val:event.target.value})
    };
    const FirstNameHandeler = (event) => {
        fNameDispatch({type: "First_NAME", val: event.target.value })
    };
    const lastNameHandeler = (e) => {
        lNameDispatch({type: "LAST_NAME", val: e.target.value})
    };
    const cityHandeler = (e) => {
        cityDispatch({type: "CITY", val: e.target.value})
    };
    const stateHandeler = (e) => {
        stateDispatch({type: "STATE", val: e.target.value})
    };
    const countryHandeler = (e) => {
        countryDispatch({type: "COUNTRY", val: e.target.value})
    };
    const pinCodeHandeler = (e) => {
        pinDispatch({type: "PIN_CODE", val: e.target.value})
    };

    const signUpFetch = async ()=> {
        try{
            const response = await fetch('http://localhost:3000/users/',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                mode:'cors',
                body:JSON.stringify({
                    "userId":idState.value,
                    "password": passwordState.value,
                    "firstName": fNameState.value,
                    "lastName": lNameState.value,
                    "state": stateState.value,
                    "country": countryState.value,
                    "city": cityState.value,
                    "pinCode": pinState.value
                }),
            });
            try{
                const data = await response.json();
                alert(data.msg);
            }catch(err){
                alert(err);
            };
        }catch(error){
            alert(error);
        };
    };



    const signHandeler = () => {
        signUpFetch();
    };

    return(
            <div className={classes.signup_background}>
                <div className={classes.header}>
                    <p>
                        Facebook
                    </p>
                    <div className={classes.login_btn}>
                        <Button onClick={signUpToLoginHandeler} className={'btn btn-primary'}>
                            Login to existing Account
                        </Button>
                    </div>
                </div>
            <div className={classes.signup_body}>
                <div className='raw ' >
                    <p className={'col-sm-12 ' + classes.sub_header} >
                        Create a new account
                    </p>
                    <p className={'col-sm-12 ' + classes.info}>
                        It's quick and easy. 
                    </p>


                    <div className='col-sm-12'>
                        <input onChange={UserIdHandeler} className={idState.isValid ? 'form-control' :'form-control ' + classes.err} type='text' placeholder='User id'></input>
                    </div>
                    <div className='col-sm-12'>
                        <input onChange={passwordHandeler} className={passwordState.isValid ? 'form-control' :'form-control ' + classes.err} type='password' placeholder='password'></input>
                    </div>
                    <div className='col-sm-6'>
                        <input onChange={FirstNameHandeler}  className={fNameState.isValid ? 'form-control' :'form-control ' + classes.err} type='text' placeholder='First name'></input>
                    </div>
                    <div className={'col-sm-5 ' + classes.fname}>
                        <input onChange={lastNameHandeler} className={fNameState.isValid ? 'form-control' :'form-control ' + classes.err} type='text' placeholder='Last name'></input>
                    </div>
                    <div className='col-sm-5'>
                        <input onChange={cityHandeler} className={cityState.isValid ? 'form-control' :'form-control ' + classes.err} type='text' placeholder='city'></input>
                    </div>
                    <div className='col-sm-5'>
                        <input onChange={stateHandeler} className={stateState.isValid ? 'form-control' :'form-control ' + classes.err} type='text' placeholder='state' ></input>
                    </div>
                    <div className='col-sm-5'>
                        <input onChange={countryHandeler} className={countryState.isValid ? 'form-control' :'form-control ' + classes.err} type='text' placeholder='country' ></input>
                    </div>
                    <div className='col-sm-5'>
                        <input onChange={pinCodeHandeler} className={pinState.isValid ? 'form-control' :'form-control ' + classes.err} type='number' placeholder='pin code' ></input>
                    </div>
                    <div className={'col-sm-12 ' + classes.button_si}>
                        <Button onClick={signHandeler} className={'btn btn-success ' + classes.signup_btn}>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;