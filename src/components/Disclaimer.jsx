import React from 'react'
import NavbarInfo from './NavbarInfo'
import Navbar from './Navbar'
import Footer from './Footer'
import Copywrite from './Copywrite'

const Disclaimer = () => {
  return (
    <div>
      <NavbarInfo/>
      <Navbar/>
      <div className='bg-white p-9'>
      <div className='flex justify-center items-center font-[28px] text-[#515151] '> 
         <h1 className='flex text-3xl font-semibold p-5 mt-7 border-b-4 border-gradient-to-r from-blue-400 via-green-400 to-yellow-400'>Disclaimer</h1>
         
      </div>
      <div className='flex justify-center items-center '>
        <div className='text-lg leading-6 w-3/4 p-5 mt-4'>
        SupplyndServices is an online platform that sells various brands and products. They support their merchandise through the Original Equipment Manufacturer (OEM) and adhere to CTS's and FTC's rules for buyer protection. They want to make it clear that they are not associated or affiliated with the products purchased on their website, as those products are also available on the brand owners' websites. For more information, customers should refer to their refund policy or contact them directly with any questions.         </div>
      </div>
      
      </div>
      <Footer/>
      <Copywrite/>
      
      
    </div>
  )
}

export default Disclaimer
