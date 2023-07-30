import React from 'react';

const Instructors = ({item}) => {
    const {image,name,totalStudents} =item;
    return (
        <div className='md: grid grid-cols-2 gap-4 m-5 '> 
             <div className="card w-96 bg-base-100 shadow-xl ">
           <figure className="px-10 pt-10">
          <img src={image} alt="" className="rounded-xl" />
         </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
         
         <p>Total students:{totalStudents}</p>
         
       </div>
       </div>
        </div>
    );
};

export default Instructors;