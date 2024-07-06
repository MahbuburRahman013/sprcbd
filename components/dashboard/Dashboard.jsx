"use client"
import React, { useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
// import useAxiosPublic from '@/hooks/useAxiosPublic';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import toast, { Toaster } from 'react-hot-toast';
import { Button, Form, Spinner } from 'react-bootstrap';


const img_hosting_api = `https://api.imgbb.com/1/upload?key=dba83ae483256811942a712f4a815835`



function Dashboard() {
    const [content, setContent] = useState('');
    // const axiosPublic = useAxiosPublic();
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
        const res = await axiosPublic.post(img_hosting_api, imgFile, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        })
        const img_url = res?.data?.data?.display_url;

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        // create date
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = monthNames[currentDate.getMonth()];
        const year = currentDate.getFullYear();
        const postedDate = `${month} ${day}, ${year}`;

        const formData = {
            title,
            img_url,
            queryTitle,
            content,
            postedDate
        };

        if (!content.trim()) {
            setLoading(false)
            return toast.error('Blog description is missing')
        }

        if (img_url) {

            axiosPublic.post('/single-blog', { formData })
                .then(res => {
                    if (res.data.acknowledged) {
                        setLoading(false)
                        toast.success('Blog post successfully!')

                    }
                })
                .catch(err => {
                    setLoading(false)
                })
        } else {
            toast.error('Photo is not support!')
            setLoading(false)
        }

    };

    
    return (
        <div className="min-vh-100">
            <div className="rounded p-4 w-100 shadow-lg border">
                <h1 className="mb-4 font-weight-semibold display-4">Post A Blog</h1>
                <Form onSubmit={submitPost} className="w-100 d-flex flex-column gap-3">

                    <Form.Group className="mb-2 w-100 md:w-80 lg:w-60 xl:w-50">
                        <Form.Label htmlFor="title">Title</Form.Label>
                        <Form.Control required name="title" id="title" type="text" placeholder="Title" />
                    </Form.Group>

                    <Form.Group className="mb-2 w-100 cursor-pointer md:w-80 lg:w-60 xl:w-50">
                        <Form.Label htmlFor="picture">Banner Photo</Form.Label>
                        <Form.Control required name="photo" id="picture" type="file" />
                    </Form.Group>

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
                            listAdvancedTypes: true,
                        }}
                    />

                    {
                        loading ?
                            <Button className="w-auto rounded" disabled>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Please wait
                            </Button> :
                            <Button type="submit" className="w-auto lg:px-4 px-2 rounded">
                                Submit
                            </Button>
                    }

                </Form>
            </div>

            <Toaster />
        </div>
    );
}

export default Dashboard