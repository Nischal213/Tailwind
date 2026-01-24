import React from "react";

interface EducationCardProp {
    logo : string
    heading : string
    name : string
    date : string
    location : string
    paragraph : string[]
    seperator? : boolean
}

export const EducationCard = (props : EducationCardProp) => {
    const {logo , heading , name , date , location , paragraph , seperator=true} = props

    return (
        <>
        <div className={`flex-row-centered gap-x-5 w-full ${ seperator? "pb-2" : ""}`}>
            <img src={logo} className="w-18 h-18"></img>
            <div className={`flex flex-col items-start w-45/100 text-black bg-blue-100 ${seperator? "pb-2 border-b-4 border-black" : ""}`}>
                <h3 className="heading-3"> {heading} </h3>
                <p className="text-sm"> {name} </p>
                <p className="text-sm"> {date} </p>
                <p className="text-sm"> {location} </p>
                <ul className="list-disc list-inside pt-2">
                    {paragraph.map(i => <li key={i}> {i} </li>)}
                </ul>
            </div>
        </div>
        <div className="">
        </div>
        </>
    )
}