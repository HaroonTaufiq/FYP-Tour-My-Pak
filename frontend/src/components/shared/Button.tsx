import React, { FC } from 'react'

const Button:FC<{text:string}>= ({text}) => {
  return (
    <button type="submit"className='bg-teal-700 text-white px-7 py-4 rounded-full shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300'>{text}</button>
  )
}

export default Button