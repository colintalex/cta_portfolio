import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import styled from 'styled-components'

const linkUrls = {
    'github': 'https://github.com/colintalex',
    'linkedin': 'https://www.linkedin.com/in/colintalex/'
}

const StyledIconWrapper = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: auto;
    height: 100%;
    text-align: center;

    svg {
        margin: 5px 5px;
        color: gray;
        height: 45px;
        width: 45px;
        display: inline-block;
        &:hover {
            color: turquoise;
        }
    }
`

const StyledGitHubIcon = styled(AiOutlineGithub)`
   
`

const StyledMailIcon = styled(HiOutlineMail)`
   
`

const StyledLinkedInIcon = styled(AiOutlineLinkedin)`
    
`

const StyledIcons = () => {
    return(
        <StyledIconWrapper>
            <a href={linkUrls['github']}>
                <StyledGitHubIcon className="socialIcon"/>
            </a>
            <a href={linkUrls['github']}>
                <StyledLinkedInIcon className="socialIcon"/>
            </a>
            {/* <a> LINK TO EMAIL FORM </a> */}
            <StyledMailIcon className="socialIcon"/> 
        </StyledIconWrapper>
    )
}

export default StyledIcons;