import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchTopCastOFMovieAction } from '../../../../../stateManagment/actions/fetchTopCastOFMovieAction';
import styleTopCast from './styleTopCast.module.scss'

export const MovieTopCast = ({ movieId }) => {

    const getfullImagePath = useSelector(state => state.fullUrlImageState.getFullUrlOfImages.images)
    const getCast = useSelector(state => state.topCastOMovieState.getTopCastOfMovie.cast);
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(await fetchTopCastOFMovieAction(dispatch, movieId));
    }, [])

    return (
        <div className={styleTopCast.totalTopCast}>

            {getCast &&
                getCast.map((item, index) => {
                    return (
                        <div key={index} className={styleTopCast.box}>
                            {item.profile_path ?
                                <img src={`${getfullImagePath.base_url}${getfullImagePath.logo_sizes[2]}${item.profile_path}`} />
                                :
                                <div className={styleTopCast.profileLogo}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="250" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                </div>
                            }
                            <div className={styleTopCast.topCastName}>{item.name}</div>
                            <div className={styleTopCast.topCastCharacter}>{item.character}</div>
                        </div>

                    )
                })
            }
        </div>
    )
}
