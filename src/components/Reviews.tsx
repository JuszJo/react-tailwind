import { useState } from "react"
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
            <div className="flex flex-col">
                <div className="py-4 px-10">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">{review.heading}</h2>
                        <p className="text-xl mb-2"><i>"{review.paragraph}"</i></p>
                        <p className="font-medium">{review.name}</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

function ReviewsSlider() {
    const [currentReview, setCurrentReview] = useState(0)

    function changeReview(number: number) {
        setCurrentReview(number)
    }

    return (
        <>
            <section>
                <div className="py-4 px-10">
                    <div className=''>
                        {<ReviewCard review={reviews[currentReview]} />}
                        {/* {reviews.map(review => <ReviewCard review={review} />)} */}
                    </div>
                    <div className="flex gap-2 justify-center mt-4">
                        <span onClick={() => changeReview(0)} className={`cursor-pointer w-3 h-3 inline-block rounded-full bg-stone-300 ${currentReview == 0 && "bg-stone-900"}`}></span>
                        <span onClick={() => changeReview(1)} className={`cursor-pointer w-3 h-3 inline-block rounded-full bg-stone-300 ${currentReview == 1 && "bg-stone-900"}`}></span>
                        <span onClick={() => changeReview(2)} className={`cursor-pointer w-3 h-3 inline-block rounded-full bg-stone-300 ${currentReview == 2 && "bg-stone-900"}`}></span>
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
                <div className="font-sans">
                    <div className='py-10 px-14 bg-stone-100 mt-[-1.3rem]'>
                        <h2 className='text-3xl text-center'>Science-backed air purifiers that customers trust.</h2>
                    </div>
                    <ReviewsSlider />
                </div>
            </section>
        </>
    )
}