
import useDonationData from "../../Hooks/useDonationData";
import Card from "../Card/Card";
import CustomSpinner from "../CustomSpinner/CustomSpinner";

const CategoryList = ({filteredData}) => {


    const {data, loading} = useDonationData();

        if(loading){
            return <CustomSpinner></CustomSpinner>
        }
    
    return (
        <div className="grid lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-8 px-5 lg:px-0">
            {
                filteredData.map((item,idx)=> <Card key = {idx} item={item}></Card>)
            }
        </div>
    );
};

export default CategoryList;