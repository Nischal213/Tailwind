import React from "react";

export const Form = () => {
    return (
        <div className="flex-row-centered bg-black py-50">
            <div className="flex-col-centered gap-y-12 w-1/2">
                <div className="flex-col-centered pt-10 w-30/100 gap-y-10">
                    <div className="w-full">
                        <h4 className="heading-3 text-white"> Your name </h4>
                        <input name="username" className="heading-4 bg-black w-full" placeholder="Nischal"/>
                    </div>
                    <div className="w-full">
                        <h4 className="heading-3 text-white"> Your email </h4>
                        <input name="email" className="heading-4 bg-black w-full" placeholder="example@gmail.com"/>
                    </div>
                    <div className="w-full">
                        <h4 className="heading-3 text-white"> Comments </h4>
                        <input name="thoughts" className="heading-4 bg-black w-full" placeholder="Best website"/>
                    </div>
                </div>
                <div>
                    <button className="bg-neutral-300 rounded-3xl px-2 heading-3" > Share </button>
                </div>
            </div>

            <div className="flex-col-centered gap-y-10 w-1/2 place-content-center">
                <h1 className="heading-1 text-gray-300"> Contact Us</h1>
                {/* <img src="/contactform/email.png"></img> */}
            </div>
        </div>
    )
}