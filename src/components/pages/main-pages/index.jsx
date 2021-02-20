import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../layout/fixed-layout/header'
import { NavBar } from '../../layout/fixed-layout/navbar'
import styleMainPage from './styleMainPage.module.scss'

export const MainPage = () => {
    const stateOnClickSerach = useSelector(state => state.ClickSearchIconOnHeader)
    return (
        <>
            <Header>
                <NavBar />
            </Header>

            {stateOnClickSerach ?
                <div className={styleMainPage.inputSearch}>
                    <input placeholder="Search for a movie, tv show, person..."/>
                </div>
                : null
            }
        </>
    )
}
