import React from 'react'
import AnimationComponent from './AnimationComponent'
import styled from 'styled-components'


const StyledHomepage = styled.div`
    background: #484848;
    min-height: 90vh;
    
`

const Homepage = () => {
    return (
        <StyledHomepage>
            <AnimationComponent/>
        </StyledHomepage>
    )
}

export default Homepage;