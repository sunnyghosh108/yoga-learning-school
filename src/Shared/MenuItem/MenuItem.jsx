import React from 'react';

const MenuItem = ({item}) => {
    const {image,recipe,price,name}= item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={image} alt="Shoes" /></figure>
          <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
          <div className="card-body flex flex-col items-center">
           <h2 className="card-title">{name}</h2>
           <p>{recipe}</p>
         
        </div> 
        </div>
    );
};

export default MenuItem;