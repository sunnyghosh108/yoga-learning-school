import React from 'react';
import { useContext } from 'react';
//import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    const [cart]=useCart();
  const handleLogout = () => {
      logOut()
  }
  const navigationLink = <>
      <li><NavLink className={({isActive})=>isActive? 'text-gradient' : 'text-green-500'} to='/'>Home</NavLink></li>

      <li><NavLink className={({isActive})=>isActive? 'text-gradient' : 'text-green-500'} to='/instructors'>Instructor</NavLink></li>
      <li><NavLink className={({isActive})=>isActive? 'text-gradient' : 'text-green-500'} to='/order/salad'>Classes</NavLink></li>
      {/* <li><NavLink className={({isActive})=>isActive? 'text-gradient' : 'text-green-500'} to='/dashboard'>Dashboard</NavLink></li> */}
      {
      isAdmin? <li><Link to='/dashboard/adminhome'>DashBoard</Link></li>:
      <li><Link to='/dashboard/userhome'>DashBoard</Link></li>
    }
     <li>
      <Link to="/dashboard/mycart">
      <button className="btn gap-2">
        <FaShoppingCart></FaShoppingCart>
  <div className="badge badge-secondary">+{cart?.length || 0}</div>
</button>
      </Link>
    </li>
      



  </>




  return (
      <div className="navbar bg-gradient-to-r md:px-5 from-slate-500 to-cyan-600 ">
          <div className="navbar-start ">
              <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden   ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="space-y-5  bg-gradient-to-r  from-cyan-300 to-cyan-600 menu-compact dropdown-content mt-3 p-6 shadow bg-base-100 rounded-box w-52">

                      {navigationLink}
                  </ul>
              </div>

              <div>
                  
                
                  <h1 className="font-bold flex items-center w-full"><span className="text-2xl text-gradient flex items-center">  <img className="w-6 mr-2" src={`https://ibb.co/BCk2yZJ`} alt="" />  Yoga</span>  <sub className="font-mono md:w-0 w-1 text-sm ml-1"><small>learning </small></sub></h1>
              </div>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="gap-10 font-semibold  menu-horizontal px-1">
                  {navigationLink}
              </ul>
          </div>
          <div className="navbar-end gap-3">
              {user ? <button className="btn-success  btn px-1" onClick={handleLogout}>Logout</button> :
                  <Link to='/login' className="btn-success  btn px-1"> Login </Link>
              }


              {
                  user?.photoURL && <div className="avatar">
                      <div className="w-12 rounded-full">
                          <img title={user?.displayName} src={user?.photoURL} alt="" />
                      </div>
                  </div>
              }

          </div>

      </div>

  );
};

export default NavigationBar;