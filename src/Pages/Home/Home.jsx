import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import CategoryList from "../../Components/CategoryList/CategoryList";
import useDonationData from "../../Hooks/useDonationData";
import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";


const Home = () => {

    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const {data, loading} = useDonationData();

    useEffect(()=>{
        setFilteredData(data);
    },[data]);

    const handleSearch = () =>{
        if(searchValue.trim() != ""){
            const filtered = data.filter(item => item.category.toLowerCase().includes(searchValue.toLowerCase()));
            setFilteredData(filtered);
        }
        else{
            setFilteredData(data);
        }
    }
    return (
        <div>
            <Banner 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue} 
                handleSearch = {handleSearch}
            ></Banner>
            {/* <CustomSpinner></CustomSpinner> */}

            <CategoryList filteredData= {filteredData}></CategoryList>
        </div>
    );
};

export default Home;