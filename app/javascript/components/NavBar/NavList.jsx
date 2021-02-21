import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
    background: #ddd;
    border-radius: 5px;
    color: white;

    &:last-child {
        margin-right: 25px;
    }

    transition: background .4s;
    &:hover {
        background: #CC851E;
    }
`

const StyledLink = styled(Link)`
    color: #333;
    text-decoration: none;
    transition: color .4s;

    &:hover {
        color: #efefef;
    }
`

const NavList = () => {
    return(
        <StyledList id='menu-list'>
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
    )
}

export default NavList