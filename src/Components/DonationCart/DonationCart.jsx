
const DonationCart = ({cart}) => {
    const {title,image,description,textColor,price,category,cardBg,categoryBg} = cart || {};
    return (
        <div style={{backgroundColor:cardBg}} className="hero bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img src={image} className=" w-full lg:w-[200px] h-[260px] rounded-lg shadow-2xl" />
            <div>
            <button style={{backgroundColor:categoryBg, color:textColor}} className="btn  text-lg mb-3">{category}</button>
              <h1 style={{color:textColor}} className="text-4xl font-bold">{title}</h1>
              <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

              <div>
                <button style={{backgroundColor:cardBg}} className="btn text-lg">View Details</button>
              </div>
              
            </div>
          </div>
        </div>
    );
};

export default DonationCart;