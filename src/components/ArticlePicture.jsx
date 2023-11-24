import React from 'react'
import unplash from '../assests/unplash.png'

export function ArticlePicture() {
  let defaultBoxStyle = ' w-auto h-auto  mx-[100px]'

   

  let navStyle = "ml-[25px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#49505780] text-[12px] hover:text-black"

  let primaryStyle = "[font-family:'Poppins-Medium',Helvetica]"

  let dateFormar = "mb-[15px] text-[12px ] ext-right text-zinc-600 text-xs font-light font-['Poppins'] leading-tight "
  let cardTextFormat = "text-neutral-800 text-base font-medium font-['Poppins'] leading-[25px]"
  let cardImageFormat = 'w-full mb-[30px] rounded-sm'
  let primary = "text-2xl font-bold [font-family:'Poppins-Medium',Helvetica] "
  let containerStyles = 'flex justify-between w-full mt-[50px]';
  let linkStyles = 'text-gray-500 px-3';
 
  return (
    <article className=' w-auto h-auto  mx-[100px] mt-[40px] relative inline-block bg-black'>
      <div className=' text-center'>

        <h6 class=" absolute mb-[200px] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    [font-family:'Poppins-Light',Helvetica] font-light text-neutral-200 text-[12px] text-center tracking-[0] leading-[20px] whitespace-nowrap">Tomas Edwardo</h6></div>
      <div className='text-cener'>
        <h1 class=" absolute items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
     [font-family:'Poppins-Bold',Helvetica] font-bold text-[#f8f9fa] text-[25px] 
     text-center tracking-[0] leading-[40px]">
          Instagram artists with great
          <br />photography skills</h1>
      </div>

      <img className=' w-full block rounded ' src={unplash} alt="unplash picture" />
    </article>
)

}

export default  ArticlePicture