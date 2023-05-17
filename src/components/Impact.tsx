import image1 from '../assets/Group_36_800x.jpg'
import image2 from '../assets/Group_36_1_800x.jpg'
import image3 from '../assets/Group_36_2_800x.jpg'
import image4 from '../assets/Group_36_4_800x.jpg'

const concerns = [
    {
        name: "Allergies",
        image: image1
    },
    {
        name: "Wildfire Smoke",
        image: image2
    },
    {
        name: "Mold",
        image: image3
    },
    {
        name: "Viruses",
        image: image4
    },
]

function Concerns() {
    return (
        <>
            <section>
                <div>
                    {concerns.map(concernObject => {
                        return (
                            <div key={concernObject.name} className='relative'>
                                <img src={concernObject.image} alt="" />
                                <div className='absolute top-[30%] left-1/2 w-max text-center translate-x-[-50%]'>
                                    <div>
                                        <h2 className='text-3xl text-slate-50'>{concernObject.name}</h2>
                                    </div>
                                    <div className='mt-4'>
                                        <button className="px-8 py-2 text-sm text-stone-900 font-sans bg-white rounded-3xl">Learn more</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default function Impact() {
    return (
        <>
            <section>
                <div>
                    <div className='py-10 px-14'>
                        <h2 className='text-3xl text-center'>Learn more about how Molekule impacts common indoor air concerns.</h2>
                    </div>
                    <div>
                        <Concerns />
                    </div>
                </div>
            </section>
        </>
    )
}