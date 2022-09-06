import React from "react";
import Pic from "../Assets/img104.jpg";
import Slider_Child from "./Slider_Child";
import SlideImg1 from "../Assets/img107.jpg";
import SlideImg2 from "../Assets/img108.jpg";
import SlideImg3 from "../Assets/img109.jpg";
import SlideImg4 from "../Assets/img110.jpg";
import SlideImg5 from "../Assets/img106.jpg";

export default function Slider() {
  const arr = [SlideImg1, SlideImg2, SlideImg3, SlideImg4, SlideImg5];
  const arr1 = [
    "Jhon Richmond",
    "Alexender Brown",
    "Tiffany Anderson",
    "Barnerd Blackwood",
    "Maria Green",
  ];
  const arr2 = [
    "SevenConsulting-executive directer",
    "SevenConsulting-marketing directer",
    "Save Media-CEO",
    "Seven & CO-Marketing directer",
    "Seven Dev-Markwting directer",
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 z-[-1rem]">
      <div>
        <img src={Pic} alt="" />
      </div>
      <div>
        <Slider_Child
          data={{
            mydata: arr,
            para: "lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quam porro voluptatum doloremque delectus dolorem quibusdam corporis id. Corporis, ratione. Maiores  obcaecati totam commodi?",
            Name: arr1,
            Pro:arr2,
          }}
        />
      </div>
    </div>
  );
}
