import MenuIcon from '@mui/icons-material/Menu';
import logo from "../Images/logo-white.png";
const Header=({value,setvalue,onChange,arr,clickHandler})=>{
  
    return <div className='w-[100%] relative  h-[auto] px-[20px] !py-[20px]  items-center justify-between  flex    text-white'>
        <div className="border-[1px] ml-4 border-white flex justify-center items-center w-[100px] h-[100px]  rounded-[50%]  ">
            <div className="bg-[black] min-w-[110%]  h-[auto]">
                <h1 className="!text-[#d1a088] font-semibold py-[1px] text-[15px] w-[100%]">HeadlineHubs</h1>
                <h1 className="!text-[#d1a088] font-semibold p-[1px] text-[9px] w-[100%]">Latest News Headline</h1>

            </div>
        </div>
        <input placeholder={"search  ... "} value={value} onChange={onChange}  type="text" className=" text-black px-[20px] w-[40%] h-[40px] border-[1px] border-[white] rounded-[20px] outline-none border-none"   />
        <div className="flex gap-[100px] items-center pr-[20px]">
        <div>Home</div>
        <div className="w-[100px] flex items-center  pl-[15px] h-[40px] border-[1px] border-[white] rounded-[20px]">
            <MenuIcon/>
        </div>
        </div>
        {
                arr?.length?<div className="absolute justify-evenly items-center flex w-[80%] rounded-[40px] backdrop-blur-2xl h-[50px] bg-[rgba(255,255,255,0.1)] left-[10%] -bottom-[20px]">
            {
                arr.map((e,i)=>{
                    return <div onClick={()=>{
                        clickHandler(e);
                    }} key={i} className="cursor-pointer" >{e}</div>
                })
            }
                </div>:null
        }
        
        </div>;
}

export default Header;