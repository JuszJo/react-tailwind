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
                            <div key={concernObject.name}>
                                <img src={concernObject.image} alt="" />
                                <h2>{concernObject.name}</h2>
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
                    <div>
                        <h2>Learn more about how Molekule impacts common indoor air concerns.</h2>
                    </div>
                    <div>
                        <Concerns />
                    </div>
                </div>
            </section>
        </>
    )
}