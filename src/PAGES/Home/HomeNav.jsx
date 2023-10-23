// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../Shared/CSS/Navbar.css";
import { AuthContext } from '../Contexts/UserContext';
import { FaRegUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo_prevew.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    const productList = <>
        <li><button onClick={(event) => handleClicked(event.target.value)}
            type='button' value='ladies bag' className='uppercase'>Ladies bag</button></li>
        <li><button onClick={(event) => handleClicked(event.target.value)}
            type='button' value='sataronji' className='uppercase'>sataronji</button></li>
        <li><button onClick={(event) => handleClicked(event.target.value)}
            type='button' value='chandor' className='uppercase'>chandor</button></li>
        <li><button onClick={(event) => handleClicked(event.target.value)}
            type='button' value='papose' className='uppercase'>papose</button></li>
        <li><button onClick={(event) => handleClicked(event.target.value)}
            type='button' value='pot' className='uppercase'>pot</button></li>
    </>

    const handleClicked = (catagory) => {
        navigate(`/other/${catagory}`)

    }

    const signOut = () => {
        logOut().then(() => {

        }).catch(error => { console.error(error) })
    }

    const navItem = <>

        <li id='parent'>
            <a>Catagory</a>
            <ul id='onhover' className="p-2">
                {productList}
            </ul>

        </li>
        <li><NavLink to='/products'>Products</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        {/* <li><NavLink to='/register'>Register</NavLink></li> */}
        <li>{user?.email && <span><FaRegUserCircle></FaRegUserCircle>Welcome {user?.email}</span>}</li>
        <li>{user?.email ? <button onClick={signOut} className='btn btn-sm'>Sign Out</button>
            : <NavLink to='/login'>Login</NavLink>}</li>


    </>

    return (
        <div >
            <div className="navbar bg-base-300 lg:mt-10 w-full z-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul id='mobilemenu' tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <NavLink to='/' style={{ width: '200px', height: '100px', padding: '10px' }}>
                        <img src={logo} alt="" className='h-full w-full' />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}

                    </ul>
                </div>

                <div className="navbar-end">

                    <label htmlFor="dashBoard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;