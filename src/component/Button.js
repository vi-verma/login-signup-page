 

 function Button(props){

    return(
        <div >
            <button onClick={props.onClick} type={props.type || "button"} className={props.className || 'btn btn-secondary  '}  >
                {props.children}
            </button>
        </div>
    );
 };

 export default Button;