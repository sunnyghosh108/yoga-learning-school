import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
        <div className="carousel w-full h-[600px]">
           <div id="slide1" className="carousel-item relative w-full">
               <img src='https://img.freepik.com/free-photo/serene-silhouette-meditating-tranquil-autumn-mountain-generated-by-ai_188544-20171.jpg?t=st=1689706039~exp=1689709639~hmac=08cb11960f686ff7a1466a42c41a6906f08e0ea9690d02ffd977ce7936d95bca&w=826' className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
               <div className="text-white space-y-7 md:w-2/3 pl-12 ">
                    <h2 className="text-4xl  font-bold"> <span className='text-cyan-600'>Yoga learning</span> <br /> Unleash the Fun <br /> with yoga and exercise</h2>
                  
                  
                    <p className='font-medium text-sm text-gray-300'>Welcome to Yoga learning school: Unleash the physical exercise with yoga ! Discover a vibrant collection of yoga that ignite imagination and bring mental and physical satisfaction. . Let the exercise begin as yourselves creates physical exercise and embarks on unforgettable playtime journeys. Join us at yoga camp, where fun knows no bounds</p>
                  
                  
                  
                


                </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                   <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
           </div>
           <div id="slide2" className="carousel-item relative w-full">
               <img src='https://img.freepik.com/premium-photo/group-young-sporty-attractive-people-practicing-yoga-lesson-with-instructor-standing-together-exercise-working-out-full-length-studio-background-close-up_124865-14539.jpg?w=740' className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
               <div className="text-white space-y-7 md:w-2/3 pl-12 ">
                    <h2 className="text-4xl  font-bold"> <span className='text-cyan-600'>Yoga learning</span> <br /> Unleash the Fun <br /> with yoga and exercise</h2>
                  
                  
                    <p className='font-medium text-sm text-gray-300'>Welcome to Yoga learning school: Unleash the physical exercise with yoga ! Discover a vibrant collection of yoga that ignite imagination and bring mental and physical satisfaction. . Let the exercise begin as yourselves creates physical exercise and embarks on unforgettable playtime journeys. Join us at yoga camp, where fun knows no bounds</p>
                  
                  
                  
                


                </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                   <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide3" className="btn btn-circle">❯</a>
               </div>
           </div>
           <div id="slide3" className="carousel-item relative w-full">
               <img src='https://img.freepik.com/free-photo/front-view-man-woman-meditating-outdoors-yoga-mats_23-2148988372.jpg?w=740&t=st=1689707886~exp=1689708486~hmac=55c4d3b6484f2302db1b8e72c5588f1dcbe9c6a2b9229abba77767e65ff238ab' className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
               <div className="text-white space-y-7 md:w-2/3 pl-12 ">
                    <h2 className="text-4xl  font-bold"> <span className='text-cyan-600'>Yoga learning</span> <br /> Unleash the Fun <br /> with yoga and exercise</h2>
                  
                  
                    <p className='font-medium text-sm text-gray-300'>Welcome to Yoga learning school: Unleash the physical exercise with yoga ! Discover a vibrant collection of yoga that ignite imagination and bring mental and physical satisfaction. . Let the exercise begin as yourselves creates physical exercise and embarks on unforgettable playtime journeys. Join us at yoga camp, where fun knows no bounds</p>
                  
                  
                  
                


                </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                   <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide4" className="btn btn-circle">❯</a>
               </div>
           </div>
           <div id="slide4" className="carousel-item relative w-full">
               <img src='https://img.freepik.com/free-photo/women-meditating-lotus-position-tropical-paradise-generated-by-ai_188544-11671.jpg?t=st=1689708057~exp=1689711657~hmac=79672440410253525f43b28f691fcf8f2dd39c2ed305646a570ba6fd7ef4d33d&w=826' className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
               <div className="text-white space-y-7 md:w-2/3 pl-12 ">
                    <h2 className="text-4xl  font-bold"> <span className='text-cyan-600'>Yoga learning</span> <br /> Unleash the Fun <br /> with yoga and exercise</h2>
                  
                  
                    <p className='font-medium text-sm text-gray-300'>Welcome to Yoga learning school: Unleash the physical exercise with yoga ! Discover a vibrant collection of yoga that ignite imagination and bring mental and physical satisfaction. . Let the exercise begin as yourselves creates physical exercise and embarks on unforgettable playtime journeys. Join us at yoga camp, where fun knows no bounds</p>
                  
                  
                  
                


                </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                   <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide1" className="btn btn-circle">❯</a>
               </div>
           </div>
       </div>

       </div>
    );
};

export default Banner;