"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react";
import { Button } from "react-bootstrap";
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
            <div className="w-100 my-3 ">
                <div className={`d-flex align-items-center transition duration-300  w-100`}>
                    <div className="p-3 flex-wrap w-25 shadow-sm d-sm-flex d-none sm:d-block gap-3 justify-content-between align-items-center">
                        <Link href={'/'}>
                        <h2 className="d-flex align-items-center gap-2 w-25"> <img className="w-100 h-100" src="../sprc-images/home/logo.png" alt="" /> SPRC <span className="text-dark">BD</span></h2>
                        </Link>
                        
                        {/* <button onClick={() => setIsTrue(!isTrue)} className="hover-transform transition duration-200 p-1 bg-info rounded-circle">x</button> */}
                    </div>
                    <div className="mx-4 w-100 d-flex flex-wrap align-items-center gap-3">
                        {routes.map((item, index) => (
                            <Link  key={index} href={item.link}>
                                <Button className={`${route === item.link ? 'bg-primary' : 'bg-info'}`}>{item.name}</Button>
                            </Link>
                        ))}
                        <Button onClick={handleLogOut} className="object-fit-contain">Log Out</Button>
                        <Link href='/'><Button className="d-sm-none d-block">Home</Button></Link>
                    </div>
                </div>
                {/* <div className={`${isTrue ? 'd-none' : 'd-flex'} min-vh-100 justify-content-center align-items-center`}>
                    <button onClick={() => setIsTrue(!isTrue)} className="py-3 bg-info text-xl rounded-end">+</button>
                </div> */}
            </div>
    )
}

export default Sidebar