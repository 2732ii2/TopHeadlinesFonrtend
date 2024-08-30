import axios from "axios";
var Url='http://localhost:4800/';
Url='https://topheadliinesbackend.onrender.com/';
const getNews=async()=>{
    try{
        const resp=await axios.get(`${Url}news`);
        console.log(resp);
        return {data:resp};
    }
    catch(e){
        console.log(e?.message);
        return {err:e?.message};
    }
}
const getSources=async()=>{
    try{
        const resp=await axios.get(`${Url}sources`);
        console.log(resp);
        return {data:resp};
    }
    catch(e){
        console.log(e?.message);
        return {err:e?.message};
    }
}
export {getNews,getSources};