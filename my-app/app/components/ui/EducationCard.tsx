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
        <div className={`flex-row-centered gap-x-5 w-4/10 ${seperator? `border-b-4 border-neutral-500` : ``}`}>
            <img src={logo} className="w-25 h-25"></img>
            <div className="flex flex-col items-start w-6/10">
                <h2 className="heading-2"> {heading} </h2>
                <p> {name} </p>
                <p> {date} </p>
                <p> {location} </p>
                <ul className="list-disc list-inside">
                    {paragraph.map(i => <li key={i}> {i} </li>)}
                </ul>
            </div>
        </div>
    )
}