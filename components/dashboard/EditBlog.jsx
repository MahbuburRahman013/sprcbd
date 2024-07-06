"use client"
import React, { useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import useAxiosPublic from './../../hooks/useAxiosPublic';
import { Button, Form } from 'react-bootstrap';
import { Loader2 } from 'lucide-react';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import toast, { Toaster } from 'react-hot-toast';


const img_hosting_api = `https://api.imgbb.com/1/upload?key=dba83ae483256811942a712f4a815835`

function EditBlog({ blog }) {

    const [content, setContent] = useState(blog.content);
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false)




    const handleModelChange = (model) => {
        setContent(model);
    };



    const submitPost = async (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const queryTitle = title.toLowerCase().split(' ').join('-');
        const photo = form.photo.files[0];
        const imgFile = { image: photo }


        if (imgFile.image) {

            const res = await axiosPublic.post(img_hosting_api, imgFile, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            })
            const img_url = res?.data?.data?.display_url;
            const formData = {
                title,
                img_url,
                queryTitle,
                id: blog._id,
                content
            };

            if (!content.trim()) {
                setLoading(false)
                return toast.error('Blog description is missing')
            }

            if (img_url) {


                axiosPublic.patch('/edit-blog', { formData })
                    .then(res => {
                        if (res.data.acknowledged) {
                            setLoading(false)
                            toast.success('Blog edit successfully!')

                        }
                    })
                    .catch(err => {
                        setLoading(false)
                    })
            }

        }

        if (!imgFile.image) {

            const formData = {
                title,
                queryTitle,
                id: blog._id,
                content
            };

            if (!content.trim()) {
                setLoading(false)
                return toast.error('Blog description is missing')
            }

            axiosPublic.patch('/edit-blog', { formData })
                .then(res => {
                    if (res.data.acknowledged) {
                        setLoading(false)
                        toast.success('Blog edit successfully!')

                    }
                })
                .catch(err => {
                    setLoading(false)
                })

        }



    };



    return (
        <div className="">
        <div className='rounded p-4 w-100 shadow-lg border'>
            <h1 className='mb-6 fw-semibold display-4'>Edit The Blog</h1>
            <form onSubmit={submitPost} className='w-100 d-flex flex-column gap-3'>
                <div className="mb-2 w-100 md:w-80 lg:w-60 xl:w-50 rounded">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input defaultValue={blog.title} required name='title' id='title' type="text" placeholder="Title" className="form-control"/>
                </div>

                <div className="mb-2 w-100 md:w-80 lg:w-60 xl:w-50 rounded">
                    <label htmlFor="picture" className="form-label">Banner Photo</label>
                    <input name='photo' id="picture" type="file" className="form-control"/>
                </div>

                <FroalaEditor
                    tag='textarea'
                    model={content}
                    onModelChange={handleModelChange}
                    config={{
                        placeholderText: 'Edit Your Blog Details Here!',
                        charCounterCount: false,
                        toolbarButtons: [
                            'bold', 'italic', 'underline',
                            'fontSize', 'color',
                            'outdent', 'indent', 'undo', 'redo', 'clearFormatting', 'selectAll', 'align', 'formatOL', 'formatUL'
                        ],
                        fontSizeSelection: true,
                        fontSize: ['8', '10', '12', '14', '16', '18', '24', '30', '36', '42', '48'],
                        listAdvancedTypes: true
                    }}
                />

                {
                    loading ?
                        <button className='btn btn-primary rounded' disabled>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Please wait
                        </button> :
                        <button
                            type='submit'
                            className='btn btn-primary rounded px-5 lg:px-12'
                        >
                            Submit
                        </button>
                }

            </form>
        </div>
    </div>
    )
}

export default EditBlog