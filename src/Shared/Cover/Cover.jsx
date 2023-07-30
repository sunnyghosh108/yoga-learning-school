import React from 'react';
import { Parallax } from 'react-parallax';
const Cover = ({img,title}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
         <div className="hero h-[700px]" style={ { backgroundImage: `url("${img}")`}}>
         <div className=" "></div>
         <div className="">
         <div className="max-w-md">
         <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        
         </div>
        </div>
        </div>

    </Parallax>
    );
};

export default Cover;