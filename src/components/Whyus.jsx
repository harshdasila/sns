import React from 'react'
import NavbarInfo from './NavbarInfo'
import Navbar from './Navbar'
import Footer from './Footer'
import Copywrite from './Copywrite'

const Whyus = () => {
  return (
    <div>
      <NavbarInfo/>
      <Navbar/>
      <div className='bg-white p-9'>
      <div className='flex justify-center items-center font-[28px] text-[#515151] '> 
         <h1 className='flex text-3xl font-semibold p-5 mt-7 border-b-4 border-gradient-to-r from-blue-400 via-green-400 to-yellow-400'>Why Choose US</h1>
         
      </div>
      <div className='flex justify-center items-center '>
        <div className='text-lg leading-6 w-3/4 p-5 mt-4'>
        <h2 className='text-3xl font-bold mb-3 mt-3'>Authentic Products</h2>

        <p>
            At SupplyndServices, we pride ourselves on offering only authentic products to our customers. We carefully select our suppliers and ensure that they are verified vendors to guarantee the highest quality products. Our commitment to authenticity is unwavering, and we stand behind our services with a 10-day, no-questions-asked refund policy. If for any reason you are not satisfied with your purchase, you can return it to us within 10 days for a full refund. Our goal is to provide our customers with the best possible products and services, and we are confident that you will be satisfied with your experience shopping with us.   
        </p>
        <br/>

        <h2 className='text-3xl font-bold mb-3 mt-3'>24/7 Customer Service</h2>

        <p>
        At SupplyndServices, we understand the importance of your order and value your time. That's why our dedicated customer service representatives are available Round The Clock to address any inquiries you may have regarding order status, order tracking, cancellations, refunds, and general queries. Whether you need assistance with placing an order, tracking your shipment, or have any other questions, our knowledgeable representatives are always here to help. Our commitment to exceptional customer service is a top priority for us, and we strive to provide prompt and efficient responses to all of your requests. We are here to make your shopping experience with us as seamless and stress-free as possible.   
        </p>
        </div>
       
      </div>
      
      </div>
      <Footer/>
      <Copywrite/>
      
      
    </div>
  )
}

export default Whyus
