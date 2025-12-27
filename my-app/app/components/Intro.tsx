import React from "react";


export const Intro = () => {
    return (
        <div className="flex bg-[#121212] gap-x-10 pt-5 justify-center">
            <img className="w-1/3 rounded-4xl shadow-2xl/100" src={"placeholder.jpg"}></img>
            <div className="flex-col w-1/3">
                <h1 className="text-[#E0E0E0] text-3xl font-mono"> I am a learning developer </h1>
                <p className="text-[#E0E0E0] font-mono pt-10"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
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