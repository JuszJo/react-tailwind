import { SliderText } from "./Research"

interface Buyer extends SliderText {
    name: string
}

const reviews: Array<Buyer> = [
    {
        heading: "Works great.",
        paragraph: "The air in my house seems fresh and clean. Thank you. Great warranty service.",
        name: "Bette A."
    },
    {
        heading: "EXCELLENT SERVICE",
        paragraph: "WONDERFUL",
        name: "Paul P."
    },
    {
        heading: "Air Mini Replacement!",
        paragraph: "I love it… easy to replace and get going again!!",
        name: "Cynthia M."
    },
]

interface PropsType {
    review: Buyer
}

function ReviewCard({review}: PropsType) {
    return (
        <>
            <h2>{review.name}</h2>
        </>
    )
}

function ReviewsSlider() {
    return (
        <>
            <section>
                <div>
                    <h1>Slider</h1>
                    <div className=''>
                        {reviews.map(review => <ReviewCard review={review} />)}
                    </div>
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