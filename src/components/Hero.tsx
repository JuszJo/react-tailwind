// import backgroundImage from '../assets/Auto_Protect_Quiet_-_Source_1_1000x.jpg';

export default function Hero() {
    return (
        <>
            <section>
                <div>
                    <div className="bg-[url('/public/Auto_Protect_Quiet_-_Source_1_1000x.jpg')] bg-cover bg-no-repeat bg-center ">
                        <div className="px-10 py-10">
                            <div>
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