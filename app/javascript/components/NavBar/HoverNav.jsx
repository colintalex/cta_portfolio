import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHovList = styled.ul`
    list-style: none;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 65px;
    left: ${props => (props.hoverMenuVis == true ? '0%' : '-100%')};
    text-align: center;
    display: ${props => ((props.hoverMenuVis == true) ? 'block' : 'none' )};
    @media (min-width: 900px) {
        display: none !important;
    }
`

const StyledHovListItem = styled.li`
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

const HoverNav = ({hoverMenuVis}) => {
    return(
        <StyledHovList id='hover-menu' hoverMenuVis={hoverMenuVis}>
            <StyledHovListItem>
                <StyledLink hoverMenuVis={hoverMenuVis} to='/'>Home</StyledLink>
            </StyledHovListItem>
            <StyledHovListItem>
                <StyledLink hoverMenuVis={hoverMenuVis} to='/work'>My Work</StyledLink>
            </StyledHovListItem>
            <StyledHovListItem>
                <StyledLink hoverMenuVis={hoverMenuVis} to='/about'>About</StyledLink>
            </StyledHovListItem>
        </StyledHovList>
    )
}

export default HoverNav