import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchSearchOfMovieAction } from '../../../stateManagment/actions/fetchSearchOfMovieAction'
import {Loading} from '../../layout/loading'
import styleSearch from './styleSearch.module.scss'

export const Search = () => {

    const { name } = useParams();
    const getSearhOfMovie = useSelector(state => state.getSearchState.search.results)
    const receivedFullUrlImagesState = useSelector(state => state.fullUrlImageState.getFullUrlOfImages.images)


    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(await fetchSearchOfMovieAction(dispatch, name));
    }, []);
    if (!getSearhOfMovie) {
        <Loading/>
    }
    return (
        <>

            {
                getSearhOfMovie &&
                getSearhOfMovie.map((item) => {
                    return (
                        <div className={styleSearch.total}>

                            {
                                item.poster_path ?
                                    <img src={`${receivedFullUrlImagesState.base_url}${receivedFullUrlImagesState.logo_sizes[1]}${item.poster_path}`} />
                                    :
                                    <div className={styleSearch.noImg}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="120" fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                            <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                        </svg>
                                    </div>
                            }
                            <div className={styleSearch.insideBox}>
                                <Link to={`/movie/${item.id}`}>
                                    <div className={styleSearch.title}>{item.title}</div>
                                </Link>
                                <div className={styleSearch.date}>{item.release_date}</div>
                                {
                                    item.overview ?
                                        <div className={styleSearch.overview}>{item.overview}</div>
                                        :
                                        <div className={styleSearch.overview}>Oops!No Overview to show</div>
                                }

                            </div>


                        </div>
                    )
                })
            }
        </>
    )
}
