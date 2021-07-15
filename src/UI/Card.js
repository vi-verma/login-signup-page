function Card(props){

    return(
        <div className={props.className}>
            <div className="card">
                <div className='card-body'>
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;