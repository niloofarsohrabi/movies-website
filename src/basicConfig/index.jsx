import React,{useEffect} from 'react'
import { fetchFullUrlOfImageAction } from '../stateManagment/actions/fetchFullUrlImageAction';
import {useDispatch} from 'react-redux'

export const BasicConfig = () => {
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(await fetchFullUrlOfImageAction(dispatch));
    }, [])
    return (
        null
    )
}
