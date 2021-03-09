import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImageOMovieAction } from '../../../../../stateManagment/actions/fetchImageOfMovieAction'
import styleMedia from './styleMedia.module.scss'

export const MovieMedia = ({ movieId, onTabClick }) => {

    const getImage = useSelector(state => state.getImageState.getImage);
    const receivedFullUrlImagesState = useSelector(state => state.fullUrlImageState.getFullUrlOfImages.images);

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(await fetchImageOMovieAction(dispatch, movieId));
    }, []);

    useEffect(async () => {
        const url = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=970fbda2d55676cabae8b2cebf1f04d0&include_image_language=en,null`)
        const result = await url.json();
     //   console.log(result)
    }, []);


    if (onTabClick === "POSTER") {
        return (
            <div className={styleMedia.totalPoster}>
                {
                    getImage && getImage.posters.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={`${receivedFullUrlImagesState.base_url}${receivedFullUrlImagesState.poster_sizes[2]}${item.file_path}`} />
                            </div>
                        )
                    })
                }

            </div>
        )
    }
    if (onTabClick === "BACKDROPS") {
        return (
            <div className={styleMedia.totalbackdrops}>
                {
                    getImage && getImage.backdrops.map((item, index) => {
                        return (
                            <div key={index}>                         
                                <img src={`${receivedFullUrlImagesState.base_url}${receivedFullUrlImagesState.poster_sizes[4]}${item.file_path}`} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className={styleMedia.totalPoster}>
                {
                    getImage.posters && getImage.posters.map((item, index) => {
                       
                        return (
                            <div key={index}>
                                <img src={`${receivedFullUrlImagesState.base_url}${receivedFullUrlImagesState.poster_sizes[2]}${item.file_path}`} />
                            </div>
                        )
                    })
                }

            </div>
    )




}
