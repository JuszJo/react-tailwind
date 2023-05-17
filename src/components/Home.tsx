import Navbar from "./Navbar"
import Hero from "./Hero"
import Body from "./Body"
import Products from "./Products"
import Research from "./Research"
import Impact from "./Impact"

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
            </main>
        </>   
    )
}