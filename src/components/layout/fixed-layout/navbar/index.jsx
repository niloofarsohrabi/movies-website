import React from 'react'
import { NavBarItems } from '../navbar-items'
import menuItem from './utils/menu-item'
import styleNavBar from './styleNavBar.module.scss'
export const NavBar = () => {
    return (
        <>
            {
                menuItem.map((item, index) => {
                    return (
                        <div key ={item.id} className={styleNavBar.mainMenuList}>
                            <NavBarItems navbarData={item} />
                        </div>

                    )
                })
            }
        </>
    )
}
