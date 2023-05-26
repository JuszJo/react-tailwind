import menu_open from '../assets/menu._open.svg';
import logo from '../assets/Molekule_Logo_DarkGray1200_200x.png';
import search from '../assets/search.svg';
import bag from '../assets/bag.svg'
import useView from '../hooks/useView';

function Mobile() {
    return (
        <>
            <header>
                <nav className='mx-4'>
                    <div className="flex justify-between items-center">
                        <div>
                            <img className='w-6' src={menu_open} alt="" />
                        </div>
                        <div>
                            <img className='w-24' src={logo} alt="" />
                        </div>
                        <div>
                            <div>
                                <img className='inline w-6 mr-2' src={search} alt="" />
                                <img className='inline w-6' src={bag} alt="" />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

function Desktop() {
    return (
        <>
            <header className='sticky top-0 bg-white z-10'>
                <nav className='mx-16 text-[1.05rem]'>
                    <div className="flex justify-between items-center">
                        <div className='basis-full'>
                            <ul className='flex items-center gap-12'>
                                <li>Shop</li>
                                <li>Technology</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                        <div className='basis-full'>
                            <img className='w-[9.5rem] m-auto' src={logo} alt="" />
                        </div>
                        <div className='basis-full'>
                            <div className=''>
                                <ul className='flex items-center justify-end gap-12'>
                                    <li>Blog</li>
                                    <li>Business</li>
                                    <li>Account</li>
                                    <div className='justify-items-end'>
                                        <img className='inline w-6 m-auto' src={bag} alt="" />
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default function Navbar() {
    const isMobile = useView();

    return (
        <>
            {isMobile ? <Mobile /> : <Desktop />}
        </>
    )
}