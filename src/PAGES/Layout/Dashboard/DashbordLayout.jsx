// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../../Shared/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import "./CSS/SideBar.css";
import { getAuth } from 'firebase/auth';
import app from '../../../Firebase/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../NewPages/Hooks/UseAdmin';
const DashbordLayout = () => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const email = user?.email;
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer lg:drawer-open mt-4">
                <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-full lg:h-full sm:w-1/2 sm:h-1/2 bg-base-200 text-base-content" id='sidebar-menu'>
                        {/* Sidebar content here */}
                        {/* eslint-disable-next-line react/prop-types */}

                        {!admin && <li><NavLink to={`/dashboard/yourBooking/${email}`}>Your Booking</NavLink></li>}
                        {admin && <div>
                            <li><NavLink to='/dashboard/userBooking'>User Booking</NavLink></li>
                            <li><NavLink to='/dashboard/add'>Add Product</NavLink></li>
                            <li><NavLink to='/dashboard/userProfile'> All Users</NavLink></li>
                        </div>}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashbordLayout;