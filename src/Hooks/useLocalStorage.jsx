import { useEffect, useState } from "react";
import { getDonateData } from "../Utilitis/localStorage";

const useLocalStorage = () => {

    const [localData, setLocalData] = useState([]);

    useEffect(()=>{
        const localStorageData = getDonateData()
        setLocalData(localStorageData);
    },[])
    // console.log(localData);
    return { localData }
};

export default useLocalStorage;