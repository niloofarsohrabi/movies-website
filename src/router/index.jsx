import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Footer } from '../components/layout/fixed-layout/footer'
import { Header}  from '../components/layout/fixed-layout/header'
import { NavBar } from '../components/layout/fixed-layout/navbar'
import routes from './utils/routes'

export const RouterHandler = () => {
    return (
        <BrowserRouter>
            <Header>
                <NavBar />
            </Header>
            <Switch>
                {
                    routes.map((route, index) => {
                        return <Route key={index} exact={route.exact} path={route.path} component={route.component}/>

                    })

                }

            </Switch>
            < Footer />
        </BrowserRouter>
    )
}
