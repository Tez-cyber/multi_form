import React from 'react'
import { FirstSection } from './FirstSection'
import { FormContainer } from './FormContainer'
import { FormHeader } from './FormHeader'

export const Signup = () => {
    return (
        <div className="flex flex-col justify-center font-inter md:flex-row">
            {/* <!-- Left Section with Text and Image --> */}
            <FirstSection src="/Frame.png" />
            {/* <!-- Right Section with Form --> */}
            <FormContainer>
                {/* <!-- === Top section === --> */}
                <FormHeader buttonText="Sign up with google" type="auth" title="Sign up to Xepho" />
                {/* <!-- ==== Form section ==== --> */}
                <form action="" className="">
                    <div class="flex gap-4">
                        <div class="inputLabel w-1/2 ">
                            <label for="">Full Name</label>
                            <input class="inputItem" type="text" placeholder="Input your full name here" />
                        </div>
                        <div class="inputLabel w-1/2">
                            <label for="">Username</label>
                            <input class="inputItem" type="text" placeholder="Input your username here" />
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
                        <div className="">
                            <input type="checkbox" className="mr-2 border-none" name="" />
                            <label className="text-sm text-gray-400">
                                I have read and agree to the Terms of Service
                            </label>
                        </div>
                    </section>
                    {/* <!-- ============== Create  --> */}
                    <section className="my-10 flex flex-col items-center justify-between md:flex-row">
                        <button className="bg-bright rounded-md py-3 px-4 w-[192px] text-sm text-white">Create account</button>
                        <div className="text-sm py-5">
                            <span className="text-gray-400 pr-2">
                                Doesn’t have an account?
                            </span>
                            <span className="text-bright font-bold">
                                <a href="/">Sign up now</a>
                            </span>
                        </div>
                    </section>
                </form>
            </FormContainer>
        </div>
    )
}
