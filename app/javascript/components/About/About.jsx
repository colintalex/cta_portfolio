import React from 'react'
import styled from 'styled-components'

const StyledAboutPage = styled.div`
    min-height: 90vh;
    overflow: scroll;
    max-width: 1400px;
    font-family: 'Big Shoulders Display', light;
    margin: 10px auto;
    border-radius: 5px;
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