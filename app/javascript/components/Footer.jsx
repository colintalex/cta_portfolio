import React from 'react'
import styled from 'styled-components'
import StyledIcons from './NavBar/StyledIcons'

const StyledFooter = styled.div`
    background: #1f1f1f;
    height: 5vh;
    border-style: solid;
    border-width: 1px;
    border-top-color: #cc851e94;
    height: auto;
    
    #footer-links {
        display: inline-block;
        text-align: end;
        width: 50%:
    }

`

const StyledTag = styled.div`
    display: inline-block;
    width: 50%;
    p {
        padding-left: 25px;
        color: gray;
    }
`

const IconsWrapper = styled.div`
    width: 50%;
    display: inline-block;
    text-align: end;

    svg {
        height: 30px;
        width: 30px;
    }

`

const Footer = () => {
    return(
        <StyledFooter>
            <StyledTag>
                <p id='footer-tag'>Colin Alexander 2020</p>
            </StyledTag>
            <IconsWrapper>
                <StyledIcons/>
            </IconsWrapper>
        </StyledFooter>
    )
}

export default Footer;