import React, { useState } from 'react'
import styleNavBarItems from './styleNavBarItems.module.scss'

export const NavBarItems = ({ navbarData }) => {

    const [resiveData, setResiveData] = useState(false);

    const whichItemClick = (id) => {
        if (id === navbarData.id) {
            setResiveData(prevState => !prevState)
        }
    }

    return (
        <>
            <div onClick={() => whichItemClick(navbarData.id)}>
                {navbarData.mainTitleOfMenu}
            </div>
            <div>
                {
                    resiveData ?
                        <div className={styleNavBarItems.listOfItem}>
                            <ul>
                                <li>{navbarData.subTitleOfMenu_ItemOne}</li>
                                <li>{navbarData.subTitleOfMenu_ItemTwo}</li>
                                <li>{navbarData.subTitleOfMenu_ItemThree}</li>
                                <li>{navbarData.subTitleOfMenu_ItemFour}</li>

                            </ul>
                        </div>
                        : null
                }
            </div>
        </>
    )
}
