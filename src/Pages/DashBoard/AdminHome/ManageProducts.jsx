
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
const ManageProducts = () => {
    const [axiosSecure]=useAxiosSecure();
  
    const {data:users =[],refetch} = useQuery(['classes'],async()=>{
        const res =await axiosSecure.get('/classes')
        return res.data;
    })
     // Approve role
    const handleMakeApprove = (user) => {
        fetch(`https://b7a12-summer-camp-server-side-sunnyghosh108.vercel.app/users/classes/${user._id}`, {
          method: 'PATCH',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Approve now!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.error('Failed to make user approve:', error);
            // Handle the error appropriately (e.g., show an error message to the user)
          });
      };
      
   
      //Denied role
    //   const handleMakeDenied= (user) => {
    //     fetch(`https://b7a12-summer-camp-server-side-sunnyghosh108.vercel.app/users/classes/${user._id}`, {
    //       method: 'PATCH',
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         if (data.modifiedCount) {
    //           refetch();
    //           Swal.fire({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: `${user.name} is an Denied!`,
    //             showConfirmButton: false,
    //             timer: 1500,
    //           });
    //         }
    //       })
    //       .catch((error) => {
    //         console.error('Failed to make denied:', error);
    //         // Handle the error appropriately (e.g., show an error message to the user)
    //       });
    //   };
      //feedback role
    //   const handleMakeFeedback= (user) => {
    //     fetch(`https://b7a12-summer-camp-server-side-sunnyghosh108.vercel.app/users/classes/${user._id}`, {
    //       method: 'PATCH',
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         if (data.modifiedCount) {
    //           refetch();
    //           Swal.fire({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: `${user.name} is an Feedback!`,
    //             showConfirmButton: false,
    //             timer: 1500,
    //           });
    //         }
    //       })
    //       .catch((error) => {
    //         console.error('Failed to make denied:', error);
    //         // Handle the error appropriately (e.g., show an error message to the user)
    //       });
    //   };
    const handleMakeDenied = (user) => {
        fetch(`https://b7a12-summer-camp-server-side-sunnyghosh108.vercel.app/users/classes/denied/${user._id}`, { // Updated URL
          method: 'PATCH',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is denied!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.error('Failed to make denied:', error);
            // Handle the error appropriately (e.g., show an error message to the user)
          });
      };
      
      const handleMakeFeedback = (user) => {
        fetch(`https://b7a12-summer-camp-server-side-sunnyghosh108.vercel.app/users/classes/feedback/${user._id}`, { // Updated URL
          method: 'PATCH',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is feedback!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.error('Failed to make feedback:', error);
            // Handle the error appropriately (e.g., show an error message to the user)
          });
      };
      
      

    return (
        <div className='w-full'>
        <Helmet>
       <title>Yoga school | Manage users</title>
       </Helmet>
      <h3 className='text-3xl font-semibold my-4'> Total Users:{users.length}</h3>
      <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
  {/* head */}
  <thead>
  <tr>
   <th>#</th>
   <th>Name</th>
   <th>Email</th>
   <th>Role</th>
   <th>Action</th>
   <th>Feedback</th>
    </tr>
   </thead>
 <tbody>
 {
   users.map((user,index) => <tr
   key={user._id}
   >
       <th>{index+1}</th>
       <td>{user.name}</td>
       <td>{user.email}</td>
       <td>{
           user.role === 'approve'? 'approve':
           <button onClick={() =>handleMakeApprove(user)} className="btn btn-primary bg-green-500  text-white">Approve</button>
           }</td>
       <td>
     {
     user.role === 'denied'?'denied':
       <button onClick={() => handleMakeDenied(user)} className="btn btn-primary bg-orange-600   text-white">Denied</button>

     }

    </td>
    <td>
    {
     user.role === 'feedback'?'feedback':
       <button onClick={() =>handleMakeFeedback (user)} className="btn btn-primary bg-blue-600   text-white">feedback</button>

     }
    </td>
     </tr>  )
 }
 
 </tbody>
  </table>
  </div>
   </div>
    );
};


export default ManageProducts;