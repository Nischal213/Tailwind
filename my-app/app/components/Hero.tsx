import React from "react";
import { Navbar } from "./Navbar";
import { Button } from "./Button";

export const Hero = () => {
    return (
        <div className="w-screen bg-black h-screen">
            <div className="pt-5">
                <Navbar buttonsArray={["Home" , "About us" , "Contact us" , "FAQ"]}></Navbar>
            </div>
            <div className="flex-row">
                <h1 className="h-1/2 text-center text-6xl text-white font-mono font-semibold pt-50 pb-5 mx-120"> Spark Your Curiosity </h1>
                <h3 className="h-1/2 text-center text-2xl text-[#8f8f8f] font-mono font-medium text-balance pb-7 mx-50"> Dive into a world where curiosity meets creativity, and every idea sparks something new. </h3>
                <div className="flex justify-center gap-10">
                    <Button text="Get Started Free"></Button>
                    <Button text="See How It Works" bgStyle="Gray"></Button>
                </div>
            </div>
        </div>
    );
}