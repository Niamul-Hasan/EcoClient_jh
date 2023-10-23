import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adLoading, setAdloading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        fetch(`https://eco-server-ecocraftz.vercel.app/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
                setAdloading(false);
            })
    }, [user]);
    return [admin, adLoading];
}
export default useAdmin;