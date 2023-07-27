
import { Link } from "react-router-dom";

const Pet = ({name, animal , breed, location, id, images}) => {
    let hero = "http://pets-images.dev-apis.com/pet/none.jpg"
    if (images.length) {
        hero = images[0];
    }
    return (
        <Link href={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{animal} - {breed} - {location}</h2>
            </div>
        </Link>
    )
}

export default Pet;