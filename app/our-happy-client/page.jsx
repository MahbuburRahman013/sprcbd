import React from 'react'
import './client.css'

function HappyClient() {

    const data = [
        {
            img: 'https://i.ibb.co/8bjZP3j/IMG-1999-1.jpg',
        },
        {
            img: 'https://i.ibb.co/7QrgVf2/IMG-2001-1.jpg',
        },
        {
            img: 'https://i.ibb.co/RHVj5CF/IMG-2154-1.jpg',
        },
        {
            img: 'https://i.ibb.co/YPnMGZ3/IMG-5540-1.jpg',
        },
        {
            img: 'https://i.ibb.co/PYmWt4B/IMG-7015-1.jpg',
        },
        {
            img: 'https://i.ibb.co/m64WJxD/IMG-7021-1.jpg',
        },
        {
            img: 'https://i.ibb.co/NygWj4s/IMG-8848-1.jpg',
        },
        {
            img: 'https://i.ibb.co/XS9y8M8/IMG-9389-1.jpg',
        },
        
    ]

    return (
        <div className='bg-warning-subtle'>
            <div className='container py-5'>
                <h1 className='text-xxl-center fw-bold text-uppercase'>Happy Clients</h1>
                <h5 className='text-lg-center'>We are explain who is using our business solutions</h5>

                <div className='mt-5 d-grid w-100 gap-3 custom-grid'>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='bg-white mx-1 p-3 row rounded'>
                                    <img className='col-xl-3 col-sm-8 col-12 mb-3' src={item?.img} alt="" />
                                    <div className='col-xl-9'>
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

export default HappyClient