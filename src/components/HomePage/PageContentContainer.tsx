import React from 'react'
import { CompanyInfoContainer } from './CompanyInfoContainer'
import { BlogPostContainer } from './BlogPostContainer'



export const PageContentContainer:React.FC = () => {
    return (
        <body className="page-content-container">
            <CompanyInfoContainer />
            <BlogPostContainer />
        </body>
    )
}