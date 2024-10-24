import React from 'react'

export const FirstSection = ({ src, type }) => {
    return (
        <section className=" bg-newGrey md:w-1/2">
            <div className="px-12 w-full py-[64px]">
                <div className="">
                    {/* <!-- ========= Medium screen --> */}
                    {
                        type === "forgot-password" ? (
                            ""
                        ) : (<h2 className="hidden text-4xl pb-20 px-16 leading-snug font-semibold md:block">Manage your courses <br /> and team in an
                            easy <br /> way
                        </h2>)
                    }
                    {/* <!-- ================ Small screen ============= --> */}
                    <h2 className="text-3xl pb-20  leading-snug font-semibold md:px-16 md:hidden">
                        Manage your courses and team in an
                        easy way
                    </h2>
                </div>
                <img className="w-[537] h-[369]" src={src} alt="" />
            </div>
        </section>
    )
}
