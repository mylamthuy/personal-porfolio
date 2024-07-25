import React from 'react';

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'border-b-2 border-[#2EA8C8]' : 'text-gray-400'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-gray-800 ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}

export default TabButton;