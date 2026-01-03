import React from "react";

interface ScrollableProp {
    languages : string[]
}

export const Scrollable = (prop : ScrollableProp) => {
    const {languages} = prop

    return (
        <div className="flex-col-centered bg-red-100 py-30 gap-y-10">
            <h2 className="text-black heading-2"> Languages I've worked with </h2>
            <div className="flex-row-centered gap-x-7 bg-blue-100 p-8 rounded-3xl">
                {languages.map(i => 
                    <img  key={i} src={"/scrollable/"+ i + ".jpg"} className="w-25 h-25 rounded-3xl animate-pop-up">
                    </img>)
                }
            </div>
        </div>
    )
}