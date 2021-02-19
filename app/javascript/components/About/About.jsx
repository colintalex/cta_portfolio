import React from 'react'
import styled from 'styled-components'

const StyledAboutPage = styled.div`
    min-height: 100vh;
    overflow: scroll;
`

const AboutPage = () => {
    return (
        <StyledAboutPage>
            About page
            <div>
                Photo
            </div>
        </StyledAboutPage>
    )
}

export default AboutPage;