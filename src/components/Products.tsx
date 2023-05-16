import product1 from '../assets/AirMiniPlus_Image1_600x.png'
import product2 from '../assets/AirPro_Image1_600x.png'
// import ratings from '../assets/ratings.svg'

function Product() {
    return (
        <>
            <div>
                <div>
                    <img src={product1} alt="" />
                </div>
                <div>
                    <div>
                        <h2>Air Mini+ with PECO-HEPA Tri-Power filter</h2>
                    </div>
                    <div>
                        <div className='flex'>
                            {/* <img src={ratings} alt="" /> */}
                            <p>351 Reviews</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex'>
                            <div>
                                <p>$359.99</p>
                            </div>
                            <div>
                                <p>$32.49/month</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-stone-700 text-slate-50 px-8 py-1'>Shop now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Products() {
    return (
        <>
            <section>
                <div className="container">
                    <section>
                        <div className="flex flex-col">
                            <Product />
                            <Product />
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}