import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";
import { MdDeleteForever } from 'react-icons/md';
import { getAuth } from "firebase/auth";
import app from "../../../Firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

const UserProfile = () => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const currentUser = user?.email;
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(`https://eco-server-ecocraftz.vercel.app/users`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = (email) => {
        fetch(`https://eco-server-ecocraftz.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                return alert('Failed to make Admin');
            }
            return res.json();
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    alert('Successfully maked Admin');
                }
            })
    };
    const cannotDelete = () => {
        return alert('You can not Delete your Account. This Inconvenient to the server law')
    }

    const handleDelete = (email) => {
        if (email === currentUser) {
            return cannotDelete();
        }
        const procced = confirm(`Are you sure to Delete ${email}!`);
        if (procced) {
            fetch(`https://eco-server-ecocraftz.vercel.app/users/${email}`, {
                method: 'DELETE',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert(`${email} is deleted`);
                        refetch();
                    }
                })
        }
    }

    return (


        <div className="overflow-x-auto">
            <table className="table table-xs table-pin-rows table-pin-cols">
                {/* head */}
                <thead>
                    <tr className="text-zinc-800">
                        <th>SL No</th>
                        <th>User Email</th>
                        <th>User Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => <tr key={user._id}>
                        <th>{index + 1}</th>
                        <td>
                            <span className="badge badge-ghost badge-sm">{user.email}</span>
                        </td>
                        <td>
                            {user?.role === 'Admin' ? <button className="btn btn-success btn-xs">Admin</button> :
                                <button className="btn btn-warning btn-xs">General</button>}
                        </td>
                        <th className="flex flex-row justify-start items-center gap-2">
                            <button onClick={() => makeAdmin(user.email)} disabled={user.role}
                                className="btn btn-ghost btn-xs">Make Admin</button>
                            <button
                                onClick={() => handleDelete(user.email)}
                                className="text-xl text-red-500 btn btn-ghost"><MdDeleteForever></MdDeleteForever></button>
                        </th>
                    </tr>)}


                </tbody>
            </table>
        </div>


    );
};

export default UserProfile;