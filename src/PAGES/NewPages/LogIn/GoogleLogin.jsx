import { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../Hooks/UseToken';
import { getAuth } from 'firebase/auth';
import app from '../../../Firebase/firebase.config';
import Loading from '../../Shared/Loading';
import { FcGoogle } from 'react-icons/fc';
const GoogleLogin = () => {

    const auth = getAuth(app);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const [token] = useToken(user);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }
    }, [navigate, token, from])

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-sm btn-warning w-full max-w-xs hover:text-white hover:bg-teal-500 hover:border-0"
            >
                <span className='text-2xl'><FcGoogle></FcGoogle></span>
                Login With Google</button>
        </div>
    );
};

export default GoogleLogin;