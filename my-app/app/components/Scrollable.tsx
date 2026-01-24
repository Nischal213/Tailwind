import React from "react";

interface ScrollableProp {
    languages : string[]
}

export const Scrollable = (prop : ScrollableProp) => {
    const {languages} = prop

    return (
        <div className="flex-col-centered py-30 gap-y-10 bg-[#121212]">
            <h2 className="text-[#E0E0E0] heading-2"> Languages I've worked with </h2>
            <div className="flex-row-centered gap-x-7 bg-zinc-700 p-8 rounded-3xl">
                {languages.map(i => 
                    <img  key={i} src={"/scrollable/"+ i + ".jpg"} className="w-25 h-25 rounded-3xl animate-pop-up">
                    </img>)}
            </div>
        </div>
    )
}