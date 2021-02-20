import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHovList = styled.ul`
    list-style: none;
    position: fixed;
    padding: 0px;
    margin: 0px;
    z-index: 10;
    width: 100%;
    height: auto;
    background: #2c3e50;
    opacity: 100%;
    top: 59px;
    border-radius: 10px;
    transition: left .3s;
    left: ${props => (props.hoverMenuVis == true ? '0%' : '-100%')};
    text-align: center;
    @media (min-width: 900px) {
        display: none !important;
    }
`

const StyledHovListItem = styled.li`
    width: 85%;
    font-size: 1.8em;
    background: gray;
    border-radius: 5px;
    color: white;
    padding: 15px 0px;
    margin: 25px auto;
    transition: background-color .4s;
    &:hover {
        background-color: turquoise;
    }
    a{ 
        width: 350px;
        height: 350px;
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

const HoverNav = ({hoverMenuVis, setHoverMenuVis}) => {
    return(
        <StyledHovList id='hover-menu' hoverMenuVis={hoverMenuVis}>
            <StyledHovListItem>
                <StyledLink hoverMenuVis={hoverMenuVis} onClick={e => setHoverMenuVis(false)} to='/'>Home</StyledLink>
            </StyledHovListItem>
            <StyledHovListItem>
                <StyledLink hoverMenuVis={hoverMenuVis} onClick={e => setHoverMenuVis(false)} to='/work'>My Work</StyledLink>
            </StyledHovListItem>
            <StyledHovListItem>
                <StyledLink hoverMenuVis={hoverMenuVis} onClick={e => setHoverMenuVis(false)} to='/about'>About</StyledLink>
            </StyledHovListItem>
        </StyledHovList>
    )
}

export default HoverNav