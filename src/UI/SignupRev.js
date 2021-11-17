import { useReducer } from "react/cjs/react.development";
import classes from "./SignupRev.module.css";

const userIdReducer = (state, action) => {
    if(action.type === 'userId'){
        return{
            isValid: action.type
        }
    }
}

const SignupUser = () => {

    const [userIdState, userIdDispatch] = useReducer(userIdReducer, {isValid: true, value:''});

    const onSubmitHandeler = () => {

    };

    const userIdHandeler = (event) => {
        console.log(event.target.value);
        userIdDispatch({type: 'userId', value: event.target.value})
    }
    const passwordHandeler = (event) => {
        
    };
    const firstNameHandeler = () =>  {};
    const lastNameHandeler = () => {};
    const cityHandeler = ( ) => {};
    const stateHandeler = () => {};
    const countryHandeler = ( ) => {};
    const pinHandeler = ( ) => {};

    return(
        <div className={classes.main}>
            {/* <form> */}
                <div className='form-row row'>
                    <div className='col-md-12 '>
                        <input onChange={userIdHandeler} className=" form-control" type='text' placeholder='user id'></input>
                    </div>
                    <div className='col-md-12'>
                        <input onChange={passwordHandeler} type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                    <div className='col-md-6 lg-6'>
                        <input onChange={firstNameHandeler} className="form-control" type='text' placeholder='First Name'></input>
                    </div>
                    <div className='col-md-6'>
                        <input onChange={lastNameHandeler} className="form-control" type='text' placeholder='Last Name'></input>
                    </div>
                    <div className='col-md-6'>
                        <input onChange={cityHandeler} className="form-control" id="inputAddress3"  type='text' placeholder='City'></input>
                    </div>
                    <div className='col-md-6'>
                        <input onChange={stateHandeler} className="form-control" id="inputAddress"  type='text' placeholder='State'></input>
                    </div>
                    <div className='col-md-6'>
                    <input onChange={countryHandeler} className="form-control " id="inputAddress2"  type='text' placeholder='Country'></input>
                    </div>
                    <div className='col-md-6'>
                        <input onChange={pinHandeler} className="form-control"id="inputAddress4"  type='text' placeholder='Pin code'></input>
                    </div>
                    <div className={'col-md-12 ' + classes.btn } >
                        <button className="btn btn-primary btn-lg" type='button' onClick={onSubmitHandeler}> Submit</button>
                    </div>
                </div>
            {/* </form> */}
        </div>
    );
};

export default SignupUser;