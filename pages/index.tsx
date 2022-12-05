import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { setCompare, setRemove } from '../Store/userSlice';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

//fetching the data from the api 
export async function getServerSideProps({req, res, query} : any) {

 const response = await fetch(`https://api.ratecity.com.au/v2/home-loans` , {
   method: "GET",
   headers: {
     "Content-Type": 'application/json',
     Accept: "application/json",
     "x-api-key": "MaDX2Oo31g3FLAHesYHtGa3rHe40uqkJ8TmbPJn9",
   },
   credentials: "include",
 });
 const data = await response.json();
 let tempObj : any= {}

 console.log(Object.keys(tempObj).length === 0 );
 const mapData = data.hits.map((prod : any)=>{
  tempObj[prod.companyName] = prod
})


return {
   props:{
       data,
       tempObj
   }
}
}

const Index = ({data, tempObj} : any) => {
  const compareArray = useSelector((state: any) => state.userSlice.compare);
  const [productExits, setProductExits] = useState([""])
  const dispatch = useDispatch();
  const dataArray = Object.values(tempObj);


 
  //adding new product in the array
  const compareData = (compData :any) =>{
    if(compareArray.length === 5){
      toast.warn("Only 5 products can be compared at a time.");
    }else{
      dispatch(
        setCompare({
          compData
        })
      );
    }

  }

      //filtering out the array that user wants to remove
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

  // only show compare button when ProductExists state in empty
  useEffect(() => {
  let arr: any = [];
  compareArray.map((items: { uuid: any })=>{
    arr.push(items.uuid)
  })
  setProductExits(arr)
  },[compareArray])
  
  return(
         <>
        
          <div className='products'>
     {
       dataArray.map((item : any)=>{
           return (
               <div key={item.uuid} className="products_table">
                <span className='product_name'>{item.name}</span>
               <div className="product_table_rate">
                 <div className="product_table_advertisedrate">
                  Advertised rate
                 <span className='rate'> {item.advertisedRate}%</span>
                 </div> 
                 <div className='middle_border'></div>
                 <div className="product_table_advertisedrate">
                  Comparison rate
                  <span className='rate'> {item.comparisonRate}%</span>
                 </div> 
               </div>
               <div className='product_table_pros'>
                {
                  item.pros.slice(0, 4).map((pro: any)=>{
                    return(
                      <p key={pro}>✔ {pro}</p>
                    )
                  })
                }
               </div>
               <div className='product_table_compare'>
                {
                 productExits.includes(item.uuid) ? 
                (  <span onClick={()=>RemoveData(item.uuid)} className="compare_remove">Remove</span>)
                  :
                ( <span onClick={()=>compareData(item)} className="compare_compare">Compare</span> )

                }
                <a href={item.applyUrl} target="_blank" rel="noreferrer"> <span className='moreinfo'>More Information</span></a>
               </div>
               <div className='product_table_companyInfo'>
                <span ><img src={item.companyLogo} className='companyLogo'/></span> <a href={item.gotoSiteUrl} target="_blank" rel="noreferrer"><span className='company_btn'>Go to site ➡</span></a> 
               </div>
               </div>
           )
       })
     }
     </div>
       </>
     )
}

export default Index