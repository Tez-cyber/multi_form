import React from 'react'

export const FormHeader = ({ type, title, buttonText }) => {
    return (
        <div className="">
            <h2 className={!type === "auth" ? "text-2xl font-semibold pb-10" : "text-2xl font-semibold"}>{title}</h2>
            {/* <!-- ===== buttons --> */}
            <div className={!type === "auth" ? "hidden" : "block"}>
                <section className="py-10">
                    <div className="flex gap-4">
                        <button className="bg-bright rounded-md w-[60%] py-2 text-sm text-white">
                            {buttonText}
                        </button>
                        <div className="flex gap-2">
                            <div
                                className="spin">
                                <img src="/spin.png" alt="" />
                            </div>
                            <div
                                className="spin">
                                <img src="/spin.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ======= OR text --> */}
                <div className="flex items-center mb-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-2 text-gray-500">Or</span>
                    <hr className="flex-1 border-gray-300" />
                </div>
            </div>
        </div>
    )
}
