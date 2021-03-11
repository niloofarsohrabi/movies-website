import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecommandMovieAction } from '../../../../../stateManagment/actions/fetchRecommandMovieAction'
import styleRecommand from './stylerecommendations.module.scss'

export const Recommendations = ({ movieId }) => {

    const getRecommand = useSelector(state => state.getRecommandState.getRecommand.results)
    const receivedFullUrlImagesState = useSelector(state => state.fullUrlImageState.getFullUrlOfImages.images);

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(await fetchRecommandMovieAction(dispatch, movieId))
    }, [])
    return (
        <div className={styleRecommand.totalRecommand}>
            {
                getRecommand ?
                getRecommand.map((item,index) => {
                    return (
                        <div key={index} className={styleRecommand.imgRecommand}>
                            {
                                item.backdrop_path ?
                                    <img alt="recommandImage" src={`${receivedFullUrlImagesState.base_url}${receivedFullUrlImagesState.backdrop_sizes[0]}${item.backdrop_path}`} />
                                    :
                                    <div className={styleRecommand.noimg}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="150" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                        </svg>
                                    </div>
                            }
                            <div className={styleRecommand.titleRecommand}>{item.title}</div>

                        </div>
                    )
                }):<div>No Recommandations To Show!</div>
            }
        </div>
    )
}
