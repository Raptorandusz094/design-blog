import React from 'react'



export function Footer() {

    let containerStyles = 'flex justify-between w-full mt-[50px]';
    let linkStyles = 'text-gray-500 px-3';
 
  return (<div className='mt-[100px] w-full h-auto '>
  <footer className='sm:hidden md:grid grid-row-3 gap-5 w-full  h-80 bg-gray-800'>
    <div className={containerStyles}>
      <div>
        <h1 className="font-bold text-2xl text-white">VENCE Studio<span className="text-[#DDBEA9]">.</span></h1>
      </div>
      <ul className='md:flex'>
        <li href="" className={linkStyles}>About Studio</li>
        <li href="" className={linkStyles}>Archive</li>
        <li href="" className={linkStyles}>Contact Us</li>
      </ul>
      <ul  className='md:flex'>
        <li href="" className={linkStyles}>Fb</li>
        <li href="" className={linkStyles}>Tw</li>
        <li href="" className={linkStyles}>Ln</li>
      </ul>
    </div>
    <h1 className="mx-44 h-px border-none bg-gray-500" />
    <div className={containerStyles}>
      <div>
        <p className="text-gray-500">1088, North Street, Alexandria, AU</p>
      </div>
      <div>
        <p className="text-gray-500">© 2022, All Rights Reserved</p>
      </div>
    </div>
  </footer>
</div>
)

}

export default  Footer