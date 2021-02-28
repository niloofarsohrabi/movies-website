import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { fetchDetailMovieAction } from "../../../stateManagment/actions/fetchDetailOfMovieAction";

export const MovieDetailPage = () => {

    const { id } = useParams();
    const receiveDetailOfMovieState = useSelector(state => state.detailOfMovieState.getDetailOfMovie)
    const dispatch = useDispatch();
    useEffect(async () => {
         await dispatch(await fetchDetailMovieAction(dispatch,id));
    }, []);

    return (
        <>
           
        </>
    )
}
