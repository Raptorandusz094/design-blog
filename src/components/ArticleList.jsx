
import kitchen from '../assests/kitchen.png'
import poor from '../assests/poor.png'
import bigplace from '../assests/big-place.png'
import american from '../assests/american.png'
import bathroom from '../assests/bathroom.png'
import childroom from '../assests/childroom.png'
import livingcorner from '../assests/living-corner.png'
import livingside from '../assests/living-side.png'
import chillCorner from '../assests/chill-corner.png'



export function ArticleList() {
  

    let navStyle = "ml-[25px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#49505780] text-[12px] hover:text-black"
    let dateFormar = "mb-[15px] text-[12px ] ext-right text-zinc-600 text-xs font-light font-['Poppins'] leading-tight "
    let cardTextFormat = "text-neutral-800 text-base font-medium font-['Poppins'] leading-[25px]"
    let cardImageFormat = 'w-full mb-[30px] rounded-sm'
    let primary = "text-2xl font-bold [font-family:'Poppins-Medium',Helvetica] "


    return (<section>
        <section className="  md:mt-[100px]  w-auto h  mx-[100px] flex justify-between items-center">
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




        </section> </section>)

}

export default ArticleList