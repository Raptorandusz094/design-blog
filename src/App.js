import React from 'react'

import vector from '../src/assests/vector.jpg'
import unplash from '../src/assests/unplash.png'
import kitchen from '../src/assests/kitchen.png'
import poor from '../src/assests/poor.png'
import bigplace from '../src/assests/big-place.png'
import american from '../src/assests/american.png'
import bathroom from '../src/assests/bathroom.png'
import childroom from '../src/assests/childroom.png'
import livingcorner from '../src/assests/living-corner.png'
import livingside from '../src/assests/living-side.png'
import chillCorner from '../src/assests/chill-corner.png'
import gal1 from '../src/assests/gal1.png'
import gal2 from '../src/assests/gal2.png'
import gal3 from '../src/assests/gal3.png'
import gal4 from '../src/assests/gal4.png'
import gal5 from '../src/assests/gal5.png'



export function App() {
  let defaultBoxStyle = ' w-auto h-auto  mx-[100px]'

   

  let navStyle = "ml-[25px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#49505780] text-[12px] hover:text-black"

  let primaryStyle = "[font-family:'Poppins-Medium',Helvetica]"

  let dateFormar = "mb-[15px] text-[12px ] ext-right text-zinc-600 text-xs font-light font-['Poppins'] leading-tight "
  let cardTextFormat = "text-neutral-800 text-base font-medium font-['Poppins'] leading-[25px]"
  let cardImageFormat = 'w-full mb-[30px] rounded-sm'
  let primary = "text-2xl font-bold [font-family:'Poppins-Medium',Helvetica] "
  let containerStyles = 'flex justify-between w-full mt-[50px]';
  let linkStyles = 'text-gray-500 px-3';


  return (<div>







    <div className='flex flex-col bg-gray-100 '>

                
                        {/* navbar */}
                
      <nav className='mt-[10px]  w-auto h-auto  mx-[100px] flex justify-between items-center
  '>
        <h3 className=" md:font-poppins font-bold text-[#495057] text-[18px] tracking-[0] leading-[25px] "> Vence</h3>

        <ul className="  sm:hidden md:flex  font-medium text-[#49505780] text-[12px] tracking-[0] leading-[25px] ">
          <li className={navStyle}> Example</li>
          <li className={navStyle}> Inspiration</li>
          <li className={navStyle}> Tutorials</li>
          <li className={navStyle}> Courses</li>
        </ul>

        <ul className=" sm:hidden md:flex">
          <li href="" className={navStyle}>
            Fb
          </li>
          <li href="" className={navStyle}>
            Tw
          </li>
          <li href="" className={navStyle}>
            Ln
          </li>
          <li className={navStyle}>
            |
          </li>
          <button className=" ml-[20px] mt-1    "  >
            <img src={vector} alt="search-button" />
          </button>

        </ul>
      </nav>

                                               

                                                    {/* Main component beggining */}



                                             {/* article-pucture component  */}


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









                              {/* article-list component */}






      <section className="  mt-[100px]  w-auto h  mx-[100px] flex justify-between items-center">
        <h2 className={primary}>
          Design is not just what it looks
          <br /> like and feels like.
        </h2>
        <ul className="flex">
          <li className={navStyle}>
            All
          </li>
          <li className={navStyle}>
            Modern
          </li>
          <li className={navStyle}>
            Intustrial
          </li>
          <li className={navStyle}>
            Art-Moderne
          </li>
          <li className={navStyle}>
            Contemporary
          </li>
          <li className={navStyle}>
            Industrial
          </li>
          <li className={navStyle}>
            Minimalist
          </li>
        </ul>
      </section>



      <section className=" mt-[45px]  mx-[100px] grid grid-cols-1 md:gap-0 md:grid-cols-3 gap-12  ">


        <article className="  md: mb-[30px] mr-[30px]">

          <img src={kitchen} alt="design picture" className={cardImageFormat} />

          <h6 className={dateFormar}>29.Jun.2021</h6>

          <h2 className={cardTextFormat}>Richard Norton photorealistic rendering as real
            <br></br>
            photos</h2>

        </article>

        <article className="  md: mb-[30px] mr-[30px]">

          <img src={american} alt="design picture" className={cardImageFormat} />

          <h6 className={dateFormar}>29.Jun.2021</h6>

          <h2 className={cardTextFormat}>Richard Norton photorealistic rendering as real
            <br></br>
            photos</h2>

        </article>
        <article className="  md: mb-[30px] mr-[30px]">

          <img src={livingside} alt="design picture" className={cardImageFormat} />

          <h6 className={dateFormar}>29.Jun.2021</h6>

          <h2 className={cardTextFormat}>Richard Norton photorealistic rendering as real
            <br></br>
            photos</h2>

        </article>
        <article className="  md: mb-[30px] mr-[30px]">

          <img src={livingcorner} alt="design picture" className={cardImageFormat} />

          <h6 className={dateFormar}>29.Jun.2021</h6>

          <h2 className={cardTextFormat}>Richard Norton photorealistic rendering as real
            <br></br>
            photos</h2>

        </article>

        <article className="  md: mb-[30px] mr-[30px]">

          <img src={chillCorner} alt="design picture" className={cardImageFormat} />

          <h6 className={dateFormar}>29.Jun.2021</h6>

          <h2 className={cardTextFormat}>Richard Norton photorealistic rendering as real
            <br></br>
            photos</h2>

        </article>
        <article className="  md: mb-[30px] mr-[30px]">

          <img src={bigplace} alt="design picture" className={cardImageFormat} />

          <h6 className={dateFormar}>29.Jun.2021</h6>

          <h2 className={cardTextFormat}>Richard Norton photorealistic rendering as real
            <br></br>
            photos</h2>

        </article>

        <article className="  md: mb-[30px] mr-[30px]">

          <img src={bathroom} alt="design picture" className={cardImageFormat} />

          <h6 className={dateFormar}>29.Jun.2021</h6>

          <h2 className={cardTextFormat}>Richard Norton photorealistic rendering as real
            <br></br>
            photos</h2>

        </article>
        <article className="  md: mb-[30px] mr-[30px]">

          <img src={childroom} alt="design picture" className={cardImageFormat} />

          <h6 className={dateFormar}>29.Jun.2021</h6>

          <h2 className={cardTextFormat}>Richard Norton photorealistic rendering as real
            <br></br>
            photos</h2>

        </article>
        <article className="  md: mb-[30px] mr-[30px]">

          <img src={poor} alt="design picture" className={cardImageFormat} />

          <h6 className={dateFormar}>29.Jun.2021</h6>

          <h2 className={cardTextFormat}>Richard Norton photorealistic rendering as real
            <br></br>
            photos</h2>

        </article>




      </section>


      <div className='mt-[100px] w-auto mx-[100px] ' >

        <h2 className={primary}>
          Trending
        </h2>


      </div>


                                                 {/* Article-Galelrr component */}

      <div className="  mt-[45px]  w-auto h  mx-[100px] grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        {/* image - start */}

        {/* image - end */}

        {/* image - start */}
        <a href="#"
          className="group relative flex h-48 items-end overflow-hidden rounded-sm  shadow-lg md:col-span-2 md:h-80">
          <img src={gal1} loading="lazy" alt="GalleryPicture"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Richard Norton photorealistic rendering as <br /> real photos</span>
        </a>
        {/* image - end */}

        {/* image - start */}
        <a href="#"
          className="group relative flex h-48 items-end overflow-hidden rounded-sm  shadow-lg md:h-80">
          <img src={gal2} loading="lazy" alt="GalleryPicture"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Richard Norton photorealistic <br /> rendering as real photos</span>
        </a>
        {/* image - end */}
        <a href="#"
          className="group relative flex h-48 items-end overflow-hidden rounded-sm  shadow-lg md:h-80">
          <img src={gal3} loading="lazy" alt="GalleryPicture"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Richard Norton photorealistic <br /> rendering as real photos</span>
        </a>
        <a href="#"
          className="group relative flex h-48 items-end overflow-hidden rounded-sm  shadow-lg md:h-80">
          <img src={gal4} loading="lazy" alt="GalleryPicture"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Richard Norton photorealistic <br /> rendering as real photos</span>
        </a>
        {/* image - end */}

        {/* image - start */}
        <a href="#"
          className="group relative flex h-48 items-end overflow-hidden rounded-sm  shadow-lg md:h-80">
          <img src={gal5} loading="lazy" alt="GalleryPicture"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Richard Norton photorealistic <br /> rendering as real photos</span>
        </a>
      </div>


     {/* end of the main component */}

          {/* Footer component */}


      <div className='mt-[100px] w-full h-auto '>
        <footer className='grid grid-row-3 gap-5 w-full  h-80 bg-gray-800'>
          <div className={containerStyles}>
            <div>
              <h1 className="font-bold text-2xl text-white">VENCE Studio<span className="text-[#DDBEA9]">.</span></h1>
            </div>
            <ul>
              <li href="" className={linkStyles}>About Studio</li>
              <li href="" className={linkStyles}>Archive</li>
              <li href="" className={linkStyles}>Contact Us</li>
            </ul>
            <ul>
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








    </div>


  </div>)
}