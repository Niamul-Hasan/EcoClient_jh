import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const UpdateProfile = () => {
    const { email } = useParams();
    const [agree, setAgree] = useState(false);

    console.log(agree);
    const { data, isLoading } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const res = await fetch(`https://eco-server-ecocraftz.vercel.app/profile/${email}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    // const { address, name, degree, uni, link, phone } = data;
    console.log(data);


    const handleUpdate = (e) => {
        e.preventDefault();
        const profile = {
            address: e.target.adress.value,
            name: data?.name,
            email: email,
            degree: e.target.degree.value,
            uni: e.target.uni.value,
            link: e.target.link.value,
            phone: e.target.phone.value

        }
        console.log(profile);
        // fetch(`https://manufacturer-website-server-vercel01.vercel.app/profile/${email}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json',
        //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //     },
        //     body: JSON.stringify(profile),
        // }).then(res => res.json()).then(data => console.log(data));
    }


    return (

        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className='text-xl mt-3 uppercase text-teal-500 font-bold'> welcome to update profile</h2>
                    <div>
                        <form onSubmit={handleUpdate}>
                            <input type="text" name='name' defaultValue={data?.name} className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='email' value={email} className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='adress' defaultValue={data?.address} className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='degree' defaultValue={data?.company} className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='uni' defaultValue={data?.designation} className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='link' defaultValue={data?.link} className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="number" name='phone' defaultValue={data?.phone} className="input input-bordered w-full max-w-xs mb-2" />
                            <div className='my-2 flex flex-row gap-2'>
                                <input onClick={() => setAgree(!agree)} type="checkbox" className='checkbox bg-gray-200' />
                                <p style={agree ? { color: `green` } : { color: `red` }} > I want to Update my profile</p>
                            </div>

                            <input disabled={!agree} type="submit" value="Update Now" className="btn btn-success w-full max-w-xs mb-2" />
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default UpdateProfile;