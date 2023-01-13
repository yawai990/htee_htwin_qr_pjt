import React from 'react'

const Image = ({img,name}) => {
  return (
      <img src={img} alt={name} className="w-full h-full" />
  )
}

export default Image