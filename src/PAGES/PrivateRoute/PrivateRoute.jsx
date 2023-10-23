// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
// import { AuthContext } from '../Contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../Firebase/firebase.config';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    // const { user, loading } = useContext(AuthContext);
    const auth = getAuth(app);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.uid) {
        // console.log(user);
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;