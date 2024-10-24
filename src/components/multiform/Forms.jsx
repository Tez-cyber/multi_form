import React from 'react'
import { FormHeader } from '../FormHeader'

export const SectionFirst = () => {
    return (
        <>
            {/* <!-- === Top section === --> */}
            <FormHeader
                desc="Who are you? What’s your company or organisation all about?"
                title="Tell us about your company" />
            {/* ============ Form */}
            <form action="">
                {/* <!-- ==== Email ==== --> */}
                <div className="inputLabel">
                    <label>Your Company Name</label>
                    <input className="inputItem" type="email" placeholder="Input your Company Name here" />
                </div>
                {/* <!-- ==== Second ==== --> */}
                <div className="inputLabel">
                    <label>Your Company Description</label>
                    <input className="inputItem" type="password" placeholder="Tell me about what your company looks like" />
                </div>
                {/* <!-- ====  ==== --> */}
                <div className="inputLabel">
                    <label>How many Employess ?</label>
                    <div className="flex">
                        <div className="w-1/2 flex gap-3">
                            <input className="paleinputItem" type="text" value="1 - 10" />
                            <input className="paleinputItem" type="text" value="20 - 30" />
                            <input className="paleinputItem" type="text" value="50 +" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export const SectionSecond = () => {
    return (
        <>
            {/* <!-- === Top section === --> */}
            <FormHeader
                desc="Who are you? What’s your company or organisation all about?"
                title="Complete your company profile" />
            {/* ============ Form */}
            <form action="">
                {/* <!-- ==== Email ==== --> */}
                <div className="inputLabel">
                    <label>Your Company Description</label>
                    <input className="inputItem" type="text" placeholder="Tell me about what your company looks like" />
                </div>
                {/* <!-- ==== Second ==== --> */}
                <div className="inputLabel">
                    <label>Your Company Location</label>
                    <input className="inputItem" type="text" placeholder="What is the address of your company" />
                </div>
            </form>
        </>
    )
}
export const SectionThird = () => {
    return (
        <>
            {/* <!-- === Top section === --> */}
            <FormHeader
                desc="We want to know what’s your company interest"
                title="What’s your company interest?" />
            {/* ============ Form */}
            <form action="">
                {/* <!-- ==== Email ==== --> */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                        <input type="checkbox" className="border-none" name="" />
                        <label className="text-sm ml-2 text-gray-400">
                            To manage the tasks
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="border-none" name="" />
                        <label className="text-sm ml-2 text-gray-400">
                            To manage the projects
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="border-none" name="" />
                        <label className="text-sm ml-2 text-gray-400">
                        To manage the team
                        </label>
                    </div>
                </div>
                 {/* <!-- ==== Second ==== --> */}
                 <div className="inputLabel my-10">
                    <label>Other option</label>
                    <input className="inputItem" type="text" placeholder="Input your option" />
                </div>
            </form>
        </>
    )
}
export const SectionFourth = () => {
    return (
        <FormHeader
                title="Registration completed" />
    )
}
