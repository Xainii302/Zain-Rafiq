import React from 'react'
import Pricing2_child from "../Component/Pricing2_child"
import Pic from "../Assets/img123.jpg"
import Pic2 from "../Assets/img124.jpg"
export default function Pricing2() {
  return (
    <>
   <div className="grid lg:grid-cols-2 grid-cols-1">
   <div className=" flex bg-gray-200 py-8 justify-center">
        <Pricing2_child data={{src:Pic,title:"Jason Seven",title2:"Founder",
        title3:"“Vestibulum posuere felis vestibulum pharetra dapibus. Nam vitae sapien, porttitor purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet aliquam, pellentesque eu velit. Suspendisse potenti!”"}}/>
   </div>
   
   <div className="">
   <img className='h-full' src={Pic2} alt="" />
   </div>

   </div>

    </>
  )
}
