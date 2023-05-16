import Navbar from "./Navbar"
import Hero from "./Hero"
import Body from "./Body"
import Products from "./Products"

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Body />
                <Products />
            </main>
        </>   
    )
}