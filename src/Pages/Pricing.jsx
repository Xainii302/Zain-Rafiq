import React from "react";
import Pricingchild from "../Component/Pricing_child";
import Pricing2 from "../Component/Pricing2";
import Heading from "../Component/Heading";
export default function Pricing() {
  return (
    <>
      <div id="pricing">
        <div>
          <Heading
            head={{
              h1: "SERVICES",
              color: "text-[#04D87E]",
              h2: "We provide a full range of modern digital services",
            }}
          />
        </div>

        <div className="w-[90%] gap-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
          <Pricingchild
            data={{
              title1: "Light",
              title2: "For small companies",
              head1: "39",
              head2: "99",
              title3: "+ 24/7 Customer Support",
              title4: "- Club membership",
              title5: "- Personal Assistance",
              title6: "- Free Updates",
              title7:
                "Ut interdum sapien dignissim interdum. Integer suscipit ex eget viverra pellentesque.",
            }}
          />
          <Pricingchild
            data={{
              title1: "Regular",
              title2: "For medium companies",
              head1: "46",
              head2: "",
              title3: "+ 24/7 Customer Support",
              title4: "- Club membership",
              title5: "- Personal Assistance",
              title6: "- Free Updates",
              title7:
                "Ut interdum sapien dignissim interdum. Integer suscipit ex eget viverra pellentesque.",
            }}
          />
          <Pricingchild
            data={{
              title1: "Extended",
              title2: "For large companies",
              head1: "125",
              head2: "99",
              title3: "+ 24/7 Customer Support",
              title4: "- Club membership",
              title5: "- Personal Assistance",
              title6: "- Free Updates",
              title7:
                "Lorem sapien dignissim interdum. Integer suscipit ex eget viverra pellentesque nulla.",
            }}
          />
        </div>
        <div>
          <Pricing2 />
        </div>
      </div>
    </>
  );
}
