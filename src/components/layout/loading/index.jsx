import React from 'react'
import './styleLoading.scss'

export const Loading = () => {
    return (
        <div className="loadingStyle">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
