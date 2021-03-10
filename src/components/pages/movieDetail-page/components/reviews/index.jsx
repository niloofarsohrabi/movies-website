import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviewsAction } from '../../../../../stateManagment/actions/fetchReviewsAction'
import styleReviews from './styleReviews.module.scss'

export const Reviews = ({ movieId }) => {

    const getReviews = useSelector(state => state.reviewsState.getReviews.results);
    const receivedFullUrlImagesState = useSelector(state => state.fullUrlImageState.getFullUrlOfImages.images);

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(await fetchReviewsAction(dispatch, movieId))
    }, []);

    const [imageName, setImageName] = useState();
    const [noReviews, setNoReviews] = useState();
    const [randomNumberOfArray, setRandomNumberOfArray] = useState()
    

    useEffect(() => {

        if (getReviews && getReviews.length > 0) {
            const randomNumber = Math.floor(Math.random() * (getReviews.length - 0) + 0);
            setRandomNumberOfArray(randomNumber);

            const avatarPath = getReviews[randomNumber].author_details.avatar_path;
            if (avatarPath && avatarPath.includes("gravatar")) {

                const changeUrl = avatarPath.slice(1)
                setImageName(changeUrl);

            } else {
                if (avatarPath) {
                    setImageName(`${receivedFullUrlImagesState.base_url}${receivedFullUrlImagesState.profile_sizes[0]}${avatarPath}`);
                }
            }

        } else {
            setNoReviews("We don't have any reviews to show you!");
        }

    }, [getReviews])

    return (
        <div>
            {
                getReviews && getReviews[randomNumberOfArray] ?
                    <div className={styleReviews.boxOfReview}>

                        <img className={styleReviews.avatar} src={imageName} />
                        <div className={styleReviews.insideOfBox}>
                            <p className={styleReviews.title}>A Review By {getReviews[randomNumberOfArray].author}</p>
                            <p className={styleReviews.writter}>Written By {getReviews[randomNumberOfArray].author}</p>
                            <p>{getReviews[randomNumberOfArray].content.substr(0, 500)}...<span className={styleReviews.readMore}><u>read the rest.</u></span></p>
                            <div className={styleReviews.rating}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                {
                                    getReviews[randomNumberOfArray].author_details.rating &&
                                    <div className={styleReviews.ratingNumber}>
                                        <div> {getReviews[randomNumberOfArray].author_details.rating}.0 </div>
                                   
                                    </div>
                                  
                                }
                            </div>
                        </div>




                    </div>

                    : noReviews

            }
        </div>
    )
}
