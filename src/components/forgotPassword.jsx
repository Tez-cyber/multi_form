import React from 'react'
import { FormContainer } from './FormContainer'
import { FirstSection } from './FirstSection'
import { FormHeader } from './FormHeader'

export const ForgotPassword = () => {
    return (
        <div className="flex flex-col justify-center font-inter md:flex-row-reverse">
            {/* <!-- Left Section with Text and Image --> */}
            <FirstSection type="forgot-password" src="/Frame.png" />
            {/* <!-- Right Section with Form --> */}
            <FormContainer>
                {/* <!-- === Top section === --> */}
                <FormHeader
                    mini_desc="For security reasons, we do NOT store your password. So rest assured that we will never send your password via email."
                    desc="Enter the email address you used when you joined and we’ll send you instructions to reset your password."
                    title="Forgot Password"
                />
                {/* <!-- ==== Form section ==== --> */}
                <form className="">
                    {/* <!-- ==== Email ==== --> */}
                    <div className="inputLabel">
                        <label>Email</label>
                        <input className="inputItem" type="email" placeholder="Input your email here" />
                    </div>
                    {/* ========== */}
                    <section className="my-10">
                        <button className="bg-bright rounded-md py-3 px-4 w-[192px] text-sm text-white">Reset Password</button>
                    </section>
                </form>
            </FormContainer>
        </div>
    )
}
