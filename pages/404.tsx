import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Errorpage = () => {
    const router = useRouter()

    const handelClick = () =>{
        router.push("/")
    }

    //automatically redirecting user to home page 
    useEffect(() => {
        setTimeout(()=>{
            router.push("/")
        },1000)
  
    }, [])
    
  return (
    <div>
      404
     <p onClick={handelClick}>Back</p>
    </div>

  )
}

export default Errorpage    