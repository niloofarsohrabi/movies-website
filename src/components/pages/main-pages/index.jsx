import React from 'react'
import { Header } from '../../layout/fixed-layout/header'
import { NavBar } from '../../layout/fixed-layout/navbar'
import { NavBarItems } from '../../layout/fixed-layout/navbar-items'

export const MainPage = () => {
    return (
        <div>
            <Header>
                <NavBar />
            </Header>
        </div>
    )
}
