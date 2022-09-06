import React, { useState } from "react";
import Logo from "../Assets/img102.svg";

export default function Home() {
  return (
    <div id="home" className="head image py-28">
      <div className="flex flex-col justify-center items-center">
        <img
          src={Logo} alt=""
          className="lg:w-24 w-10 hover:hue-rotate-15 hover:rotate-12 duration-100"
        />
        <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-xl py-5">
          Seven Agency
        </h1>
        <p className="md:text-3xl sm:text-2xl text-sm">
          Smart digital solutions
        </p>
      </div>
    </div>
  );
}
