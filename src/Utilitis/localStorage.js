import { toast } from "react-toastify";

const getDonateData = ()=>{
    const storedData = localStorage.getItem('donetion');
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const savedDonateData = (data)=>{
    const storeddonateData = getDonateData();
    const isExist = storeddonateData.find(item => item.id == data.id);
    if(!isExist){
        storeddonateData.push(data);
        localStorage.setItem('donetion',JSON.stringify(storeddonateData));
        toast.success('added successfully to localstorage');
    }
    else{
        toast.error('This data Allready exist to local storage!');
    }
}
export { getDonateData, savedDonateData };

