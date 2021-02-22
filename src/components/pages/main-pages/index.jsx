import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieAction } from '../../../stateManagment/actions/fetchListOfMovieAction'
import { Footer } from '../../layout/fixed-layout/footer'
import { Header } from '../../layout/fixed-layout/header'
import { NavBar } from '../../layout/fixed-layout/navbar'
import { Slider } from '../../layout/slider'
import { Loading } from '../../layout/loading'
import styleMainPage from './styleMainPage.module.scss'


export const MainPage = () => {
    //----------------------------------------- btn search click
    const [stateOnClickSerach, setStateOnClickSerach] = useState();
    const handleSearchClick = () => {
        setStateOnClickSerach(prevState => !prevState);
    }
    //-------------------------------------------fetch data with thunk

    const isLoadingState = useSelector(state => state.listOfMovieState.isLoading);
    const resiveDataSate = useSelector(state => state.listOfMovieState.getAllMovie.data);

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(await fetchMovieAction(dispatch));
    }, [])


    return (

        <>
{console.log(isLoadingState)}
            <Header onSearchClick={() => handleSearchClick()}>
                <NavBar />
            </Header>
            {stateOnClickSerach ?
                <div className={styleMainPage.inputSearch}>
                    <input placeholder="Search for a movie, tv show, person..." />
                </div>
                : null
            }
            <Slider />
            {/* ------------------------------------------------------- header and slider */}
           
            {
                isLoadingState ?  <Loading/>:
                    resiveDataSate &&

                    resiveDataSate.map((item) => {
                        return (
                            <div>{item.title}</div>
                        )
                    })
                    
            }
           
            {/* ---------------------------------------------------------fetch data */}
            <Footer />
        </>
    )
}
