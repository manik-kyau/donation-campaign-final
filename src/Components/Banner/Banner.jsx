import CustomSpinner from "../CustomSpinner/CustomSpinner";


const Banner = ({setSearchValue,handleSearch,searchValue}) => {

    const clearSearchBar = () =>{
        setSearchValue("");
    }

    return (
        <div className="relative h-[450px] flex flex-col justify-center items-center  space-y-5 ">
            <div className=" absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center bg-no-repeat opacity-10">

            </div>
            <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-inherit text-center">
                I Grow By Helping People In Need
            </h2>
                
                <div className="border-2 border-gray-700 w-[478.1px] rounded-l-lg rounded-r-xl mx-auto pl-3 z-10 bg-gray-100">
                <input 
                
                onChange={(event)=>setSearchValue(event.target.value)}
                type="text" 
                // searchValue = {searchValue}
                placeholder="Type here" 
                className="outline-none input-bordered w-full max-w-xs bg-gray-100" />
                <button onClick={()=>{handleSearch()
                    clearSearchBar();
                }} 
                className="btn btn-error text-lg text-white px-10 rounded-l-none">Search</button>
                </div>
            {/* <div className="border-2 flex items-end h-[150px]">
                <CustomSpinner></CustomSpinner> */}
            {/* </div> */}
        </div>
    );
};

export default Banner;