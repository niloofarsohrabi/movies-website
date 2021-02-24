import React from 'react'
import {BrowserRouter,Switch,Router} from 'react-router-dom'
import routes from './utils/routes'

export const RouterHandler = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((item,index)=>{
                    
                })}
            </Switch>
        </BrowserRouter>
    )
}
