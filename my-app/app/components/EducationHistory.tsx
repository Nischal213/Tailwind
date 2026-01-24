import React from "react";
import { EducationCard } from "./ui/EducationCard";

const secondarySchool = {
    logo : "educationcards/ccc.png",
    heading : "Secondary School",
    name : "Cranford Community College",
    date : "12/01/21 - 17/08/25",
    location : "Hounslow",
    paragraph : ["In secondary school, I studied a wider range of subjects in more detail." ,
                 "I became more independent and responsible for my own learning." , 
                 "These experiences helped prepare me for exams and future education."]
}

const primarySchool = {
    logo : "educationcards/hkprimaryschool.jpg",
    heading : "Primary School",
    name : "Hong Kong Taoist Association Wun Tsuen School",
    date : "01/09/13 - 15/07/19",
    location : "Hong Kong",
    paragraph : ["In primary school, I learned basic reading, writing, and maths skills." ,
                 "I enjoyed taking part in class activities and playing with friends." ,
                 "My teachers helped me build confidence and curiosity for learning."],
    seperator : false
}


export const EducationHistory = () => {
    return (
        <div className="flex-col-centered py-15 bg-[#121212]">
            <h1 className="heading-1 pb-8 text-[#E0E0E0]"> Work Experience</h1>
            <EducationCard {...secondarySchool}></EducationCard>
            <EducationCard {...primarySchool}></EducationCard>
        </div>
    )
}