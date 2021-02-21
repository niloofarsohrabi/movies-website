import React from 'react'
import footerItem from './utils/footer-item'
import logo from '../../../../assets/img/footer-logo/logo.png'
import styleFooter from './styleFooter.module.scss'
import { FooterItem } from '../footer-items'

export const Footer = () => {
    return (
        <>  <div className={styleFooter.totalStyle}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={logo} />
                    </div>
                    {
                        footerItem.map((item) => {
                            return (
                                <div className="col-lg-2">
                                    <div className={styleFooter.footerItem}>
                                    <FooterItem footerData={item} />
                                    </div>
                                   
                                </div>

                            )
                        })
                    }
                </div>
                <div className="row">
                    <button>JOIN THE COMMUNITY</button>
                </div>
            </div>
        </div>
      </>
    )
}
