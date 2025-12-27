import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";

export default function Home() {
  return (
    
    <div className="max-w-screen h-screen">
      <Hero></Hero>
      <Intro></Intro>
    </div>
  );
}
