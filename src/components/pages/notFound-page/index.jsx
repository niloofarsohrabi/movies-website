import React from 'react'
import { Helmet } from "react-helmet";
import notfound from '../../../assets/img/not-found/notfound.jpg'
import styleNotFound from './styleNotFound.module.scss'
export const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found</title>
            </Helmet>
            <div>

                <img className={styleNotFound.imgNotFound} alt="notFound" src={notfound} />
            </div>
        </>
    )
}
