import React, { FC } from 'react'

// interface IProps{
//     header:string,
//     description:string,
//     number:string,
// haveborder?:boolean
// }


const QuarterBox:FC<{header:string, desc:string, number:number, haveborder?:boolean}> = ({header, desc, number,haveborder=true}) => {
  return (
    <div>
         <div className={`border rounded-md-w-4/12 relative px-8 py-8 ${haveborder && "border"}`}>
         <h4 className='font-bold text-lg'>{header}</h4>
         <p className='mt-2 '>{desc}</p>
         <span className='absolute top-0 right-10 text-gray-300 -z-10 text-9xl font-bold '>{number}</span>
    </div>
    </div>
  )
}

export default QuarterBox