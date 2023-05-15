import menu_open from '../assets/menu._open.svg';
import logo from '../assets/Molekule_Logo_DarkGray1200_200x.png';
import search from '../assets/search.svg';
import bag from '../assets/bag.svg'

export default function Navbar() {
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