import { FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { ImInstagram } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const Footer = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const { logOut } = useContext(AuthContext);
    const signOut = () => {
        logOut().then(() => {

        }).catch(error => { console.error(error) })
        navigate('/')
    }

    return (
        <>
            <footer className="footer sm:w-full p-10 bg-gray-700 text-white">
                <div>
                    <span className="text-xl text-teal-500 uppercase font-bold">Services</span>
                    <Link to="" className=" hover:text-teal-400">Branding</Link>
                    <Link to="" className=" hover:text-teal-400">Design</Link>
                    <Link to="" className=" hover:text-teal-400">Marketing</Link>
                    <Link to="" className=" hover:text-teal-400">Advertisement</Link>
                </div>
                <div>
                    <span className="text-xl text-blue-500 uppercase font-bold">Company</span>
                    <Link to="/" className=" hover:text-blue-500">Home</Link>
                    <Link to="/about" className=" hover:text-blue-500">About us</Link>
                    <Link to="" className=" hover:text-blue-500">Contact</Link>
                    {user ? <span onClick={signOut}
                        className=" hover:text-blue-500">LogOut</span>
                        : <Link to="/login" className=" hover:text-blue-500">LogIn</Link>}
                </div>
                <div>
                    <span className="text-xl text-green-400 uppercase font-bold">Legal</span>
                    <Link to="/terms" className=" hover:text-green-400">Terms of use</Link>
                    <Link to="/policy" className=" hover:text-green-400">Privacy policy</Link>
                    <Link to="/cookie" className=" hover:text-green-400">Cookie policy</Link>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-gray-900 text-base-content border-base-300">

                <div className="md:place-self-center md:justify-self-start">
                    <div className='border-b-amber-500 border-b'><span className='text-lg text-white hover:text-green-600'>Stay Connected</span></div>
                    <div className="grid grid-flow-col gap-4 justify-start items-center">

                        <div>
                            <span className='text-2xl text-blue-500'>
                                <a href='https://www.facebook.com/profile.php?id=100095597736036' target='_blank' rel="noopener noreferrer"><BsFacebook /></a></span>
                        </div>

                        <div>
                            <span className='text-2xl text-teal-500'>
                                <a href='https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit' target='_blank' rel="noopener noreferrer">
                                    <FaLinkedin /></a></span>
                        </div>

                        <div><span className='text-2xl text-red-500'><IoLogoYoutube /></span></div>
                        <div><span className='text-xl text-orange-500'><ImInstagram /></span></div>
                        <div><span className='text-2xl text-green-500'><RiWhatsappFill /></span></div>
                    </div>
                </div>

                <div className="items-center md:justify-self-end grid-flow-col">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-teal-800"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p className='text-accent font-bold'>EcoCraftz Private Company <br />Providing reliable crafts since 2020</p>
                </div>

            </footer>
        </>
    );
};

export default Footer;