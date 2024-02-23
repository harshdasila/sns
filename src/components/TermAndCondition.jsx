import React from 'react'
import NavbarInfo from './NavbarInfo'
import Navbar from './Navbar'
import Footer from './Footer'
import Copywrite from './Copywrite'


const TermAndCondition = () => {
  return (
    <div>
      <NavbarInfo/>
      <Navbar/>
      <div className='bg-white p-9'>
      <div className='flex justify-center items-center font-[28px] text-[#515151] '> 
         <h1 className='flex text-3xl font-semibold p-5 mt-7 border-b-4 border-gradient-to-r from-blue-400 via-green-400 to-yellow-400'>Terms & Conditions</h1>
      </div>
      
      <div className='flex justify-center items-center'>
        <div className='text-lg leading-6 w-3/4 p-5 mt-4'>
            
            
            <h2 className='text-3xl font-bold mb-3 mt-3'>ACCOUNTS</h2>
            
            
            <p>As per our terms, when creating an account with us, you are required to provide accurate, complete, and current information. Failing to do so is a breach of our terms and may result in immediate termination of your account on our service. It's your responsibility to safeguard the password you use to access our service and any activities or actions under that password, whether it's with our service or a third-party service. We ask that you do not disclose your password to any third party and notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>

            <br></br>
            <div className='text-2xl font-bold mb-3 mt-3'>INTELLECTUAL PROPERTY</div>
            <p>As stated in our terms, the Service, along with its original content, features, and functionality, are and will remain the exclusive property of SupplyndServices and its licensors. This means that you may not reproduce, distribute, or create derivative works based on the Service or its content without our prior written consent. Additionally, you may not remove any copyright or trademark notices from the Service. Your use of the Service does not grant you any ownership interest in our intellectual property.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>LINKS TO OTHER WEB SITES</div>
            <p>Our Service may include links to third-party websites or services that are not owned or controlled by SupplyndServices. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any such third-party websites or services. As a result, we strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit. SupplyndServices shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with your use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>DISCLAIMER</div>
            <p>Your use of the Service is entirely at your own risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis, without any express or implied warranties, including but not limited to, warranties of merchantability, fitness for a particular purpose, non-infringement, or any course of performance. SupplyndServices does not guarantee that the Service will be uninterrupted, timely, secure, or error-free. You acknowledge and agree that SupplyndServices shall not be liable for any indirect, incidental, consequential or special damages arising out of or in connection with the use of or inability to use the Service. Your sole remedy for any breach of this Agreement by SupplyndServices shall be the discontinuation of your use of the Service.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>GOVERNING LAW</div>
            <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms shall not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms shall remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>CHANGES</div>
            <p>We reserve the right to modify or replace these Terms and Conditions at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. Whether a revision is material will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please discontinue your use of the Service.</p>
            <br></br>

            <div className='text-2xl font-bold mb-3 mt-3'>CONTACT US</div>
            <p>For any questions regarding these Terms and Conditions, please contact us. Our contact information can be found on our website or by reaching out to our customer support team. We are always here to assist you.</p>
            <br></br>

         </div>
      </div>
      
      </div>
      <Footer/>
      <Copywrite/>
      
      
    </div>
  )
}

export default TermAndCondition
