import React from 'react'
import NavbarInfo from './NavbarInfo'
import Navbar from './Navbar'
import Footer from './Footer'
import Copywrite from './Copywrite'

const PrivacyAndPolicy = () => {
  return (
    <div>
      <NavbarInfo/>
      <Navbar/>
      <div className='bg-white p-9'>
      <div className='flex justify-center items-center font-[28px] text-[#515151] '> 
         <h1 className='flex text-3xl font-semibold p-5 mt-7 border-b-4 border-gradient-to-r from-blue-400 via-green-400 to-yellow-400'>Privacy & Policy</h1>
         
      </div>
      <div className='flex justify-center items-center'>
        <div className='text-lg leading-6 w-3/4 p-5 mt-4'>
            <p>SupplyndServices operates the website www.supplyndservices.com and has a Privacy Policy in     place to inform users about how their Personal Information is collected, used, and disclosed when using the website. Personal Information is only used for providing and improving the Service, and will not be shared with anyone unless stated otherwise in the Privacy Policy. By using the Service, users agree to the collection and use of their information according to this policy. Terms not defined in the Privacy Policy have the same meanings as in the Terms and Conditions accessible on the website.
            </p>
            <br></br>
            
            <h2 className='text-3xl font-bold mb-3 mt-3'>INFORMATION COLLECTION AND USE</h2>
            
            
            <p>When using our Service, we may request certain personally identifiable information from you, such as your name, email address, telephone number, and address. This information is collected in order to be able to contact and identify you.</p>

            <br></br>
            <div className='text-2xl font-bold mb-3 mt-3'>LOG DATA</div>
            <p>In addition to the personally identifiable information mentioned earlier, we also collect Log Data when you visit our Service. This includes information sent by your browser such as your IP address, browser type, pages visited, time and date of visit, and other statistics. This information is collected for statistical purposes and to improve our Service.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>COOKIES</div>
            <p>We use cookies, which are small files containing data, including anonymous unique identifiers. These cookies are sent to your browser and stored on your computer's hard drive. They are used to collect information and enhance your experience on our Service. You have the option to refuse cookies or be notified when a cookie is sent. However, please note that if you choose to disable cookies, certain parts of our Service may not function properly.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>SERVICE PROVIDERS</div>
            <p>In order to facilitate and improve our Service, we may collaborate with third party companies and individuals who assist in providing the Service, performing related services, or analyzing usage data. These third parties are granted access to your Personal Information solely for the purpose of carrying out these tasks on our behalf and are strictly prohibited from disclosing or utilizing it for any other purpose.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>SECURITY</div>
            <p>We understand the significance of safeguarding your Personal Information; however, it is essential to note that no method of transmission or electronic storage is completely secure. While we make every effort to use commercially acceptable measures to protect your Personal Information, we cannot ensure or guarantee its absolute security.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>LINKS TO OTHER SITES</div>
            <p>Please be aware that our Service may include links to third-party websites that are not operated or controlled by us. If you choose to click on these links, you will be directed to the respective site. We strongly recommend reviewing the Privacy Policy of each site you visit, as we have no control over their content, privacy policies, or practices, and assume no responsibility for them.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>CHILDREN’S PRIVACY</div>
            <p>Our Service is not intended for individuals under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you believe that your child has provided us with Personal Information, please contact us immediately. If we become aware that we have collected Personal Information from a child under 18, we will promptly delete that information from our servers.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>CHANGES TO THIS PRIVACY POLICY</div>
            <p> We reserve the right to update our Privacy Policy at any time. Any changes will be communicated by posting the revised policy on this page. We recommend checking this page regularly to stay informed about any updates. The changes to the Privacy Policy will be effective as soon as they are posted.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>CONTACT US</div>
            <p> If you have any inquiries or concerns regarding our Privacy Policy, you can reach out to us at info@supplyandservices.com. Our team will be happy to assist you and provide any clarification you may need.</p>
            <br></br>


         </div>
      </div>
      
      </div>
      <Footer/>
      <Copywrite/>
      
      
    </div>
  )
}

export default PrivacyAndPolicy