import { useEffect, useRef, useState } from 'react'

import image1 from '../assets/Floating-Dust-Mobile_1000x.jpg'
import image2 from '../assets/Group_32_3_400x.jpg'
import image3 from '../assets/Group_32_1_400x.jpg'
import image4 from '../assets/Group_32_400x.jpg'

interface SliderText {
    heading: string,
    paragraph: string,
}

interface PropsType {
    value: SliderText
}

const text = [
    {
        heading: "Keep an eye on your air.",
        paragraph: "Connect your purifier to the Molekule app to control your fan speeds, turn on Auto Protect, see your air quality in real time, or track individual pollutant types throughout the previous four weeks.",
    },
    {
        heading: "Beautiful and elegant design.",
        paragraph: "Designed not only for powerful protection, but with gorgeous aesthetics in mind to be a functional objet d’art in your living space.",
    },
    {
        heading: "How Molekule is different.",
        paragraph: "At the heart of every Molekule air purifier is a PECO-HEPA Tri-Power filter that combines the power of HEPA’s 99.97% small particle capture efficiency with PECO technology that breaks down pollutants at a molecular level.",
    },
]

function SliderText({value}: PropsType) {

    return (
        <>
            <section>
                <div className={`flex flex-col justify-center px-12 animate-[fade-in_1s_ease-in-out_normal]`}>
                    <div>
                        <h2 className='text-[2rem]'>{value.heading}</h2>
                    </div>
                    <div className='pt-2'>
                        <p className='font-sans text-xl'>{value.paragraph}</p>
                    </div>
                    <div className='pt-8'>
                        <button className='bg-stone-700 text-slate-50 px-8 py-1 rounded-[1rem] text-lg'>Shop all products</button>
                    </div>
                </div>
            </section>
        </>
    )
}

function Slider() {
    const [active, setActive] = useState(1);

    let sliderImage1 = useRef<HTMLImageElement>(null);
    let sliderImage2 = useRef<HTMLImageElement>(null);
    let sliderImage3 = useRef<HTMLImageElement>(null);

    let timeoutID = 0;

    const imageArray = [
        sliderImage1,
        sliderImage2,
        sliderImage3
    ]

    const scrollOptions: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "nearest",
        inline: "center",
    }

    function changeImage(imageNumber: number) {
        imageArray[imageNumber - 1].current?.scrollIntoView(scrollOptions);

        setActive(imageNumber);
    }

    /* function autoSwitch() {
        timeoutID = setInterval(() => {
            if(active < 3) changeImage(active + 1);
            else changeImage(1);
        }, 10000)
    } */

    useEffect(() => {
        // autoSwitch();

        return () => clearTimeout(timeoutID);
    })

    return (
        <>
            <section>
                <div className='h-[100%] w-full overflow-hidden whitespace-nowrap'>
                    <img ref={sliderImage1} className='inline w-full h-full object-cover' src={image2} alt="" />
                    <img ref={sliderImage2} className='inline w-full h-full' src={image3} alt="" />
                    <img ref={sliderImage3} className='inline w-full h-full' src={image4} alt="" />
                </div>
                <div className='flex justify-center gap-4 py-14'>
                    <span onClick={() => changeImage(1)} className={`cursor-pointer w-3 h-3 inline-block rounded-full bg-stone-300 ${active == 1 && "bg-stone-900"}`}></span>
                    <span onClick={() => changeImage(2)} className={`cursor-pointer w-3 h-3 inline-block rounded-full bg-stone-300 ${active == 2 && "bg-stone-900"}`}></span>
                    <span onClick={() => changeImage(3)} className={`cursor-pointer w-3 h-3 inline-block rounded-full bg-stone-300 ${active == 3 && "bg-stone-900"}`}></span>
                </div>
                <SliderText key={text[active - 1].heading} value={text[active - 1]} />            
            </section>
        </>
    )
}

export default function Research() {
    return (
        <>
            <section>
                <div className='bg-stone-100 pb-24'>
                    <div>
                        <div className='relative'>
                            <div>
                                <img src={image1} alt="" />
                            </div>
                            <div className='absolute top-1/2 translate-y-[-50%] text-center text-slate-50 px-6 min-[500px]:px-24'>
                                <div>
                                    <h2 className='text-[2rem] min-[500px]:text-5xl'>Get scientifically better indoor air.</h2>
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
                    <div>
                        <Slider />

                    </div>
                </div>
            </section>
        </>
    )
}