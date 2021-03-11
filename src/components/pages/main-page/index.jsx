import React from 'react'
import { Slider } from '../../layout/slider'
import ShowShortInfoOfPopularSlider from '../../../showInfoOfFetchData/showShortInfoOfPopularSlider'
import styleMainPage from './styleMainPage.module.scss'
import { Banner } from '../../banner'
import {Helmet} from "react-helmet";
import { Loading } from '../../layout/loading'



export const MainPage = () => {

    return (

        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>The Movi Database(TMDB)</title>
            </Helmet>
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
