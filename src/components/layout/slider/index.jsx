import React from 'react'
import sliderImage from '../../../assets/img/slider/sliderImage.jpg'
import styleSilder from './styleSilder.module.scss'

export const Slider = () => {
    return (
        <>

            <div className="container-fluid">
                <div className={styleSilder.totalSlider}>
                    <div className="row">

                        <img className={styleSilder.imageSlider} src={sliderImage} />
                        <div className="col-lg-12">
                             <h1 className={styleSilder.title}>Welcome.</h1> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className={styleSilder.subTitleSlider}>Millions of movies, TV shows and people to discover. Explore now.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styleSilder.searchBox}>
                                <input className={styleSilder.inputSlider} placeholder="Search for a movie,Tv show,Person..." />
                                <button className={styleSilder.btnSearchSlider}>Search</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
