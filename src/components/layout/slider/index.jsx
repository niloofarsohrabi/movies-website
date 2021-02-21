import React from 'react'
import sliderImage from '../../../assets/img/slider/sliderImage.jpg'
import styleSilder from './styleSilder.module.scss'

export const Slider = () => {
    return (
        <>
            <div className={styleSilder.c}></div>
            <div className="container-fluid">
                <div className="row">
                    <img className={styleSilder.imageSlider} src={sliderImage} />
                    <h1 className={styleSilder.title}>Welcome.</h1>
                </div>
                <div className="row">
                    <h2 className={styleSilder.subTitleSlider}>Millions of movies, TV shows and people to discover. Explore now.</h2>
                </div>
                <div className="row">
                    <input className={styleSilder.inputSlider} placeholder="Search for a movie,Tv show,Person..." />
                    <button className={styleSilder.btnSearchSlider}>Search</button>
                </div>
            </div>
        </>
    )
}
