import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFreeMovieAction } from '../../stateManagment/actions/fetchListOfFreeMovieAction'
import { Loading } from '../../components/layout/loading'
import styleShortInfoOfFree from './styleShotInfoOfFree.module.scss'
import '../globalStyle.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ShowShortInfoOfFreeWatchSlider = () => {

    const resiveDataState = useSelector(state => state.listOfFreeMovieState.getFreeWatchMovie.data);
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(await fetchFreeMovieAction(dispatch,2));
    }, [])
    //------------------------------------------------------
    const [mouseOverOnImage, setMouseOverOnImage] = useState();
    const handleMouseOverOnImage = (id) => {
        setMouseOverOnImage(id);
    }
    //------------------------------------------------------
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel responsive={responsive} itemClass="imageItem">
        {
            resiveDataState ?
                resiveDataState.map((item) => {
                    return (
                        <div key={item.id} >
                            {mouseOverOnImage == item.id ?
                                    <div className={styleShortInfoOfFree.box} >
                                        <div className={styleShortInfoOfFree.playIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="80" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                            </svg>
                                        </div>
                                        <div className={styleShortInfoOfFree.infoIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    :
                                    null
                                }
                           {/* ----------------------------------------------------- */}
                            <img className="poster" src={item.poster}
                                onMouseEnter={() => handleMouseOverOnImage(item.id)}
                                onMouseLeave={() => handleMouseOverOnImage(item.id)} />
                            <div className="titleMovie">{item.title}</div>
                            <div className="yearOfMovie">
                                Production Year {item.year}
                            </div>
                            <div className="countryOfMovie">
                                {item.country}</div>
                        </div>
                       
                    )
                }) : <Loading />
        }

    </Carousel>
    )
}
export default ShowShortInfoOfFreeWatchSlider;