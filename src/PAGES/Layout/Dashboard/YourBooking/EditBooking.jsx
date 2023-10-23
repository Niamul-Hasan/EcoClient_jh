import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading";
import bg from '../../../../assets/craftz.png'

const EditBooking = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [editData, setEditData] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://eco-server-ecocraftz.vercel.app/details/${id}`).then(res => res.json()).then(data => {
            setEditData(data)
            setLoading(false)
        })
    }, [id])
    // const { data, isLoading } = useQuery({
    //     queryKey: ["editBooking"],
    //     queryFn: async () => {
    //         const res = await fetch(`https://eco-server-ecocraftz.vercel.app/details/${id}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const id = editData._id
        const contact = form.contact.value;
        const quantity = form.quantity.value;
        const country = form.country.value;
        const changedData = { contact, quantity, country }
        console.log(changedData);
        fetch(`https://eco-server-ecocraftz.vercel.app/updateBooking/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(changedData),
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                alert('your data is successfully Updated')
            }
            navigate(`/dashboard/bookingDetails/${id}`)
        });
    }

    const handleUnchanged = () => {
        navigate(`/dashboard/bookingDetails/${id}`)
    }
    const saturation = 25;
    const blurAmount = 5;
    const brightness = 25;
    const opacity = 0.65;

    return (
        <div className="hero min-h-screen bg-base-200 w-full">
            <img src={bg} alt="BG" className="h-full bg-base-200 w-full"
                style={{
                    backgroundImage: `url(${bg})`,
                    WebkitFilter: `brightness(${brightness}%) saturation(${saturation}%) blur(${blurAmount}px)`,
                    filter: `brightness(${brightness}%) saturation(${saturation}%) blur(${blurAmount}px)`,
                    opacity: opacity
                }}
            />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={editData.image} className="max-w-sm min-h-screen rounded-lg shadow-2xl overflow-hidden" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <p className='text-2xl font-thin text-white'>Product ID:{editData._id}</p>
                        <p className='uppercase font-serif text-xl text-white'>{editData.product}</p>
                        <p>Catagory: <span className='font-semi-bold text-xl text-white'>{editData.catagory}</span></p>
                        <p>Customer Email: <span className='font-serif text-sm text-blue-700'>{user?.email}</span></p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-black">Edit Your Country</span>
                                </label>
                                <input type="text" placeholder="country" name="country" defaultValue={editData.country} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-black">Edit Your Contact Number</span>
                                </label>
                                <input type="text" placeholder="contact" name="contact" defaultValue={editData.contact} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-black">Edit Quantity</span>
                                </label>
                                <input type="number" placeholder="quantity" name="quantity" defaultValue={editData.quantity} className="input input-bordered text-lg" />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-sm bg-teal-600 hover:bg-green-600 text-white">Submit Changes</button>
                            </div>
                        </form>
                        <button onClick={handleUnchanged} className="btn btn-sm hover:bg-green-500">Keep me UnChanged</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default EditBooking;