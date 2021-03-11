import React from 'react'
import bannerImage from '../../assets/img/banner/bannerImage.png'
import styleBanner from './styleBanner.module.scss'
export const Banner = () => {
    return (
        <div className={styleBanner.totalbanner}>
            <div className={styleBanner.bannerImg}>
                <img src={bannerImage} alt="banner" />
            </div>

            <div className={styleBanner.bannerDetail}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Join Today </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Get access to maintain your own custom personal lists, <br />
                 track what you've seen and search and filter for what to watch next</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <button className={styleBanner.btnSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
