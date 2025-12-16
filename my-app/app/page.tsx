import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-center flex gap-2 bg-white max-w-lg">
      <div className="bg-yellow-200">
        <p className="text-black">About Us</p>
      </div>
      <div>
        <p>Contact Us</p>
      </div>
      <div>
        <p>Donate</p>
      </div>
      <div>
        <p>Learn more</p>
      </div>
    </div>
  );
}
