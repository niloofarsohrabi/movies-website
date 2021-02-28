import React, { useState } from 'react'
import styleNavBarItems from './styleNavBarItems.module.scss'

export const NavBarItems = ({ navbarData }) => {

    const [resiveData, setResiveData] = useState(false);

    const whichItemClick = (id) => {
        if (id === navbarData.id) {
            setResiveData(prevState => !prevState);
        }
    }
    const handleMouseLeave = () => {
        setResiveData(false);
    }
    return (
        <>
            <div onMouseEnter={() => whichItemClick(navbarData.id)}
                onMouseLeave={() => handleMouseLeave()}>
                {navbarData.mainTitleOfMenu}
            </div>
            <div>
                {resiveData &&
                    <div className={styleNavBarItems.listOfItem}
                        onMouseEnter={() => whichItemClick(navbarData.id)}
                        onMouseLeave={() => handleMouseLeave()}>
                        {navbarData.subTitleOfMenu.map((item,index) => {
                            return (
                                <div key={index}>
                                    <ul>
                                        <li>{item}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>


                }
            </div>
        </>
    )
}
