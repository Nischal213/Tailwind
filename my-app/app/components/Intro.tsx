import React from "react";
import { useInView } from "react-intersection-observer";

export const Intro = () => {
    const {ref , inView} = useInView({
        triggerOnce : true,
        threshold: 0.001
    })

    return (
        <div className="flex-row-centered bg-[#121212] gap-x-10 py-40">
            <img ref={ref} className={`w-1/3 rounded-4xl shadow-2xl/100 ${inView ? "animate-fade-in" : "opacity-100"}`}src={"placeholder.jpg"}></img>
            <div ref={ref} className={`flex flex-col pt-2 w-1/3 ${inView ? "animate-fade-in" : "opacity-100"}`}>
                <h2 className="text-[#E0E0E0] heading-2"> I am a learning developer </h2>
                <p className="text-[#E0E0E0] font-mono pt-5"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Provident ab similique explicabo alias aut mollitia nemo ducimus saepe ad libero cumque, 
                    corrupti repudiandae molestiae reiciendis commodi nobis modi error dolorem. 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, consectetur? 
                    Numquam dicta excepturi accusantium, iusto impedit totam magni sapiente ducimus inventore porro. 
                    Officiis laudantium quas debitis rem, sed earum cupiditate!
                </p>
            </div>
        </div>
    )
}