import React from 'react'
import Cta2 from "/components/Cta2";

function SingleBlog({ blog }) {


    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mt-4">
                        <h1 className="text-center mb-4 text-primary">{blog?.title}</h1>

                        <div className="d-flex w-100 flex-row align-items-center justify-content-center">
                            <img  className="img-fluid" src={blog?.img_url} alt="Responsive Image" />
                        </div>

                        <p className="text-lg mt-5" dangerouslySetInnerHTML={{ __html: blog?.content }}></p>
                    </div>
                </div>
            </div>
            <Cta2 />
        </>
    )
}

export default SingleBlog