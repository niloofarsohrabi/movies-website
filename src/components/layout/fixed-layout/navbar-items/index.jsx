import React, { useState } from 'react'
import styleNavBarItems from './styleNavBarItems.module.scss'

export const NavBarItems = ({ navbarData }) => {

    const [resiveData, setResiveData] = useState(false);

    const whichItemClick = (id) => {
        if (id === navbarData.id) {
            setResiveData(prevState => !prevState);
        }
    }
   // const handleMouseLeave = () => {
       // setResiveData(false);
    //}
    return (
        <>
            <div  onMouseEnter={() => whichItemClick(navbarData.id)}
                   onMouseLeave={() =>  whichItemClick(navbarData.id) }>
                {navbarData.mainTitleOfMenu}
            </div>
            <div>
                {resiveData ?
                        <div className={styleNavBarItems.listOfItem}
                            onMouseEnter={() => whichItemClick(navbarData.id)}
                            onMouseLeave={() => whichItemClick(navbarData.id)}>
                            {navbarData.subTitleOfMenu.map((item) => {
                                return (
                                    <ul key={item.id}>
                                        <li>{item}</li>
                                    </ul>
                                )
                            })}
                        </div>
                        : null
                }
            </div>
        </>
    )
}
