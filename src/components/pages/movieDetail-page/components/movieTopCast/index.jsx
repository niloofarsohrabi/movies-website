import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchTopCastOFMovieAction } from '../../../../../stateManagment/actions/fetchTopCastOFMovieAction';
import  styleTopCast  from './styleTopCast.module.scss'

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
                            
                            <img src={`${getfullImagePath.base_url}${getfullImagePath.logo_sizes[2]}${item.profile_path}`}/>
                            <div className={styleTopCast.topCastName}>{item.name}</div>
                            <div className={styleTopCast.topCastCharacter}>{item.character}</div>
                        </div>

                    )
                })
            }
        </div>
    )
}
