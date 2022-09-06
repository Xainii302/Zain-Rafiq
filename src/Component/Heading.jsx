import React from 'react'


export default function Heading(props) {

    return (
        
            <div className='text-center space-y-5 py-10'>
                <h1 className={`${props.head.color} text-blue-600 text-xl`}>{props.head.h1}</h1>
                <h2 className='xl:text-4xl md:text-3xl text-2xl  mx-auto'>{props.head.h2}</h2>
            </div>
    )
}