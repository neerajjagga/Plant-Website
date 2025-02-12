import leafImageOne from '../assets/img/leaf-1.png';
import leafImageTwo from '../assets/img/leaf-2.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

const Header = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const toggleHamburgerMenu = () => {
        setIsHamburgerActive(!isHamburgerActive);
    };

    return (
        <div className='backdrop-blur-md fixed w-full top-0 left-0 z-50'>
            <nav className='flex items-center justify-between h-16 sm:h-20 container'>
                <div className='font-Lobster sm:text-2xl text-lg'>IndorePlants.</div>

                <div
                    className={`absolute top-0 ${isHamburgerActive ? 'left-0' : '-left-[100%]'
                        } transition-all duration-300 min-h-[100vh] w-full bg-green-950/85 backdrop-blur-sm flex justify-center items-center overflow-hidden lg:static lg:min-h-fit lg:w-auto lg:bg-transparent`}
                >
                    <ul className='flex flex-col items-center gap-8  lg:flex-row'>
                        <li
                            onClick={toggleHamburgerMenu}
                            className='nav-primary nav-hover'>
                            <a href="#">Home</a>
                        </li>
                        <li
                            onClick={toggleHamburgerMenu}
                            className='nav-primary nav-hover'>
                            <a href="#">About</a>
                        </li>
                        <li
                            onClick={toggleHamburgerMenu}
                            className='nav-primary nav-hover'>
                            <a href="#">Popular</a>
                        </li>
                        <li
                            onClick={toggleHamburgerMenu}
                            className='nav-primary nav-hover'>
                            <a href="#">Review</a>
                        </li>
                    </ul>

                    <div className='absolute -bottom-5 -right-10 opacity-90 lg:hidden'>
                        <img
                            className='w-36'
                            src={leafImageOne}
                            alt="Decorative leaf image one"
                        />
                    </div>

                    <div className='absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden'>
                        <img className='w-36' src={leafImageTwo} alt="Decorative leaf image two" />
                    </div>
                </div>

                <div className='z-50 lg:hidden'>
                    {isHamburgerActive ? (
                        <X
                            className='cursor-pointer'
                            onClick={toggleHamburgerMenu}
                        />
                    ) : (
                        <Menu
                            className='cursor-pointer'
                            onClick={toggleHamburgerMenu}
                        />
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
