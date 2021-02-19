import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    background: #1f1f1f;
    height: 5vh;
    border-style: solid;
    border-width: 1px;
    border-top-color: #cc851e94;
`

const Footer = () => {
    return(
        <StyledFooter>
            Footer
        </StyledFooter>
    )
}

export default Footer;