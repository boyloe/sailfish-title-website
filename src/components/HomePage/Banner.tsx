import React from 'react'
import BannerBackground from '../../assets/images/palm-tree-banner.png'
import SailfishLogo from '../../assets/Logo/Grayscale on Transparent.png'


export const Banner:React.FC = () => {
    return (
        <header className="banner">
            <img id="home-banner-image" src={BannerBackground} alt="palm tree background" />
            <img id="home-logo" src={SailfishLogo} alt="sailfish title logo" />
        </header>
    )
}