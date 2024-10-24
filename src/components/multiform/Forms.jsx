import React from 'react'
import { FormHeader } from '../FormHeader'

export const SectionFirst = () => {
    const title = `
        Manage your courses and team in an easy way
    `
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
        <div>SectionSecond</div>
    )
}
export const SectionThird = () => {
    return (
        <div>SectionThird</div>
    )
}
export const SectionFourth = () => {
    return (
        <div>SectionFourth</div>
    )
}
