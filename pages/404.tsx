import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
const Errorpage = () => {
    const router = useRouter()
    const handelClick = () =>{
        router.push("/")
    }

    useEffect(() => {
        setTimeout(()=>{
            router.push("/")
        },1000)
  
    }, [])
    
  return (
    <div>404
      
        
            <p onClick={handelClick}>Back</p>

      
    </div>

  )
}

export default Errorpage    