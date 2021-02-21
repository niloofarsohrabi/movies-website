import React from 'react'
import styleFooterItem from './styleFooterItem.module.scss'

export const FooterItem = ({ footerData }) => {
    return (
        <>
            <div className={styleFooterItem.mainTitle}>
                <h5>{footerData.mainTitle}</h5>
                
            </div>

            {footerData.subTitleOfFooter.map((item) => {
                return (
                    <div className={styleFooterItem.subTitle}>
                        {item}
                    </div>
                )
            })}
        </>
    )
}
