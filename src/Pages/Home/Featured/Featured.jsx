import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';

import './Featured.css'

const Featured = () => {
    return (
        <section>
        <SectionTitle heading='The main reason to practice'>
      </SectionTitle>
      <div className='  grid grid-cols-1 md:grid-cols-3 gap-3 mb-5'>
    <div>
        <h2 className='text-3xl font-bold'>Good for Health</h2>
        <p className='text-slate-950 font-semibold'>Yoga Fit is where you can find balance, harmony and energy. 
       </p>
       <figure className="mt-4">
    <img src='https://img.freepik.com/premium-photo/male-athlete-black-sportswear-is-sitting-mat-lotus-position-gym_217593-16102.jpg?w=740' alt="" className="rounded-xl" />
   </figure>
    </div>
    <div>
    <h2  className='text-3xl font-bold'>Good for Cardio</h2>
    <p className='text-slate-950 font-semibold'>Yoga Fit iimproves blood circulation and decreases blood pressure of the body. A lower pulse rate helps your heart.</p>
      <figure className="mt-4">
    <img src='https://as2.ftcdn.net/v2/jpg/05/46/80/59/1000_F_546805975_Xem1j1ezdWSraZ2mTTbi3wuc3GpbDBh2.jpg' alt="" className="rounded-xl" />
   </figure>
   </div>
   <div>
   <h2  className='text-3xl font-bold'>Good for Breathing</h2>
   <p className='text-slate-950 font-semibold'>Yoga Fit improves your raspiratory by helping your lungs work more efficiently. Breathing excercises are a therapy.</p>
   <figure className="mt-4">
    <img src='https://img.freepik.com/free-photo/gorgeous-girl-meditating-middle-yoga-temple-breathing-deep-with-closed-eyes-basic-practice_197531-30853.jpg?size=626&ext=jpg&ga=GA1.1.506183432.1673968873&semt=sph' alt="" className="rounded-xl" />
   </figure>
    </div>

  </div>
  </section>
    );
};

export default Featured;