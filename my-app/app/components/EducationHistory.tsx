import React from "react";
import { EducationCard } from "./ui/EducationCard";

const secondarySchool = {
    logo : "ccc.png",
    heading : "Studied Secondary School",
    name : "Cranford Community College",
    date : "12/01/21 - 17/08/25",
    location : "Hounslow",
    paragraph : ["I studied physics" , "I studied maths" , "I studied computer science"]
}

const primarySchool = {
    logo : "hkprimaryschool.jpg",
    heading : "Studied Primary School",
    name : "Hong Kong Taoist Association Wun Tsuen School",
    date : "01/09/13 - 15/07/19",
    location : "Hong Kong",
    paragraph : ["I studied" , "I played" , "I ate"],
    seperator : false
}


export const EducationHistory = () => {
    return (
        <div className="flex-col-centered gap-y-2">
            <EducationCard {...secondarySchool}></EducationCard>
            <EducationCard {...primarySchool}></EducationCard>
        </div>
    )
}