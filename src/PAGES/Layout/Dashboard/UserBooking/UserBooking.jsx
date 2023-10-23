import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading";
import { useNavigate } from "react-router-dom";

const UserBooking = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await fetch(`https://eco-server-ecocraftz.vercel.app/bookings`);
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
    return (

        <div className="overflow-x-auto">
            <table className="table table-sm table-pin-rows table-pin-cols">
                {/* head */}
                <thead>
                    <tr className="text-indigo-500">
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
                                        <img src={booking?.image} onClick={() => handleNavigate(booking._id)} alt="Avatar Tailwind CSS Component" className="hover:cursor-pointer" />
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
                            <button onClick={() => handleNavigate(booking._id)} className="btn bg-black btn-xs text-white hover:bg-warning">details</button>
                        </th>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default UserBooking;