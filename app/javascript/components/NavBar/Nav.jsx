import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StyledIcons from './StyledIcons'

const StyledNav = styled.nav`
    font-family: 'Big Shoulders Display', light;
    height: 60px;
    background: #1f1f1f;
    padding: 10px 20px;
`

const StyledList = styled.ul`
    display: inline-block;
    text-align: end;
    padding: 0px;
`

const StyledListItem = styled.li`
    display: inline;
    margin: 10px 20px;
    padding: 2px 10px;
    font-size: 1.8em;
    background: gray;
    border-radius: 5px;
    color: white;

    &:last-child {
        margin-right: 25px;
    }

    transition: background-color .4s;
    &:hover {
        background-color: turquoise;
    }
`

const StyledLink = styled(Link)`
    color: #d8d8d8;
    text-decoration: none;
    transition: color .4s;

    &:hover {
        color: black
    }
`
const StyledName = styled.h2`
    margin-top: 6px;
    margin-bottom: 0px;
    padding-left: 20px;
    color: white;
    text-align: center;
    font-size: 3em;
    display: inline-block;
}
`

const StyledSubName = styled.h5`
    color: turquoise;
    text-align: center;
    display: inline-block;
    font-size: 1.5em;
    margin-left: 3px;
    margin-bottom: 0px;
    margin-top: 0px;
    opacity: 90%;
`

const StyledLogoWrapper = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: middle;
`

const StyledMenuContentWrapper = styled.div`
    width: 50%;
    text-align: end;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
`


const Nav = () => {
    return (
        <StyledNav>
            <StyledLogoWrapper>
                <StyledName>Colin Alexander</StyledName>
                <StyledSubName> Backend Software Engineer</StyledSubName>
            </StyledLogoWrapper>
            <StyledMenuContentWrapper>
                <StyledList>
                    <StyledListItem>
                        <StyledLink to='/'>Home</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to='/work'>My Work</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to='/about'>About</StyledLink>
                    </StyledListItem>
                </StyledList>
                <StyledIcons/>
            </StyledMenuContentWrapper>
        </StyledNav>
    )
}

export default Nav