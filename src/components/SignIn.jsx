import React from 'react'

export const SignIn = () => {
    return (
        <div className="flex flex-col justify-center font-inter md:flex-row">
            {/* <!-- Left Section with Text and Image --> */}
            <section className=" bg-newGrey md:w-1/2">
                <div className="px-12 w-full py-[64px]">
                    <div className="">
                        {/* <!-- ========= Medium screen --> */}
                        <h2 className="hidden text-4xl pb-20 px-16 leading-snug font-semibold md:block">Manage your courses <br /> and team in an
                            easy <br /> way
                        </h2>
                        {/* <!-- ================ Small screen ============= --> */}
                        <h2 className="text-3xl pb-20  leading-snug font-semibold md:px-16 md:hidden">
                            Manage your courses and team in an
                            easy way
                        </h2>
                    </div>
                    <img className="w-[537] h-[369]" src="/Frame.png" alt="" />
                </div>
            </section>
            {/* <!-- Right Section with Form --> */}
            <section className="px-[64px] pt-[80px] md:w-1/2">
                {/* <!-- === Top section === --> */}
                <div className="">
                    <h2 className="text-2xl font-semibold">Sign in to Xepho</h2>
                    {/* <!-- ===== buttons --> */}
                    <section className="py-10">
                        <div className="flex gap-4">
                            <button className="bg-bright rounded-md w-[60%] py-2 text-sm text-white">
                                Sign in with google
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
                        <div className="">
                            <input type="checkbox" className="mr-2 border-none" name="" />
                            <label className="text-sm text-gray-400">
                                remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <span className="text-gray-400">
                                <a href="./password-reset.html" className="">forgot password?</a>
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
                                <a href="./new_signup.html">Sign up now</a>
                            </span>
                        </div>
                    </section>
                </form>
            </section>
        </div>


    )
}
