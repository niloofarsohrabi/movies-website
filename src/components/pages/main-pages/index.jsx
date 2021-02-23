import React,{useState} from 'react'
import { FetchAllMovie } from '../../../fetchLayer/fetchAllMovie'

import { Footer } from '../../layout/fixed-layout/footer'
import { Header } from '../../layout/fixed-layout/header'
import { NavBar } from '../../layout/fixed-layout/navbar'
import { Slider } from '../../layout/slider'

import styleMainPage from './styleMainPage.module.scss'


export const MainPage = () => {
    //----------------------------------------- btn search click
    const [stateOnClickSerach, setStateOnClickSerach] = useState();
    const handleSearchClick = () => {
        setStateOnClickSerach(prevState => !prevState);
    }
    //-------------------------------------------fetch data with thunk


    return (

        <>

            <Header onSearchClick={() => handleSearchClick()}>
                <NavBar />
            </Header>
            {stateOnClickSerach ?
                <div className={styleMainPage.inputSearch}>
                    <input placeholder="Search for a movie, tv show, person..." />
                </div>
                : null
            }
            <Slider />
            {/* ------------------------------------------------------- header and slider */}
                <FetchAllMovie/>

            {/* ---------------------------------------------------------fetch data */}
            <Footer />
        </>
    )
}
