import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setRemove } from '../Store/userSlice';

const Compareproducts = () => {
    const compareArray = useSelector((state: any) => state.userSlice.compare);
    const router = useRouter();
    const dispatch = useDispatch();
  
   //if no array to compare then redirect to home
    useEffect(() => {
     if(compareArray.length === 0){
      router.push('/')
     }
    }, [])
    
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
    
  return (
    <div className='compareproducts'>
      <div className='compareproducts_title'>
      <h1>Home Loan Comparison</h1>
      <p>Compare Home Loan Products</p>
      </div>
     <div className='compareproducts_table'>
      <div className="row_1">
        <div className="row_1_compare">
          Compare
        </div>
        {
          compareArray.map((item : any)=>{
            return(
              <>
            <div className="row_1_compare">
              {
                compareArray.length > 2 ?
                <div className='row_1_compare_remove' onClick={()=>RemoveData(item.uuid)}>❎</div>
                :
                <></>
              }
          
             <span className='row_1_compare_name'>{item.companyName}</span> 
             <p>{item.name}</p>
             <span ><img src={item.companyLogo} className='companyLogo'/></span>
            </div>
              </>
        
            )
          })
        }
      </div>
      <div className="row_1">
        <div className="row_2_compare">
          Interest Rate
        </div>
        {
          compareArray.map((item : any)=>{
            return(
              <>
            <div className="row_2_compare">
             <span className='row_1_compare_rate'>{item.advertisedRate}%  </span> 
            </div>
              </>
        
            )
          })
        }
      </div>
      <div className="row_1">
        <div className="row_2_compare">
          Comparison Rate
        </div>
        {
          compareArray.map((item : any)=>{
            return(
              <>
            <div className="row_2_compare">
             <span className='row_1_compare_rate'>{item.comparisonRate}%  </span> 
            </div>
              </>
        
            )
          })
        }
      </div>
      <div className="row_1">
        <div className="row_2_compare">
          Minimum Deposit
        </div>
        {
          compareArray.map((item : any)=>{
            return(
              <>
            <div className="row_2_compare">
             <span className='row_1_compare_rate'>{item.minDeposit}%  </span> 
            </div>
              </>
        
            )
          })
        }
      </div>
      <div className="row_1">
        <div className="row_2_compare">
         Monthly Repayments
        </div>
        {
          compareArray.map((item : any)=>{
            return(
              <>
            <div className="row_2_compare">
              {
                item.hasMonthlyRepayments ?
                <span className='row_1_compare_rate'>✔</span>
                :
                <span className='row_1_compare_rate'>❌</span> 
              }
            
            </div>
              </>
        
            )
          })
        }
      </div>
      <div className="row_1">
        <div className="row_2_compare">
        Loyalty Discount
        </div>
        {
          compareArray.map((item : any)=>{
            return(
              <>
            <div className="row_2_compare">
              {
                item.hasLoyaltyDiscount ?
                <span className='row_1_compare_rate'>✔</span>
                :
                <span className='row_1_compare_rate'>❌</span> 
              }
            
            </div>
              </>
        
            )
          })
        }
      </div>
      <div className="row_1">
        <div className="row_2_compare">
     
        </div>
        {
          compareArray.map((item : any)=>{
            return(
              <>
            <div className="row_2_compare">
            <a href={item.gotoSiteUrl} target="_blank" rel="noreferrer"><span className='company_btn' style={{marginLeft: "2rem"}}>Go to site ➡</span></a>
            </div>
              </>
        
            )
          })
        }
      </div>
     </div>
    </div>
  )
}

export default Compareproducts