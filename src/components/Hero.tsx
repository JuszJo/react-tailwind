import { useEffect, useState } from 'react';
import heroImageDesktop from '../assets/1972_MemorialDayPromo_HomePageHero_Desktop_1200x.jpg';
import heroImageMobile from '../assets/1972_MemorialDayPromo_HomePageHero_Mobile_1000x.jpg';

export default function Hero() {
    const [isMobile, setIsMobile] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function resizeHandler() {
        setWindowWidth(window.innerWidth);
    }

    function checkWidth() {
        if(windowWidth <= 768) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }
    }
    
    useEffect(() => {
        checkWidth();

        addEventListener('resize', resizeHandler);

        return () => removeEventListener('resize', resizeHandler);

    }, [windowWidth])

    return (
        <>
            <section>
                <div>
                    <div className="relative">
                        <img className='w-full h-full' src={isMobile ? heroImageMobile : heroImageDesktop} />
                        <div className="absolute top-[2rem] ml-6">
                            <div className="max-w-xs">
                                <h1 className="text-5xl text-slate-50 font-[Plantin]">Get <em>cleaner</em> air for a <em>healthier</em> home.</h1>
                            </div>
                            <div className="mt-3">
                                <p className="text-lg text-slate-50 font-normal">The only PECO-HEPA-powered air purifier</p>
                            </div>
                            <div className="mt-8">
                                <button className="px-8 py-1 bg-white rounded-3xl">Explore air purifiers</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}