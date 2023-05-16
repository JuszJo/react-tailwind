import buy from '../assets/molekule-buy-now_2000x.png';
import trial from '../assets/molekule-30-day_2000x.png';
import refill from '../assets/molekule-refill-icon_2000x.png';

export default function Body() {
    return (
        <>            
            <section>
                <section className="container m-auto">
                    <div className="flex justify-between items-center w-[95%] mx-auto" >
                        <div className='text-center basis-10 inline'>
                            <div className='flex justify-center items-center'>
                                <div className='w-14'>
                                    <img className='' src={buy} alt="" />
                                </div>
                                <div>
                                    <p className='text-sm max-w-[5rem]'>Buy now, pay later financing</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center basis-10 inline'>
                            <div className='flex justify-center items-center'>
                                <div className='w-14'>
                                    <img className='' src={trial} alt="" />
                                </div>
                                <div>
                                    <p className='text-sm max-w-[5rem]'>30-day trial</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center basis-10 inline'>
                            <div className='flex justify-center items-center'>
                                <div className='w-14'>
                                    <img className='' src={refill} alt="" />
                                </div>
                                <div>
                                    <p className='text-sm max-w-[5rem]'>Filter auto-refills</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        
        </>
    )
}