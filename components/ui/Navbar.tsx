import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='bg-white text-black'>
        <div className="container">
            <div className="flex flex-row">
                <div className="">
                    <div className="header-logo">
                        <a href="/">
                            <Image 
                            src={'/next.svg'}
                            alt='logo-image'
                            width={160}
                            height={36}
                            />
                        </a>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="main-navigation">
                        <button className='menu-toggle'>
                            <span>
                                <span>
                                </span>
                            </span>
                        </button>
                        <nav className='main-nav'>
                            <ul className='menu header-nav'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Menu</li>
                                <li>Gallery</li>
                                <li>Contact</li>
                            </ul>  
                        </nav>
                        <div className="header-right">
                        <a href="javascript:void(0)" className="header-btn header-cart">
                                <span className="cart-number">3</span>
                            </a>
                            <a href="javascript:void(0)" className="header-btn">
                               
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar;