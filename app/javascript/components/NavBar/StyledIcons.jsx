import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineLinkedin } from 'react-icons/ai'

import styled from 'styled-components'

const StyledIconWrapper = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 30%;
    height: 100%;
    text-align: center;

    svg {
        margin: 5px 20px;
    }

`

const StyledGitHubIcon = styled(AiOutlineGithub)`
    color: white;
    height: 35px;
    width: 35px;
    display: inline-block;
    &:hover {
        color: turquoise;
    }
`

const StyledMailIcon = styled(HiOutlineMail)`
    color: white;
    height: 35px;
    width: 35px;
    display: inline-block;
    &:hover {
        color: turquoise;
    }
`

const StyledLinkedInIcon = styled(AiOutlineLinkedin)`
    color: white;
    height: 35px;
    width: 35px;
    display: inline-block;
    &:hover {
        color: turquoise;
    }
`

const StyledIcons = () => {
    return(
        <StyledIconWrapper>
            <StyledGitHubIcon className="socialIcon"/>
            <StyledMailIcon className="socialIcon"/>
            <StyledLinkedInIcon className="socialIcon"/>
        </StyledIconWrapper>
    )
}

export default StyledIcons;