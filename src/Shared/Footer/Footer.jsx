import React from 'react';

const Footer = () => {
    return (
      <footer>
            
      <div className="footer p-10 bg-neutral text-neutral-content">
       <div>
       

       </div> 
       <div className='mt-4  '>
<img className='ml-40' src={`https://nirvana.axiomthemes.com/wp-content/uploads/2017/02/footer_logo.png`}/>
<div className="grid grid-col-1 lg:grid-cols-4 md:grid-cols-1 gap-4 ml-48 lg:ml-20 mt-8">
 <div>
 <p>Home</p>
 </div>
 <div>
 <p>About us</p>
 </div>
 <div>
 <p>Classes</p>
 </div>
 <div>
 <p>Schedule</p>
 </div>
</div>
       </div>
      </div> 
      <div className=" footer-center p-4 bg-neutral text-base-content text-center md:ml-12">
           <div>
           <p className='text-white'>Copyright © 2023 - All right reserved by Yoga learning school</p>
            </div>
         </div>
   </footer>
    );
};

export default Footer;