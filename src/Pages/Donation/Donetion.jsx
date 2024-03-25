// import useDonationData from "../../Hooks/useDonationData";

import { useState } from "react";
import DonationCart from "../../Components/DonationCart/DonationCart";
import useLocalStorage from "../../Hooks/useLocalStorage";

const Donetion = () => {

    const {localData} = useLocalStorage();
    const [showAllData, setShowAllData] = useState(4);

    const handleShowAll =()=>{
        setShowAllData(localData.length)
    }
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-6 my-12 max-w-7xl mx-auto px-5 lg:px-0">
                {
                    localData.slice(0,showAllData).map((cart,idx)=><DonationCart key={idx} cart={cart}></DonationCart>)
                }
            </div>
            {
                localData.length > 4 ? (
                    <div className={`${showAllData === localData.length && 'hidden'} text-center mb-10 `}>
                <button onClick={handleShowAll} className="btn btn-success text-white">Show All</button>
            </div> ) : null
            }
        </>
    );
};

export default Donetion;