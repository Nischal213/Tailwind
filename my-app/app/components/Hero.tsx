import React from "react";
import { Navbar } from "./Navbar";
import { Button } from "./Button";

export const Hero = () => {
    return (
        <div className="w-screen bg-black h-screen">
            <div className="pt-5">
                <Navbar buttonsArray={["Home" , "About us" , "Contact us" , "FAQ" , "Test"]}></Navbar>
            </div>
            <div className="flex-row bg-[#008080]">
                <h1 className="bg-[#32a852] h-1/2 text-center text-6xl font-mono font-semibold pt-12 mx-50"> Spark Your Curiosity </h1>
                <h3 className="bg-[#5a8c67] h-1/2 text-center text-2xl font-mono font-medium text-balance mx-50"> Dive into a world where curiosity meets creativity, and every idea sparks something new. </h3>
                <div className="flex justify-center">
                    <Button text="Test" bgStyle="Gray"></Button>
                    <Button text="Hi"></Button>
                </div>
            </div>
        </div>
    );
}