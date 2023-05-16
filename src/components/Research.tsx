import { useRef } from 'react'

import image1 from '../assets/Floating-Dust-Mobile_1000x.jpg'
import image2 from '../assets/Group_32_3_400x.jpg'
import image3 from '../assets/Group_32_1_400x.jpg'
import image4 from '../assets/Group_32_400x.jpg'

function Slider() {
    let sliderImage1 = useRef<HTMLImageElement>(null);
    let sliderImage2 = useRef<HTMLImageElement>(null);
    let sliderImage3 = useRef<HTMLImageElement>(null);

    const scrollOptions: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "nearest",
        inline: "center",
    }

    function changeImage1() {
        sliderImage1.current?.scrollIntoView(scrollOptions)
    }
    
    function changeImage2() {
        sliderImage2.current?.scrollIntoView(scrollOptions)
    }

    function changeImage3() {
        sliderImage3.current?.scrollIntoView(scrollOptions)
    }

    return (
        <>
            <div>
                <div className='h-[100%] w-full overflow-hidden whitespace-nowrap'>
                    <img ref={sliderImage1} className='inline w-full h-full object-cover' src={image2} alt="" />
                    <img ref={sliderImage2} className='inline w-full h-full' src={image3} alt="" />
                    <img ref={sliderImage3} className='inline w-full h-full' src={image4} alt="" />
                </div>
                <div>
                    <button onClick={changeImage1}>Image 1</button>
                    <button onClick={changeImage2}>Image 2</button>
                    <button onClick={changeImage3}>Image 3</button>
                </div>
            </div>
        </>
    )
}

export default function Research() {
    return (
        <>
            <section>
                <div>
                    <div className='relative'>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <div className='absolute top-1/2 translate-y-[-50%] text-center text-slate-50 px-6'>
                            <div>
                                <h2 className='text-[2rem]'>Get scientifically better indoor air.</h2>
                            </div>
                            <div className='mt-5'>
                                <p className='text-xl'>With 25 years of R&D, rigorous scientific testing and peer-reviewed publications, 
                                    and FDA clearance for medical use, our patented PECO technology is one-of-a-kind in 
                                    its capability to not only capture, but break down pollutants like bacteria, viruses,
                                     mold, allergens & more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider />
            </section>
        </>
    )
}