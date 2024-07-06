"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

function Auth() {
    const route = useRouter()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;

        if (email === 'admin@gmail.com' && password === 'admin') {
            route.push('/dashboard')
            const adminInfo = JSON.stringify({ email, password })
            localStorage.setItem('adminInfo', adminInfo);
            toast.success('loggedIn successfully!')
        } else {
            toast.error('incorrect password or email!')
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="col-xl-5 col-lg-6 col-md-8 col-10 mx-auto border p-5 border-secondary rounded">
                <h1 className="h4 font-weight-bold mb-4">Sign In</h1>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <input className="form-control mb-3" name="email" type="email" placeholder="Email" />
                    <input className="form-control mb-3" name="password" type="password" placeholder="Password" />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
            <Toaster />
        </div>
    )
}

export default Auth