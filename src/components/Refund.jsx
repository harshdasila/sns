import React from 'react'
import NavbarInfo from './NavbarInfo'
import Navbar from './Navbar'
import Footer from './Footer'
import Copywrite from './Copywrite'

const Refund = () => {
  return (
    <div>
    <NavbarInfo/>
    <Navbar/>
    <div className='bg-white p-9'>
    <div className='flex justify-center items-center font-[28px] text-[#515151] '> 
       <h1 className='flex text-3xl font-semibold p-5 mt-7 border-b-4 border-gradient-to-r from-blue-400 via-green-400 to-yellow-400'>Refund Policy</h1>
       
    </div>
    
    <div className='flex justify-center items-center'>
        <div className='w-3/4'>
        <div className='text-3xl font-semibold mb-5 mt-8'>
    Returns & Refunds / Faulty Goods

    </div>
        <ol className='list-decimal'>
            <li className="mb-2">
            However, if you have already tried contacting the manufacturer and the issue persists, or if the goods are found to be faulty upon receipt, we recommend contacting our Customer Services Department at +1-(803)753-8877 to discuss your request for a refund or replacement. Our team will assist you in resolving the issue in accordance with our returns and refunds policy.

            </li>
            <li className="mb-4">This is important to ensure that we can provide you with the best possible solution for your specific situation. Our Customer Services Department will guide you through the process and provide you with all the necessary information to initiate a return or request a refund. Please have your order number and details of the faulty goods ready when you call at +1-(803)753-8877. We aim to resolve all returns and refunds requests as quickly and efficiently as possible.
            </li>
            <li className="mb-4"><span className='font-bold'>Business users:</span> This charge applies to all returns, regardless of whether the goods are faulty or not. Consumer users, however, may be eligible for a refund or replacement under our returns and refunds policy, which can be found on our website. In all cases, we recommend contacting our Customer Services Department before returning any goods to ensure that you are aware of the correct process and any associated charges. Our team is available Monday to Friday, 9am to 5pm (EST), to assist you with any queries you may have.
            </li>
            <li className="mb-4"><span className='font-bold'>Customers</span>: This is our returns policy for consumer users who have changed their mind about their purchase. It's important to confirm your request in writing as this provides us with a clear and documented record of your return request. This helps to ensure that there are no misunderstandings or disputes further down the line. Please include your order number and details of the goods you wish to return in your written confirmation. We will process your return as soon as we receive your written confirmation and provide you with a refund or replacement, as appropriate. If you have any questions about our returns policy, please don't hesitate to contact our Customer Services Department.
            </li>
            <li className="mb-4">This applies to both business and consumer users who are returning goods due to a fault or defect. To be eligible for a refund, the goods must be returned in their original condition, including all relevant packaging. This helps to ensure that the goods are returned in a saleable condition and minimizes any potential damage during transportation. We recommend using a tracked and insured delivery service to ensure that the goods are returned safely and that we can trace their return. Once we receive the returned goods, we will process your refund as soon as possible or within 15 days. If you have any questions about our returns policy, please don't hesitate to contact our Customer Services Department.
            </li>
            <li className="mb-4">This applies to both business and consumer users who are returning goods without prior authorization or in a condition other than that set out in our returns policy. If we receive goods that do not meet our returns criteria, we reserve the right to reject them and return them to you at your cost. This helps to ensure that we can maintain the quality of our products and minimize any potential damage during transportation. We strongly recommend that you contact our Customer Services Department before returning any goods to ensure that they meet our returns criteria and that you are aware of any associated costs. This will help to avoid any misunderstandings or disputes further down the line.
            </li>
            <li className="mb-4">This clause outlines our legal obligation to provide a refund within 15 days of receiving returned goods, in line with consumer protection laws. However, we reserve the right to charge you the direct costs of recovery if you fail to return the goods after a full refund has been issued. This is to cover any expenses incurred in pursuing the return of the goods. We strongly recommend that you return the goods as soon as possible to avoid any additional charges. It's also important to note that if any provision of these terms and conditions is found to be unlawful, void or unenforceable, it will be excluded without affecting the validity and enforceability of the remaining terms and conditions. Any disputes that cannot be resolved through our normal complaints procedure will be resolved exclusively in accordance with United States law. This helps to ensure that any disputes are resolved fairly and efficiently, in line with local legal requirements.
            </li>
        </ol>
        <p>
        As a customer of SupplyndServices, it's important to note that we follow the MAIL ORDER RULE for returns, as outlined by both the Canadian Trade Commissioner Service and the Federal Trade Commission. If you need to return any merchandise purchased from our website, please contact us at +1-(803)753-8877 or email us at billing@supplyndservices.com. It's also important to be aware that these terms and conditions are subject to change at any time without prior notice to you. We recommend that you regularly review our website for any updates or changes to our policies and procedures, as this will help to ensure that you are aware of any new requirements or restrictions that may apply to your future orders. By continuing to use our website and place orders with us, you acknowledge and agree to be bound by any updated terms and conditions.

        </p>
        </div>
        
        </div>
    </div>
    <Footer/>
    <Copywrite/>
    
    
  </div>
  )
}

export default Refund
