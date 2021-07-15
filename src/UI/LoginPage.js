import classes from './Login.module.css';
import Card from './Card';
import Button from '../component/Button';
import image from '../contents/Amazon_logo.svg';

function Login(){





    
     
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
                            <input className='form-control' type="text" placeholder="Username" />
                        </div>
                        <div className={classes.password}>
                        <label className='form-label'>Password</label>
                            <input className='form-control' type='password' placeholder="Password"/>
                        </div>
                        <div className={classes.login_btn}>
                            <Button className={"btn btn-warning col-10"}>Login</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;