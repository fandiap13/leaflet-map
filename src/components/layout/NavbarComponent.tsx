import React from 'react'
import LogoImageComponent from '../LogoImageComponent'
import HamburgerMenu from './HamburgerMenu'

const NavbarComponent = () => {
    return (
        <div className='h-[80px] max-h-[80px] w-full flex items-center justify-between px-10 border-b'>
            <div className='w-[160px] h-full object-cover'><LogoImageComponent /></div>

            {/* <HamburgerMenu /> */}
        </div>
    )
}

export default NavbarComponent