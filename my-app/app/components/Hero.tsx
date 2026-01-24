import React from "react";
import { Navbar } from "./Navbar";
import { Button } from "./Button";

export const Hero = () => {
    return (
        <div className="max-w-screen bg-black h-screen">
            <div className="flex-row-centered pt-5 animate-fade-in">
                <Navbar buttonsArray={["Home" , "About us" , "Contact us" , "FAQ"]}></Navbar>
            </div>
            <div className="flex-col-centered animate-fade-in">
                <h1 className="h-1/2 text-center text-white heading-1 pt-50 pb-5"> Spark Your Curiosity </h1>
                <h3 className="h-1/2 text-center text-[#8f8f8f] heading-3 pb-7 mx-50"> Dive into a world where curiosity meets creativity, and every idea sparks something new. </h3>
                <div className="flex-row-centered gap-10">
                    <Button text="Get Started Free"></Button>
                    <Button text="See How It Works" bgStyle="Gray"></Button>
                </div>
            </div>
        </div>
    );
}