import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
//import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
// TODO
const SocialLogin = () => {
    const { googleSignIn}= useContext(AuthContext);

     const navigate = useNavigate();
     const location = useLocation();

   const from = location.state?.from?.pathname || "/";
    
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            const loggedIndUser =result.user;
            console.log(loggedIndUser);
            const saveUser ={name:loggedIndUser.displayName,email: loggedIndUser.email}
            
            fetch('https://b7a12-summer-camp-server-side-sunnyghosh108.vercel.app/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
              })
              .then(res=>res.json())
              .then(() =>{
                // if(data.insertedId){
                   // console.log('from',from)
                navigate(from, { replace: true });
                //}
              })

            
        })
    }

    return (
        <div>
             <div className="divider"></div>
             <div className='w-full text-center my-4'>
             <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
               <FaGoogle></FaGoogle>
              </button>
             </div>

        </div>
    );
};


export default SocialLogin;