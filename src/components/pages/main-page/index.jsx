import React, { useState } from 'react'
import { Slider } from '../../layout/slider'
import ShowShortInfoOfPopularSlider from '../../../showInfoOfFetchData/showShortInfoOfPopularSlider'
import styleMainPage from './styleMainPage.module.scss'
import ShowShortInfoOfFreeWatchSlider from '../../../showInfoOfFetchData/showShortInfoOfFreeWatchSlider'
import { Banner } from '../../banner'


export const MainPage = () => {
   
    return (

        <>
          
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
                <ShowShortInfoOfFreeWatchSlider />
            </div>
            <div>
                <Banner/>
            </div>

            {/* ---------------------------------------------------------fetch data */}
           
        </>
    )
}
