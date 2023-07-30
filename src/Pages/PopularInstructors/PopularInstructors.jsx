import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import Instructors from "../Instructors/Instructors";



const PopularInstructors = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('https://b7a12-summer-camp-server-side-sunnyghosh108.vercel.app/instructor')
        .then(res =>res.json())
        .then(data=> setMenu(data))
    },[])
    return (
        <section>
        <SectionTitle
        heading="From Our Instructor"
        subHeading="Popular Instructor"
        ></SectionTitle>
       <div className=" grid grid-cols-1 md:grid-cols-3">
        {
            menu.map(item=><Instructors
            key={item._id}  item={item}></Instructors>)
        }
       </div>
       </section>
    );
};


export default PopularInstructors;