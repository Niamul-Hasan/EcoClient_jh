import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading';
const YourBooking = () => {
    const navigate = useNavigate();
    const { email } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["yourBookingData"],
        queryFn: async () => {
            const res = await fetch(`https://eco-server-ecocraftz.vercel.app/bookings/${email}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleNavigate = (id) => {
        navigate(`/dashboard/bookingDetails/${id}`);
    }
    // console.log("your data", data)
    return (

        <div className="overflow-x-auto">
            <table className="table table-sm table-pin-rows table-pin-cols">
                {/* head */}
                <thead>
                    <tr className='text-green-700'>
                        <th>SL No</th>
                        <th>Product Name</th>
                        <th>Booking From</th>
                        <th>Catagory</th>
                        <th>Booking Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((booking, index) => <tr key={booking._id}>
                        <th>{index + 1}</th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={booking?.image} onClick={() => handleNavigate(booking._id)} alt="Avatar Tailwind CSS Component" className='hover:cursor-pointer' />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{booking.product}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {booking.country}
                            <br />
                            <span className="badge badge-ghost badge-sm">{booking.email}</span>
                        </td>
                        <td>{booking.catagory}</td>
                        <th>
                            <button onClick={() => handleNavigate(booking._id)} className="btn btn-xs bg-slate-900 text-white hover:bg-warning">details</button>
                        </th>
                    </tr>)}


                </tbody>
            </table>
        </div>
    );
};

export default YourBooking;