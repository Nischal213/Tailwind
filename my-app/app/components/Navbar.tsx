import React from "react";

interface NavbarProp {
    buttonsArray : string[]
}

export const Navbar = (props : NavbarProp) => {
    return (
    <div className="justify-center flex gap-x-7 bg-[#1f1f1f] w-fit m-auto py-2 px-5 rounded-3xl text-white text-lg shadow-lg/50">
        <div className="bg-white rounded-full max-w-8 transition duration-300 hover:-translate-y-1">
          <img src={"saturn.png"} className="p-1"></img>
        </div>
        {props.buttonsArray.map(i =>
          <div key={i} className="mt-0.5 transition hover:-translate-y-1 hover:scale-110" >
            <button> {i} </button>
          </div>
        )}
    </div>
    );
}