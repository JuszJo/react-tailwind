import Navbar from "./Navbar"
import Hero from "./Hero"
import Body from "./Body"
import Products from "./Products"
import Research from "./Research"
import Impact from "./Impact"
import Reviews from "./Reviews"

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="font-[Plantin]">
                <Hero />
                <Body />
                <Products />
                <Research />
                <Impact />
                <Reviews />
            </main>
        </>   
    )
}