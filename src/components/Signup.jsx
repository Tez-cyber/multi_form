import React from 'react'
import { FirstSection } from './FirstSection'
import { FormContainer } from './FormContainer'
import { FormHeader } from './FormHeader'
import { Link, useNavigate } from 'react-router-dom'

export const Signup = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/multi')
    }
    return (
        <div className="flex flex-col justify-center font-inter md:flex-row">
            {/* <!-- Left Section with Text and Image --> */}
            <FirstSection src="/Frame.png" />
            {/* <!-- Right Section with Form --> */}
            <FormContainer>
                {/* <!-- === Top section === --> */}
                <FormHeader buttonText="Sign up with google" type="auth" title="Sign up to Xepho" />
                {/* <!-- ==== Form section ==== --> */}
                <form onSubmit={handleSubmit} className="">
                    <div className="flex gap-4">
                        <div className="inputLabel w-1/2 ">
                            <label>Full Name</label>
                            <input className="inputItem" type="text" placeholder="Input your full name here" />
                        </div>
                        <div className="inputLabel w-1/2">
                            <label>Username</label>
                            <input className="inputItem" type="text" placeholder="Input your username here" />
                        </div>
                    </div>
                    {/* <!-- ==== Email ==== --> */}
                    <div className="inputLabel">
                        <label>Email</label>
                        <input className="inputItem" type="email" placeholder="Input your email here" />
                    </div>
                    {/* <!-- ==== Password ==== --> */}
                    <div className="inputLabel">
                        <label>Password</label>
                        <input className="inputItem" type="password" placeholder="Input your password here" />
                    </div>
                    {/* <!-- ====== Terms of service --> */}
                    <section className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" className="border-none" name="" />
                            <label className="text-sm ml-2 text-gray-400">
                                I have read and agree to the Terms of Service
                            </label>
                        </div>
                    </section>
                    {/* <!-- ============== Create  --> */}
                    <section className="my-10 flex flex-col items-center justify-between md:flex-row">
                        <button type='submit' className="bg-bright rounded-md py-3 px-4 w-[192px] text-sm text-white">Create account</button>
                        <div className="text-sm py-5">
                            <span className="text-gray-400 pr-2">
                                Doesn’t have an account?
                            </span>
                            <span className="text-bright font-bold">
                            <Link to="/">Sign in now</Link>
                            </span>
                        </div>
                    </section>
                </form>
            </FormContainer>
        </div>
    )
}
