import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieAction } from '../../stateManagment/actions/fetchListOfMovieAction'
import { Loading } from '../../components/layout/loading'
import '../globalStyle.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'


const ShowShortInfoOfPopularSlider = () => {

    const receivedFullDataState = useSelector(state => state.listOfMovieState.getAllMovie.results);
    const receivedFullUrlImagesState = useSelector(state => state.fullUrlImageState.getFullUrlOfImages.images)

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(await fetchMovieAction(dispatch));
    }, []);


    //------------------------------------------------------
    const [statebase, setstatebase] = useState();
    const [statesize, setstatesize] = useState()
    // useEffect(async () => {
    //     const res = await fetch("https://api.themoviedb.org/3/configuration?api_key=970fbda2d55676cabae8b2cebf1f04d0");
    //     const khoroji = await res.json();
    //     console.log(khoroji);
    //     //setstate(khoroji.images.backdrop_sizes)
    //     //setstatebase(khoroji.images.base_url);
    //     //setstatesize(khoroji.images.logo_sizes);
    //     //console.log("images")
    //    // console.log(khoroji.images.base_url);
    //    // console.log(khoroji.images.backdrop_sizes)


    // }, [])
    //------------------------------------------------------
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };
  

    const [mouseOverOnImage, setMouseOverOnImage] = useState();
    const handleMouseOverOnImage = (id) => {
        setMouseOverOnImage(id);
    }
    return (
        // src={item.backdrop_path}
        // itemClass="image-item"
        <Carousel
            ssr
            partialVisbile
            responsive={responsive} itemClass="image-item">
            {
                receivedFullDataState ?
                    receivedFullDataState.map((item, index) => {
                        return (

                            <div key={index}>
                                {
                                    mouseOverOnImage == item.id ?
                                        <div className="box" >
                                            <div className="playIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="80" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                                </svg>
                                            </div>
                                            <Link to={`/movie/${item.id}`}>
                                                <div className="infoIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                        :
                                        null
                                }

                                {/* ----------------------------- */}
                                <img className="poster"
                                    onMouseEnter={() => handleMouseOverOnImage(item.id)}
                                    onMouseLeave={() => handleMouseOverOnImage(item.id)}
                                    src={`${receivedFullUrlImagesState.base_url}${receivedFullUrlImagesState.poster_sizes[2]}${item.poster_path}`} />
                                <div className="titleMovie">{item.title}</div>
                                <div className="yearOfMovie">{item.release_date}</div>
                            </div>

                        )
                    }) :<Loading />
            }

        </Carousel>


    )
}

export default ShowShortInfoOfPopularSlider;