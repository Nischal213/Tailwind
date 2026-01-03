import React from "react";

interface NavbarProp {
    buttonsArray : string[]
}

export const Navbar = (props : NavbarProp) => {
    return (
    <div className="justify-center flex gap-x-7 bg-[#1f1f1f] w-fit m-auto py-2 px-5 rounded-3xl shadow-lg/50">
        <div className="bg-white rounded-full max-w-8 transition duration-300 hover:-translate-y-1">
          <img src={"saturn.png"} className="p-1"></img>
        </div>
        {props.buttonsArray.map(i =>
          <div key={i} className="text-white btn-text mt-0.5 animate-pop-up" >
            <button> {i} </button>
          </div>
        )}
    </div>
    );
}