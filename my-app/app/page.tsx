"use client"
import { EducationHistory } from "./components/EducationHistory";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Scrollable } from "./components/Scrollable";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form"

export default function Home() {
  return (
    <div className="max-w-screen h-screen">
      <Hero></Hero>
      <Intro></Intro>
      <Scrollable languages={["python" , "java" , "react" , "tailwind" , "html" , "css" , "javascript" , "cpp"]}></Scrollable>
      <EducationHistory></EducationHistory>
      <Form></Form>
      <Footer images={["facebook" , "instagram" , "linkedin" , "tiktok" , "twitter" , "youtube"]}></Footer>
    </div>
  );
}
