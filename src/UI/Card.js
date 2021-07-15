function Card(props){

    return(
        <div className="card">
            <div className={props.className || 'card-body'}>
                {
                    props.children
                }
            </div>
        </div>
    );
};

export default Card;