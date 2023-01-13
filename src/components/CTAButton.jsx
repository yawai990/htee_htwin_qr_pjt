import React from 'react';

const CTAButton = ({ name, includeIcon = false, icon = "", onClick }) => {

  return (
    <button className="flex items-center text-white px-5 py-2.5 bg-primary rounded uppercase" onClick={onClick}>
       {includeIcon ? icon : null}&nbsp;{name}
    </button>
  )
}

export default CTAButton