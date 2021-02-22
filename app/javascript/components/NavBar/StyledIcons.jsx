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
        margin: 0px 5px;
        color: gray;
        height: 45px;
        width: 45px;
        display: inline-block;

        transition: color .4s;
        &:hover {
            color: #CC851E;
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
        <StyledIconWrapper id='icon-wrapper'>
            <a href={linkUrls['github']}>
                <StyledGitHubIcon className="socialIcon"/>
            </a>
            <a href={linkUrls['github']}>
                <StyledLinkedInIcon className="socialIcon"/>
            </a>
        </StyledIconWrapper>
    )
}

export default StyledIcons;