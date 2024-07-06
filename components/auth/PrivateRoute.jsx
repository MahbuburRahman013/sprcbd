"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import Loading from './Loading'

function PrivateRoute({ children }) {
    const [adminInfo, setAdminInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const route = useRouter();

    useEffect(() => {
        const adminInfo = localStorage.getItem('adminInfo');
        const parseInfo = JSON.parse(adminInfo)
        setAdminInfo(parseInfo);
        setLoading(false)

        return ()=> setAdminInfo(adminInfo);
    }, [loading,setLoading])


        if(loading){
            return <Loading/>
        }
    
        if (adminInfo?.email === 'admin@gmail.com' && adminInfo?.password === 'admin') {
            return children;
        }

        if (!loading) {
            return route.push('/auth')
        }
    
}

export default PrivateRoute