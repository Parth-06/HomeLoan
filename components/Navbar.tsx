import Link from 'next/link'
import { useRouter } from 'next/router'
const Navbar = () => {
  const router = useRouter()
  const isSelected = router.pathname
  
  return (
   <>
   <nav className='navbar'>
   <Link href="/">
    <h1>Top Home Loan Products</h1>
    </Link>
    <div className='navbar_contents'>
   <Link href="/">
    <p style={isSelected === "/" ? {fontWeight: "700", color: "black"} : {}}>ALL</p>
   </Link>
    <p>REFINANCE</p>
    <p>FIRST HOME BUYER</p>
    <p>INVESTOR</p>
    <p>NON BANK</p>
   </div>
   </nav>
   </>
  )
}

export default Navbar