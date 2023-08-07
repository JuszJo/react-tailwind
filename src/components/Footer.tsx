import useView from "../hooks/useView"

function Desktop() {
    return (
        <>
            <section className="bg-stone-600 text-white">
                <div className="flex justify-center max-w-xl m-auto py-10">
                    <div>
                        <div>
                            <h2 className="text-[4rem]">Let's stay connected.</h2>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-xl font-sans">Sign up to receive our newsletter and exclusive offers.</p>
                        </div>
                        <div className="mt-8 flex content-center max-w-md m-auto">
                            <div className="basis-[65%] mr-4">
                                <input className="rounded-full outline-none text-black px-4 h-10 w-full" type="text" placeholder="Enter your email" />
                            </div>
                            <div className="basis-[35%]">
                                <button className="rounded-full border border-white h-10 w-full font-sans text-lg">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default function Footer() {
    const isMobile = useView();

    return (
        <>
            {
                isMobile ?     
                <section className="bg-stone-600 text-white">
                    <div className="flex justify-center max-w-xs m-auto py-10">
                        <div>
                            <div>
                                <h2 className="text-3xl">Let's stay connected.</h2>
                            </div>
                            <div className="mt-4">
                                <p className="text-xl font-sans">Sign up to receive our newsletter and exclusive offers.</p>
                            </div>
                            <div className="mt-4">
                                <input className="rounded-full outline-none text-black px-4 h-8 w-full" type="text" placeholder="Enter your email" />
                            </div>
                            <div className="mt-4">
                                <button className="rounded-full border border-white h-8 w-full font-sans text-lg">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <Desktop />
            }
        </>
    )
}