// eslint-disable-next-line 

function Card(Props){
    return(
        <div className="col-md-4">
            <img src= '/shoes1.jpg' width= "80%" />
            <h4>{Props.shoes[0].Cardtitle}</h4>
            <p>{Props.shoes[0].price}</p>
        </div>
    )
}

function Product()
export default product