import React from 'react'
import { Banner } from './Banner'
import { PageContentContainer } from './PageContentContainer'


export const Home:React.FC = () => {
    return (
        <div className="home-page">
            <Banner />
            <PageContentContainer />
        </div>
    )
}