import HTML from'./assets/html.png'
const course1="html"
function Course(props){
    
    return(
        <div className="card" >
    
            <img src={HTML}  alt=""/>
            <h3>{props.price}</h3>
            <p>{props.name} </p>

 <p></p>        </div>
    );
}
Course.defaultProps ={
    name:"code",
    price:"$3"
}

export default Course