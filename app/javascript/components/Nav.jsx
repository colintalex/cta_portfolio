import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.div`
    padding: 10px;
`

const StyledList = styled.ul`
    text-align: center;
    margin: 10px;
`

const StyledListItem = styled.li`
    display: inline;
    margin: 10px 15px;
    padding: 5px 10px;
    font-size: 1.5em;
    background: turquoise;
    border-radius: 5px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Nav = () => {
    return (
        <StyledNav>
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