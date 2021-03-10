import React from 'react'
import  {Slider}  from '../../layout/slider'
import ShowShortInfoOfPopularSlider from '../../../showInfoOfFetchData/showShortInfoOfPopularSlider'
import styleMainPage from './styleMainPage.module.scss'
import { Banner } from '../../banner'
import { Loading } from '../../layout/loading'



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
             
            <div>
                <Banner />
            </div>

            {/* ---------------------------------------------------------fetch data */}

        </>
    )
}
