import { useEffect, useState } from "react";
import Header from "../Comp/Header"
import Img1 from "../Images/Main 2.webp";
import Img2 from "../Images/MAIN News.webp";
import Img3 from "../Images/Main3.webp";

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { getNews, getSources } from "../Comp/Apis/Api";

const Home=()=>{
    const [arr,setArr]= useState([]);
    var list=[{
        img:Img1,
        title:"Hall of Fame  world of jury day and army person will work for security",
        date:"12-07-2002"
    },{
        img:Img1,
        title:"Hall of Fame",
        date:"12-07-2002"
    },{
        img:Img1,
        title:"Hall of Fame",
        date:"12-07-2002"
    }   ]
    
    var list1=[{
        img:Img2,
        title:"Hall of Fame  world of jury day and army person will work for security",
        date:"12-07-2002"
    },{
        img:Img3,
        title:"Hall of Fame",
        date:"12-07-2002"
    },{
        img:Img1,
        title:"Hall of Fame",
        date:"12-07-2002"
    }  ,{
        img:Img1,
        title:"Hall of Fame",
        date:"12-07-2002"
    }  ,{
        img:Img1,
        title:"Hall of Fame",
        date:"12-07-2002"
    }  ,{
        img:Img1,
        title:"Hall of Fame",
        date:"12-07-2002"
    }   ]
    function cropletter(word){
        if (word.length>50){
            return word.slice(0,50)+"...."
        }
        return word;
    }
    function dateconverter(dateString){
        // const dateString = '1993-06-17T00:00:00.000Z';
        const date = new Date(dateString);
    
        const year = date.getUTCFullYear();
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const day = date.getUTCDate().toString().padStart(2, '0');
    
        const formattedDate = `${day}-${month}-${year}`;
        return (formattedDate);
    }
    useEffect(()=>{
       (async()=>{
        const data=await getNews(); 
       if(data?.err){
        console.log("some error occuured");
       }
       else{
        console.log(data?.data?.data?.articles);
        setArr(data?.data?.data?.articles);
       }
       })();
    },[])
    const [sources,setsources]=useState([]);
    console.log(sources.length?sources?.slice(0,20):[])
    useEffect(()=>{
        (async()=>{
         const data=await  getSources(); 
        if(data?.err){
         console.log("some error occuured");
        }
        else{
         console.log(data?.data?.data);
         setsources(data?.data?.data?.sources);
        }
        })();
     },[])
      ;
    const [filtarr,setfiltarr]=useState([]);
    const [value,setvalue]=useState("");
    useEffect(()=>{
        if(value)
       if(arr.length){
       const filt= arr.filter(e=>{
            if(e?.title?.toLowerCase()?.includes(value.toLowerCase())){
               return e;
            }
        })
        setfiltarr(filt);
       }
    },[value])
    var arr1=["India","Australia","Pakistan","China","BanglaDesh"];

    const [country,setcountry]=useState(arr1[0]);
    console.log(country);
    function clickHandler(value){
        setcountry(value);
    }
    console.log(value);
    function onChange(e){
        setvalue(e?.target.value);
    }
    return <div className="bg-black w-[100%] h-[100vh] flex flex-col" >
    <Header arr={arr1} value={value} clickHandler={clickHandler} setvalue={setvalue} onChange={onChange} />
   <div className="flex w-[100%] flex-col  min-h-[auto] bg-[rgba(255,255,255,.1)] scroller  overflow-y-scroll !py-[20px]  justify-between  ">
     {/* <div className="flex w-[100%] h-[auto] gap-[20px] px-[8%] ">
     <div className=" flex flex-col w-[60%] h-[160vh] gap-[40px] pt-2 ">
        {
            list.map((e,i)=>{
                return <div key={i} className="w-[100%] relative  h-[50vh] flex items-center justify-center">
                   <img  src={e?.img} className="w-[100%] object-cover h-[100%] shadow-sm" />
                   <div className="absolute h-[100%] px-2 py-2 top-[1px] bottom-[auto] !text-[42px] tracking-wider text-white spec1 w-[100%] bg-[rgba(0,0,0,0.2)] ">{cropletter(e?.title)}</div>
                   <div className="absolute h-[auto] py-2 top-[auto] bottom-[2px] !text-[22px] left-auto right-[2px] tracking-wider text-black opacity-[.5] w-[100%] text-end pr-2 ">{e?.date}</div>

                </div>
            })
        }
     </div>
     <div className="flex w-[35%] h-[auto]   mt-1 gap-[30px] flex-col border-[1px] border-black">
        {list1.map((e,i)=>{
            return  <div className=" relative bg-[rgba(255,255,255,.1)] w-[98%] flex flex-col items-center min-h-[55vh]">
                <img src={e?.img} className="h-[55%] obect-cover mt-[20px] "/>
                <h2 className="text-white line-clamp-2 w-[80%] mt-[15px] text-[18px]"> {e?.title}</h2>
                <div className="absolute h-[auto] py-2 top-[auto] bottom-[2px] !text-[22px] left-auto right-[2px] tracking-wider text-white opacity-[.5] w-[100%] text-end pr-2 ">{e?.date}</div>
                <BookmarkBorderIcon className="absolute h-[auto] py-2 top-[auto] bottom-[2px] !text-[52px] left-[10px] right-[auto] tracking-wider text-white opacity-[.8] w-[100%] text-end pr-2 "/>
            </div>
        })}
     </div>
     </div> */}
    <div className="flex flex-col  overflow-y-srcoll w-[100%] pt-[20px] px-[8%] gap-[40px] ">
       {value?<div className="flex items-start text-white text-[20px]">Search Results : </div>: <h2 className="text-white text-[32px] font-medium tracking-wider">   Top Headlines </h2>}
        {
            value?
            !filtarr.length?<div className="text-white h-[55vh] flex items-center justify-center "> Sorry !  No results</div> :
            filtarr?.map((e,i)=>{
       
                return  <div className="w-[100%] py-2 flex flex-col justify-between min-h-[20vh] bg-[rgba(255,255,255,.1)]" key={i}>
                <a href={e?.url} targte="blank" className="text-white cursor-pointer spec1 w-[95%] underline text-[32px] px-2 line-clamp-2 "> {e?.title}</a>
                
                <div className="flex justify-between px-[20px] w-[100%]">
                {/* <BookmarkBorderIcon className=" h-[auto] py-2 top-[auto] bottom-[2px] !text-[42px] left-[10px] right-[auto] tracking-wider text-white opacity-[.8] w-[100%] text-end pr-2 "/> */}
                <p className='   text-white font-semibold text-[22px]  px-2'>{e?.author}</p>
                <p className=' bg-[rgba(0,0,0,.4)]  text-white font-semibold text-[18px] text-center  flex items-center justify-center px-3 rounded-[4px]'>Published Date : {dateconverter(e?.publishedAt)}</p>
                </div>
            
                </div>
                
               })
            :
           arr.map((e,i)=>{
       
            return  <div className="w-[100%] py-2 flex flex-col justify-between min-h-[20vh] bg-[rgba(255,255,255,.1)]" key={i}>
            <a href={e?.url} targte="blank" className="text-white cursor-pointer spec1 w-[95%] underline text-[32px] px-2 line-clamp-2 "> {e?.title}</a>
            
            <div className="flex justify-between px-[20px] w-[100%]">
            {/* <BookmarkBorderIcon className=" h-[auto] py-2 top-[auto] bottom-[2px] !text-[42px] left-[10px] right-[auto] tracking-wider text-white opacity-[.8] w-[100%] text-end pr-2 "/> */}
            <p className='   text-white font-semibold text-[22px]  px-2'>{e?.author}</p>
            <p className=' bg-[rgba(0,0,0,.4)]  text-white font-semibold text-[18px] text-center  flex items-center justify-center px-3 rounded-[4px]'>Published Date : {dateconverter(e?.publishedAt)}</p>
            </div>
        
            </div>
            
           })
        }
    </div>
     <div className="flex w-[100%] min-h-[auto] py-2 text-black bg-[white]  flex items-center px-[100px]  mt-[50px]   ">
        @latestNewsHeadlines
     </div>
    </div>
    
    </div>
}

export default Home