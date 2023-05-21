import { SliderText } from "./Research"

interface Buyer extends SliderText {
    name: string
}

const reviews: Array<Buyer> = [
    {
        heading: "",
        paragraph: "",
        name: ""
    },
    {
        heading: "",
        paragraph: "",
        name: ""
    },
    {
        heading: "",
        paragraph: "",
        name: ""
    },
]

function ReviewsSlider() {
    return (
        <>
            <section>
                <div>
                    <h1>Slider</h1>
                </div>
            </section>
        </>
    )
}

export default function Reviews() {
    return (
        <>
            <section>
                <div>
                    <div className='py-10 px-14 bg-stone-100 mt-[-1.3rem]'>
                        <h2 className='text-3xl text-center'>Science-backed air purifiers that customers trust.</h2>
                    </div>
                    <ReviewsSlider />
                </div>
            </section>
        </>
    )
}