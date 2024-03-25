import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import { savedDonateData } from "../../Utilitis/localStorage";
import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";


const DonetionDetailsPage = () => {

    const [singleData,setSingleData] = useState([]);
    const {id} = useParams();
    const {data, loading} = useDonationData();
    const handleDonate =(singleData)=>{
        savedDonateData(singleData);
    }

    useEffect(()=>{
        if(data){
            const singleData = data.find((item)=> item.id == id);
            setSingleData(singleData);
        }
    },[data, id]);
    
    if(loading){
      return <CustomSpinner></CustomSpinner>
    }

    const {title,image,description,textColor,price} = singleData || {};
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className=" card bg-base-100 border-2 px-12 py-5">
              <div className="relative">
                <img className="rounded-lg w-full lg:h-[600px]" src={image} alt="Shoes" />
                <div className="w-full p-10 bg-black absolute  bg-opacity-40 bottom-0 rounded-b-xl">
                    <button onClick={()=>handleDonate(singleData)} style={{backgroundColor: textColor}} className="btn text-lg text-white z-10"> Donate: ${price}</button>
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">
                  {title}
                </h2>
                <p>{description}</p>
                
              </div>
            </div>
        </div>
    );
};

export default DonetionDetailsPage;