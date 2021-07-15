 

 function Button(props){

    return(
        <div>
            <button className={props.className || 'btn btn-default'}  >
                {props.children}
            </button>
        </div>
    );
 };

 export default Button;