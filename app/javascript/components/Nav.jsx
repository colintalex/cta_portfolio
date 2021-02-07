import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
    padding: 10px;
    font-family: 'Big Shoulders Display', light;
    border-radius: 10px;
    height: 70px;
`

const StyledList = styled.ul`
    width: 30%;
    display: inline-block;
    text-align: end;
    padding: 0px;
`

const StyledListItem = styled.li`
    display: inline;
    margin: 10px 10px;
    padding: 2px 10px;
    font-size: 1.5em;
    background: gray;
    border-radius: 5px;

    &:last-child {
        margin-right: 25px;
    }
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
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
    opacity: 90%;
`

const StyledLogoWrapper = styled.div`
    width: 50%;
    display: inline-block;
`

const StyledIcons = styled.div`
    display: inline-block;
    width: 20%;
`


const Nav = () => {
    return (
        <StyledNav>
            <StyledLogoWrapper>
                <StyledName>Colin Alexander</StyledName>
                <StyledSubName> Backend Software Engineer</StyledSubName>
            </StyledLogoWrapper>
            <StyledIcons>
                Social icons
            </StyledIcons>
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
        </StyledNav>
    )
}

export default Nav