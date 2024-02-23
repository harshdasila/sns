import React from 'react';

function Copywrite() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=' bg-[#007eff] text-white text-sm p-5 leading-7'>
            
            <p className='text-xl'>© {currentYear} Supply & Services. All rights reserved.</p>
            <p>
                Disclaimer: Merchandise purchased from Supply & Services is directly supported by their Original Equipment Manufacturer (OEM). We strictly adhere to CTS's & FTC's Mail, Internet, or Telephone Order Merchandise Rule for Buyer indentity. Supply & Services is an online independent e-commerce web portal for various brands and products. Supply & Services hereby disclaims any association or affiliation with products purchased on our website www.supplyndservices.com. The merchandise that we offer is also available on the respective brand owner's websites. Kindly refer to our Refund Policy or Contact us anytime for any queries.
            </p>
        </footer>
    );
}

export default Copywrite;
