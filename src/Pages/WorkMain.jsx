import React from "react";
import WorkMainCard from "../Component/work_Card";
import Heading from "../Component/Heading";
import Works from "../Component/Works";

export default function WorkMain() {
  return (
    <div id="howwework">
      <div>
        <Heading
          head={{
            h1: "How We Work",
            color: "text-[#0376EA]",
            h2: "We provide a full range of modern digital services",
          }}
        />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 pl-16 pt-10 gap-6">
        <WorkMainCard
          h1={"1."}
          h2={"Discussion"}
          title={
            "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Ut elit tellus, luctus nec  ullamcorper mattis, pulvinar dapibus leo."
          }
        />
        <WorkMainCard
          h1={"2."}
          h2={"Concept"}
          title={
            "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          }
        />
        <WorkMainCard
          h1={"3."}
          h2={"Final strategy"}
          title={
            "Pulvinar dapibus leo adipiscing elit mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis!"
          }
        />
        <WorkMainCard
          h1={"4."}
          h2={"Implementation"}
          title={
            "Pulvinar dapibus leo adipiscing elit mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis!"
          }
        />
        <WorkMainCard
          h1={"5."}
          h2={"Testing & evaluation"}
          title={
            "Leo adipiscing elit mattis, pulvinart elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus."
          }
        />
        <WorkMainCard
          h1={"6."}
          h2={"Support & updates"}
          title={
            "Mattis pulvinart - elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
          }
        />
      </div>
      <div>
        <Works />
      </div>
    </div>
  );
}
