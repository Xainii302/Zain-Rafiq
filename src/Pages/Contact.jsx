import React from "react";

export default function Contact() {
  return (
    <div className="image flex justify-between flex-col items-center py-10">
      <h1 className="icon md:text-3xl sm:text-xl xs:text-md text-center pt-20">
        Start a project with Seven Agency
      </h1>
      <h1 className="head md:text-5xl sm:text-3xl text-xl text-center py-10">
        Have an idea? Let's discuss it!
      </h1>
      <div>
        <button className="bg-[#02A665] hover:bg-green-700 hover:text-white py-3 px-20 rounded">
          Contact Us Now
        </button>
      </div>
    </div>
  );
}
