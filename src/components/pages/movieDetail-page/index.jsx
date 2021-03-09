
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { fetchDetailMovieAction } from "../../../stateManagment/actions/fetchDetailOfMovieAction";
import { MovieDetailBottomPart } from './components/movieDetailBottomPart';
import styleMovie from './styleMovieDetail.module.scss'
import { Loading } from '../../layout/loading'

export const MovieDetailPage = () => {
    const { id } = useParams();
    const detailOfMovieState = useSelector(state => state.detailOfMovieState.getDetailOfMovie)
    const receivedFullUrlImagesState = useSelector(state => state.fullUrlImageState.getFullUrlOfImages.images)

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(await fetchDetailMovieAction(dispatch, id));

    }, []);

    if (!receivedFullUrlImagesState)
        return <Loading />;
    return (

        <>
       
            <div className={styleMovie.backgroundBanner}
                style={{ backgroundImage: `url(${receivedFullUrlImagesState.base_url}${receivedFullUrlImagesState.backdrop_sizes[2]}${detailOfMovieState.backdrop_path})` }}>
                <div className={styleMovie.bgDark}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className={styleMovie.poster}>
                                    <img
                                        src={`${receivedFullUrlImagesState.base_url}${receivedFullUrlImagesState.poster_sizes[3]}${detailOfMovieState.poster_path}`} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className={styleMovie.totalDesign}>
                                    <div className={styleMovie.title}>{detailOfMovieState.title}</div>
                                    <div className={styleMovie.designDetail}>
                                        <div className={styleMovie.released}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                            </svg>
                                            {detailOfMovieState.release_date}
                                        </div>
                                        <div className={styleMovie.runtime}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                            </svg>
                                            {detailOfMovieState.runtime} m
                                        </div>


                                        <div className={styleMovie.genres}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                            </svg>
                                            {
                                                detailOfMovieState.genres &&
                                                detailOfMovieState.genres.map((item, index) => {
                                                    return (
                                                        <ul key={index}>
                                                            <li>{item.name}</li>
                                                        </ul>

                                                    )
                                                })

                                            }
                                        </div>
                                    </div>
                                    {/* --------------------------------------------- */}

                                    <div className={styleMovie.tagline}>{detailOfMovieState.tagline}</div>
                                    <div className={styleMovie.overviewTitle}>Overview</div>
                                    <div className={styleMovie.overview}>

                                        {detailOfMovieState.overview}
                                    </div>


                                    <div className={styleMovie.buttongroup}>

                                        <div className={`${styleMovie.list} ${styleMovie.tooltip}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg>
                                            <div className={styleMovie.tooltiptext}>Add To List</div>
                                        </div>
                                        <div className={`${styleMovie.favarite} ${styleMovie.tooltip}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                            </svg>
                                            <div className={styleMovie.tooltiptext}>Farvarite</div>
                                        </div>
                                        <div className={`${styleMovie.save} ${styleMovie.tooltip}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                            </svg>
                                            <div className={styleMovie.tooltiptext}>Save Movie</div>
                                        </div>
                                        <div className={`${styleMovie.star} ${styleMovie.tooltip}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                            <div className={styleMovie.tooltiptext}>Rate It!</div>
                                        </div>
                                        <div className={`${styleMovie.play} ${styleMovie.tooltip}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                            </svg>
                                            <div className={styleMovie.tooltiptext}>Paly Triller</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    
  <MovieDetailBottomPart />
   
          
             

        </>
    )
}
