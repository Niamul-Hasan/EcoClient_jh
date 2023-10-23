// eslint-disable-next-line no-unused-vars
import { getAuth } from 'firebase/auth';
import app from '../../../Firebase/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../NewPages/Hooks/UseAdmin';
import { Navigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Dashbord = () => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const [admin, adLoading] = useAdmin(user);
    if (adLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {
                admin ? <Navigate to={`/dashboard/userBooking`} /> :
                    <Navigate to={`/dashboard/yourBooking/${user?.email}`} />
            }
        </div>

    );


};

export default Dashbord;

