import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart ,FaWallet,FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUser, FaUsers} from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
//import useCart from '../hooks/useCart';
//import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [cart]= useCart();
    // TODO:load data from the server to have dynamic isAdmin based on Data 

  // const isAdmin = true;
 const [isAdmin] = useAdmin();

    return (
        
     <div className="drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
             <Outlet></Outlet>
       <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
      </div> 
      <div className="drawer-side">
       <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 h-full bg-slate-800 text-white">

     {
        isAdmin ?<>
              <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Admin Home  </NavLink></li>
              <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add an Items </NavLink></li>
             <li><NavLink to="/dashboard/manageitems"><FaWallet></  FaWallet>Manage Items</NavLink></li>
             <li><NavLink to="/dashboard/manageproducts"><FaWallet></  FaWallet>Manage Products</NavLink></li>
             <li><NavLink to="/"><FaBook></  FaBook>Manage Bookings(not implemented)</NavLink></li>
             <li><NavLink to="/dashboard/allusers"><FaUsers></  FaUsers>All Users</NavLink></li>
            
        </>:<>

      <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home  </NavLink></li>
      <li><NavLink to="/"><FaCalendarAlt></  FaCalendarAlt> Reservations </NavLink></li>
      <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
       <li >
        <NavLink to="/dashboard/mycart">
        <FaShoppingCart></FaShoppingCart> My Cart
        <span className="badge inline badge-secondary">+{cart?.length || 0}</span>
        </NavLink>
        </li>

        </>
     }

       
     

         <div className="divider"></div>
         <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
        </ul>
  
       </div>
     </div>
       
    );
};


export default Dashboard;