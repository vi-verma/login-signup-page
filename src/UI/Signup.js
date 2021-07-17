  import Button from '../component/Button';
  import classes from './Signup.module.css';


  function Signup(){
      return(
        <div className={classes.signup_background}>
          <div className={classes.signup_body}>
              <div className={classes.header}>
                  <p >Facebook</p>
                  <div>
                    <Button className={'btn btn-primary'}>Login to existing Account</Button>
                  </div>
              </div>
              <div>
                    <p>Create a new account</p>
                    <p>It's quick and easy. </p>
                    <input type='text' placeholder='First name'></input>
                    <input type='text' placeholder='Last name'></input>
                    <input type='text' placeholder='User id'></input>
                    <input type='password' placeholder='password'></input>
                    <div type='text' placeholder='city'></div>
                    <input type='text' placeholder='' ></input>
              </div>
          </div>
        </div>
      );
    };
    
    export default Signup;