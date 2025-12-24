import React from "react";
import { SourceTextModule } from "vm";

interface ButtonProp {
    text : string
    bgStyle? : "White" | "Gray"
}

export const Button = (prop : ButtonProp) => {
    const {text , bgStyle="White"} = prop
    console.log(bgStyle)

    if (bgStyle == "Gray") {
        return <button className="bg-[#262626] px-3 py-1 rounded-3xl text-white font-sans hover:bg-[#202020] delay-50"> {text} </button>
    }
    else {
        return <button className="bg-white px-3 py-1 rounded-3xl font-sans hover:bg-[#b3b3b3] delay-50"> {text} </button>
    }
}