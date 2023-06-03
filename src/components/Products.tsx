import product1 from '../assets/AirMiniPlus_Image1_600x.png'
import product2 from '../assets/AirPro_Image1_600x.png'
import useView from '../hooks/useView';
// import ratings from '../assets/ratings.svg'

interface ProductType {
    name: string,
    image: string,
    reviews: string,
    fullPrice: string
    monthlyPrice: string
}

interface PropsType {
    value: ProductType;
}

const products: Array<ProductType> = [
    {
        name: "Air Mini+ with PECO-HEPA Tri-Power filter",
        image: product1,
        reviews: "351 Reviews",
        fullPrice: "$359.99",
        monthlyPrice: "$32.49/month"
    },
    {
        name: "Air Pro with PECO-HEPA Tri-Power filter",
        image: product2,
        reviews: "129 Reviews",
        fullPrice: "$1,014.99",
        monthlyPrice: "$91.61/month"
    },
]

function Product({value}: PropsType) {

    return (
        <>
            <div className='text-center pt-5'>
                <div>
                    <img src={value.image} alt="" />
                </div>
                <div>
                    <div>
                        <h2 className='text-xl font-medium'>{value.name}</h2>
                    </div>
                    <div className=''>
                        <div className='flex justify-center'>
                            {/* <img src={ratings} alt="" /> */}
                            <p>{value.reviews}</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='flex justify-center'>
                            <div>
                                <p className='text-lg'>{value.fullPrice}</p>
                            </div>
                            <div>

                            </div>
                            <div>
                                <p className='border-l border-solid border-black pl-4 ml-4 text-lg'>{value.monthlyPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <button className='bg-stone-700 text-slate-50 px-8 py-1 rounded-[1rem] text-lg'>Shop now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Products() {
    const isMobile = useView();

    return (
        <>
            <section>
                <div className={`max-w-[95%] mx-auto py-12 ${!isMobile ? 'max-w-[1300px]' : ''}`}>
                    <section>
                        <div className={`flex flex-col min-[500px]:flex-row ${!isMobile ? 'justify-between' : ''}`}>
                            {products.map(product => <Product key={product.name} value={product} />)}
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}