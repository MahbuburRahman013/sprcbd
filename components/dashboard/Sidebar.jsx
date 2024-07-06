"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react";
import Swal from "sweetalert2";

function Sidebar() {
    const route = usePathname()
    const [isTrue, setIsTrue] = useState(true);
    const router = useRouter()

    const routes = [
        {
            name: 'Post Blog',
            link: '/dashboard'
        },
        {
            name: 'Manage Blog',
            link: '/dashboard/manage'
        },
    ]


    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout"
        }).then((result) => {
            if (result.isConfirmed) {

                router.push('/')
                localStorage.removeItem('adminInfo');
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
            <div className="w-25">
                <div className={`bg-info bg-opacity-25 transition duration-300 min-vh-100 ${isTrue ? 'w-100' : 'w-0 d-none'}`}>
                    <div className="p-3 shadow-sm d-flex gap-3 justify-content-between align-items-center">
                        <Link href={'/'}>
                            <img style={{height:'100%', width: '100%'}} src='https://www.physio-therapies.co.uk/wp-content/uploads/2023/11/PHYSIO_THERAPIES_LOGO_-1024x131.png'  alt='image' />
                        </Link>
                        <button onClick={() => setIsTrue(!isTrue)} className="hover-transform transition duration-200 p-1 bg-info rounded-circle">x</button>
                    </div>
                    <div className="mt-4 d-flex flex-column gap-1">
                        {routes.map((item, index) => (
                            <Link className={`px-3 text-white py-2 ${route === item.link ? 'bg-primary' : 'bg-info'}`} key={index} href={item.link}>
                                <p>{item.name}</p>
                            </Link>
                        ))}
                        <button onClick={handleLogOut} className="px-3 text-white py-2 bg-info hover:bg-primary text-start transition duration-300">Log Out</button>
                    </div>
                </div>
                <div className={`${isTrue ? 'd-none' : 'd-flex'} min-vh-100 justify-content-center align-items-center`}>
                    <button onClick={() => setIsTrue(!isTrue)} className="py-3 bg-info text-xl rounded-end">+</button>
                </div>
            </div>
    )
}

export default Sidebar