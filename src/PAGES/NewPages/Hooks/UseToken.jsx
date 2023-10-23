import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const curentUser = { email: email, name: name };
        if (email) {
            // console.log(curentUser);
            fetch(`https://eco-server-ecocraftz.vercel.app/user/${email}`, {
                method: "PUT",
                headers: {
                    'context-type': "application/json"
                },
                body: JSON.stringify(curentUser)
            }).then(res => res.json()).then(data => {
                // console.log("inside useToken", data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    }, [user])
    return [token];
}
export default useToken;