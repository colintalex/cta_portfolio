import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    background: black;
    height: 5vh;
    border-style: solid;
    border-width: 2px;
    border-top-color: turquoise;
`

const Footer = () => {
    return(
        <StyledFooter>
            Footer
        </StyledFooter>
    )
}

export default Footer;