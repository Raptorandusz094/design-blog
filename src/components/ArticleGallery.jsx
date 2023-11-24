import React from 'react'
import gallery from '../assests/gallery.png'
import gal2 from '../assests/gal2.png'
import gal3 from '../assests/gal3.png'
import gal4 from '../assests/gal4.png'
import gal5 from '../assests/gal5.png'

export function ArticleGallery() {

   

    return (
        <div className="  mt-[45px]  w-auto h  mx-[100px] grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-sm  shadow-lg md:col-span-2 md:h-80">
                <img src={gallery} loading="lazy" alt="GalleryPicture"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Richard Norton photorealistic rendering as <br /> real photos</span>
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-sm  shadow-lg md:h-80">
                <img src={gal2} loading="lazy" alt="GalleryPicture"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Richard Norton photorealistic <br /> rendering as real photos</span>
            </a>

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
            
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-sm  shadow-lg md:h-80">
                <img src={gal5} loading="lazy" alt="GalleryPicture"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Richard Norton photorealistic <br /> rendering as real photos</span>
            </a>
        </div>)

}

export default ArticleGallery