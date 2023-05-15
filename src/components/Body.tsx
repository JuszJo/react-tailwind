import buy from '../assets/molekule-buy-now_2000x.png';
import trial from '../assets/molekule-30-day_2000x.png';
import refill from '../assets/molekule-refill-icon_2000x.png';

export default function Body() {
    return (
        <>
            <main>
                <section>
                    <section className="container">
                        <div className="flex justify-between">
                            <div className='text-center inline'>
                                <img className='w-10' src={buy} alt="" />
                                <p className='text-sm'>Buy now, pay later financing</p>
                            </div>
                            <div className='text-center inline'>
                                <img className='w-10' src={trial} alt="" />
                                <p className='text-sm'>30-day trial</p>
                            </div>
                            <div className='text-center inline'>
                                <img className='w-10' src={refill} alt="" />
                                <p className='text-sm'>Filter auto-refills</p>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}