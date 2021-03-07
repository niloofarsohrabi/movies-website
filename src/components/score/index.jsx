import React from 'react'
import ReactStoreIndicator from 'react-score-indicator'
import './StyleScore.css';
export const ScoreComponent = ({NumberOfScore}) => {
    return (
        <>
            <ReactStoreIndicator
                value={NumberOfScore}
                maxValue={100}

            />
        </>
    )
}
