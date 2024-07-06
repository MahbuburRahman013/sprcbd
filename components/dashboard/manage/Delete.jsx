"use client"
import useAxiosPublic from "./../../../hooks/useAxiosPublic"
import { useRouter } from "next/navigation"
import Swal from 'sweetalert2'
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

function Delete({ blog }) {
    const axiosPublic = useAxiosPublic()
    const router = useRouter()

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`delete-blog/${id}`)
                    .then(res => {
                        if (res.data.acknowledged) {
                            router.push('/dashboard/manage')
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            router.push('/dashboard/manage')
                        }
                    })


            }
        });



    }

    return (
        <div>
            <Button
                onClick={() => handleDelete(blog._id)}
                variant="outline-danger"
                className="bg-danger text-light"
                size="sm"
            >
                <Trash className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default Delete