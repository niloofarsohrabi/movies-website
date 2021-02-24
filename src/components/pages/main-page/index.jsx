import React, { useState } from 'react'
import { Footer } from '../../layout/fixed-layout/footer'
import { Header } from '../../layout/fixed-layout/header'
import { NavBar } from '../../layout/fixed-layout/navbar'
import { Slider } from '../../layout/slider'
import ShowShortInfoOfPopularSlider from '../../../showInfoOfFetchData/showShortInfoOfPopularSlider'
import styleMainPage from './styleMainPage.module.scss'
import  ShowShortInfoOfFreeWatchSlider  from '../../../showInfoOfFetchData/showShortInfoOfFreeWatchSlider'


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
            <div className={styleMainPage.titlePopular}>
                <h4>What's Popular</h4>
                <div className={styleMainPage.line}></div>
                <ShowShortInfoOfPopularSlider />
            </div>
            <div className={styleMainPage.titleFreeWatch}>
                <h4>Free To Watch</h4>
                <div className={styleMainPage.line}></div>
                 <ShowShortInfoOfFreeWatchSlider/> 
            </div>





            {/* ---------------------------------------------------------fetch data */}
            <Footer />
        </>
    )
}
