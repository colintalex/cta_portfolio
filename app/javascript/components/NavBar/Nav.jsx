import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StyledIcons from './StyledIcons'
import { AiOutlineMenu } from 'react-icons/ai'


const StyledNav = styled.nav`
    font-family: 'Big Shoulders Display', light;
    height: 60px;
    background: #1f1f1f;

    @media (max-width: 1200px){
        svg {
            display: none;
        }
        h2 {
            font-size: 2.5em;
            padding-left: 5px;
        }

        h5 {
            font-size: 1.5em
        }
    }

    @media (max-width:900px){
        #menu-icon {
            display: inline-block;
            vertical-align: middle;
        }
        #menu-list {
            position: fixed;
            width: 100%;
            height: 100vh;
            background: #2c3e50;
            top: 80px;
            left: -100%;
            text-align: center;
        }

        padding-left: 10px;

        #logo-wrapper {
            width: 80%;
        }
        #menu-wrapper {
            width: 20%;
        }
    }

    @media (max-width:900px){
        h2{
            font-size: 2em;  
        }
        h5{
            font-size: 1em;
        }
    }

    @media (max-width:400px){
        height: 70px;
        padding-left: 5px;
    }
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

const MenuIcon = styled(AiOutlineMenu)`
    color: white;
    display: none;
    height: 50px;
    width: 50px;
    vertical-align: baseline;
    margin-right: 10px;
`

const MenuButton = styled.button`
    background: none;
    border: none;
    outline:none;
`


const Nav = () => {
    return (
        <StyledNav>
            <StyledLogoWrapper id='logo-wrapper'>
                <StyledName>Colin Alexander</StyledName>
                <StyledSubName> Backend Software Engineer</StyledSubName>
            </StyledLogoWrapper>
            <StyledMenuContentWrapper id='menu-wrapper'>
                <MenuButton>
                    <MenuIcon id='menu-icon'/>
                </MenuButton>
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
                <StyledIcons id='social-icons'/>
            </StyledMenuContentWrapper>
        </StyledNav>
    )
}

export default Nav