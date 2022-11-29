import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setRemove, setReset } from '../Store/userSlice';
import  { useRouter } from 'next/router'
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Compare = () => {
    const compareArray = useSelector((state: any) => state.userSlice.compare);
    const dispatch = useDispatch();
    const router = useRouter();

     const reset = () =>{
        dispatch(
            setReset({
                resetData: []
            })
          );
     }

     const RemoveData = (remData : any) =>{
        const newData = compareArray.filter((item: any) => {
         return item.uuid !== remData;
        });
        if(newData){
          dispatch(
            setRemove({
              newData
            })
          );
        }
      }

const compareData = () => {
 if(compareArray.length !== 1){ 
    router.push('/compareproducts')
    
 }else{
  toast.warn("Add one more product to compare");
   
 }   
}

    if(compareArray.length !== 0 && router.pathname !== "/compareproducts"){
        
  return (
    <div className='compare'>
      <p style={{color: "white"}}> Comparing {compareArray.length}/5 products</p>
        <div className="compare_box">
       {
        compareArray.map((item: any)=>{
        return(
            <div className="compare_logos">
            <div className='remove_logo' onClick={()=>RemoveData(item.uuid)} >❎</div>
            <span><img src={item.companyLogo} className='companyLogo'/></span> 
            </div>
        )
      
        })
       }
      <p onClick={compareData} className="compare_btn">Compare</p>  
      <p onClick={reset} className="compare_reset_btn">Reset All</p>  
      </div>
    </div>
         )
    }else{
        return (
            <></>
                 ) 
    }
}

export default Compare