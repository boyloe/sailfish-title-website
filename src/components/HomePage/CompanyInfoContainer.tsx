import React from 'react'
import BigMuscles from '../../assets/images/big-muscles.jpg'


export const CompanyInfoContainer:React.FC = () => {
    return (
        <section id="company-info-container">
            <h4 id="company-info-title">Welcome to Sailfish Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Qui impedit nisi consequuntur eos enim facere? Consequuntur nesciunt, 
                molestias consectetur quia illo rem accusamus, 
                numquam sit obcaecati architecto excepturi, pariatur totam.
            </p>
            <img id="mr-big-muscles" src={BigMuscles} alt="big muscles" />

        </section>
    )
}