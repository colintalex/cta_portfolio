import React from 'react'
import styled from 'styled-components'
import StyledIcons from './NavBar/StyledIcons'

const StyledFooter = styled.div`
    max-width: 1200px; 
    margin: 0 auto;
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

    #icon-wrapper {
        padding-right: 15px;
    }

`

const FootWrapper = styled.div`
    background: #1f1f1f;
    height: 5vh;
    width: 100%
    border-style: solid;
    border-width: 1px;
    border-top-color: #cc851e94;
`
const Footer = () => {
    return(
        <FootWrapper>
            <StyledFooter>
                <StyledTag>
                    <p id='footer-tag'>Colin Alexander 2020</p>
                </StyledTag>
                <IconsWrapper>
                    <StyledIcons/>
                </IconsWrapper>
            </StyledFooter>
        </FootWrapper>
    )
}

export default Footer;