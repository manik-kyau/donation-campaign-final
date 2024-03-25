import { Link } from "react-router-dom";

const Card = ({item}) => {
    const {id,title,image,description,category,cardBg,textColor,categoryBg} = item || {};
    return (
        <div>
            <Link to={`/donetion-details/${id}`}>
                <div style={{backgroundColor: cardBg}} className="card card-compact bg-base-100 border">
                  <figure><img className="h-[160px] w-full" src={image} alt="Shoes" /></figure>
                  <div className="card-body">

                    <div className="card-actions justify-start">
                      <button  style={{backgroundColor: categoryBg}}  className="btn  text-white text-lg ">{category}</button>
                    </div>

                    <h2 style={{color: textColor}} className="card-title">{title}</h2>
                    {/* <p>{description}</p> */}
                    
                  </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;