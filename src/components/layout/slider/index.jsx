import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import sliderImage from '../../../assets/img/slider/sliderImage.jpg'
import styleSilder from './styleSilder.module.scss'

export const Slider = () => {

    const [userInput, setUserInput] = useState();
    const history = useHistory();

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
             history.push(`/search/${userInput}`)
        }
    }

    const handleClickOnSearchBtn = () => {
        history.push(`/search/${userInput}`)
    }
    
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
                                <input className={styleSilder.inputSlider}
                                    onKeyDown={(event) => handleEnterPress(event)}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder="Search for a movie,Tv show,Person..." />

                                <button
                                    onClick={() => handleClickOnSearchBtn()}
                                    className={styleSilder.btnSearchSlider}>Search</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

