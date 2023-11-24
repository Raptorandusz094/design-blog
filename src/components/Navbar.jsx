import React,{useState} from 'react'
import vector from '../assests/vector.jpg'


export function Navbar() {
  let defaultBoxStyle = ' w-auto h-auto  mx-[100px]'
  let navStyle = "ml-[25px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#49505780] text-[12px] hover:text-black"
 
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (<nav className='mt-[10px]  w-auto h-auto  mx-[100px] flex justify-between items-center
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
      
      <button className=" open ml-[20px] mt-1    " onClick={()=>setIsOpen((prev)=>!prev)}  >
        <img src={vector} alt="search-button" />
      </button>

    </ul> 
  </nav>)

}

export default Navbar