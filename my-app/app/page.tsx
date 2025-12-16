import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-center flex gap-7 bg-[#1f1f1f] max-w-md m-auto mt-10 py-2 rounded-3xl text-white text-lg shadow-lg/50">
        <div className="bg-white rounded-full max-w-8">
          <img src={"saturn.png"} className="p-1"></img>
        </div>
        <div className="mt-0.5">
          <p> Home </p>
        </div>
        <div className="mt-0.5">
          <p> About us </p>
        </div>
        <div className="mt-0.5">
          <p> FAQ </p>
        </div>
        <div className="mt-0.5">
          <p> Contact us </p>
        </div>
    </div>
  );
}
