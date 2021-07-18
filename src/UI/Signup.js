  import Button from '../component/Button';
  import classes from './Signup.module.css';


    function Signup(props){
        const signUpToLoginHandeler = () => {
            props.setSignUp(false);
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
                    <div className='col-sm-5'>
                        <input  className='form-control' type='text' placeholder='First name'></input>
                    </div>
                    <div className={'col-sm-5' + classes.fname}>
                        <input className='form-control' type='text' placeholder='Last name'></input>
                    </div>
                    <div className='col-sm-12'>
                        <input className='form-control' type='text' placeholder='User id'></input>
                    </div>
                    <div className='col-sm-12'>
                        <input className='form-control' type='password' placeholder='password'></input>
                    </div>
                    <div className='col-sm-6'>
                        <input className='form-control' type='text' placeholder='city'></input>
                    </div>
                    <div className='col-sm-6'>
                        <input className='form-control' type='text' placeholder='' ></input>
                    </div>
                    <div className={'col-sm-12 ' + classes.button_si}>
                        <Button className={'btn btn-success ' + classes.signup_btn}>Sign Up</Button>
                    </div>
              </div>
          </div>
        </div>
      );
    };
export default Signup;