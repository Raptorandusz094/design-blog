import React from 'react'


import Navbar from './components/Navbar'
import ArticlePicture from './components/ArticlePicture'
import ArticleList from './components/ArticleList'
import { ArticleGallery } from './components/ArticleGallery'
import Footer from './components/Footer'



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


  return (

    <div className='flex flex-col bg-gray-100 '>
      <Navbar></Navbar>
      <ArticlePicture></ArticlePicture>
      <ArticleList></ArticleList>
      <ArticleGallery></ArticleGallery>
      <Footer></Footer>

      






    </div>)
}