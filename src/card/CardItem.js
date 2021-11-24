

function  CardItem ({props}) {
    
    // const Title, Year, imdbID, Type, Poster = props
    return ( 
             <div className="card movie">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={props.Poster} alt="" />
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{props.Title}<i class="material-icons right">{props.Year}</i></span>
                <p><a href="#">{props.Type}</a></p>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{props.Title}<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
    )
}

export default CardItem;