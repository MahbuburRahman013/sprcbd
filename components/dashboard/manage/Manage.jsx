"use client"
import dynamic from "next/dynamic";
import { Table } from 'react-bootstrap';
import Image from 'next/image';

const Edit = dynamic(() => import('./Edit'), {
    ssr: false,
})
const Delete = dynamic(() => import('./Delete'), {
    ssr: false,
})




function Manage({ blogsData }) {



    return (
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th className="text-end">Edit</th>
                        <th className="text-end">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {blogsData?.map((blog, index) => (
                        <tr key={index}>
                            <td className="font-weight-bold">{index + 1}</td>
                            <td>
                                <Image src={blog.img_url} height='50' width='60' />
                            </td>
                            <td>{blog.title}</td>
                            <td className="text-end">
                                <Edit queryTitle={blog.queryTitle} />
                            </td>
                            <td className="text-end">
                                <Delete blog={blog} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Manage;