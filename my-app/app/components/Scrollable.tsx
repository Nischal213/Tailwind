import React from "react";

interface ScrollableProp {
    languages : string[]
}

export const Scrollable = (prop : ScrollableProp) => {
    const {languages} = prop

    return (
        <div className="flex flex-col bg-red-100 items-center py-30 gap-y-10">
            <h1 className="text-black font-mono text-3xl"> Languages I've worked with </h1>
            <div className="flex flex-row gap-x-7 bg-blue-100">
                {languages.map(i => 
                    <img  key={i} src={i + ".jpg"} className="w-25 h-25 rounded-3xl">
                    </img>)
                }
            </div>
        </div>
    )
}