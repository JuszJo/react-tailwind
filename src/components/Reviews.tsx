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
                        {/* <a>4 days ago</a> */}
                        <h2 className="text-lg font-semibold mb-1">{review.heading}</h2>
                        <p className="text-xl mb-1"><i>"{review.paragraph}"</i></p>
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
    return (
        <>
            <section>
                <div>
                    <div className=''>
                        {<ReviewCard review={reviews[0]} />}
                        {/* {reviews.map(review => <ReviewCard review={review} />)} */}
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