import React from 'react'
import './client.css'

function page() {

    const data = [1,2,3,4,5]

    return (
        <div className='bg-warning-subtle'>
            <div className='container py-5'>
                <h1 className='text-xxl-center fw-bold text-uppercase'>Happy Clients</h1>
                <h5 className='text-lg-center'>We are explain who is using our business solutions</h5>

                <div className='mt-5 d-grid w-100 gap-3 custom-grid'>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='bg-white  px-4 d-flex gap-4 rounded-2 py-3'>
                                    <img className='w-25 h-75' src="https://i.ibb.co/Xyc8GJ1/Whats-App-Image-2024-07-08-at-18-25-06-787e55c2.jpg" alt="" />
                                    <div>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, at consequuntur, dolore animi, non et labore fugiat illo iusto quis quae voluptatem pariatur eligendi fuga repellat vitae. Laboriosam, debitis non.</p>
                                        <h5><span className='text-danger'>Darwin Michle.</span>Project Manager</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default page