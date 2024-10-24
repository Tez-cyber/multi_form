import React from 'react'
import { FirstSection } from './FirstSection'
import { FormContainer } from './FormContainer'
import { FormHeader } from './FormHeader'
import { Link } from 'react-router-dom'

export const SignIn = () => {
    return (
        <div className="flex flex-col justify-center font-inter md:flex-row">
            {/* <!-- Left Section with Text and Image --> */}
            <FirstSection src="/Frame.png" />
            {/* <!-- Right Section with Form --> */}
            <FormContainer>
                {/* <!-- === Top section === --> */}
                <FormHeader buttonText="Sign in with google" type="auth" title="Sign in to Xepho" />
                {/* <!-- ==== Form section ==== --> */}
                <form action="" className="">
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
                                remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <span className="text-gray-400">
                                <Link to="/forgot-password" className="">forgot password?</Link>
                            </span>
                        </div>
                    </section>
                    {/* <!-- ============== Create  --> */}
                    <section className="my-10 flex flex-col items-center justify-between md:flex-row">
                        <button className="bg-bright rounded-md py-3 px-4 w-[192px] text-sm text-white">Sign in</button>
                        <div className="text-sm py-5">
                            <span className="text-gray-400 pr-2">
                                Doesn’t have an account?
                            </span>
                            <span className="text-bright font-bold">
                                <Link to="/signup">Sign up now</Link>
                            </span>
                        </div>
                    </section>
                </form>
            </FormContainer>
        </div>
    )
}
