import React from "react";

interface ButtonProp {
    text : string
    bgStyle? : "White" | "Gray"
}

export const Button = (prop : ButtonProp) => {
    const {text , bgStyle="White"} = prop

    const something = bgStyle == "White" ? 
    <button className="bg-white" key={text}> {text} </button> : 
    <button className="bg-gray" key={text}> {text} </button>
    
    return something
}