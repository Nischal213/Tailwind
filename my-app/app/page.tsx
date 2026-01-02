"use client"
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Scrollable } from "./components/Scrollable";

export default function Home() {
  return (
    <div className="max-w-screen h-screen">
      <Hero></Hero>
      <Intro></Intro>
      <Scrollable languages={["python" , "java" , "react"]}></Scrollable>
    </div>
  );
}
