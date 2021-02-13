import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeProjectModule from '../WorkModules/CodeProjectModule'
import GraphicProjectModule from '../WorkModules/GraphicProjectModule'
import styled from 'styled-components'
import { FaArrowCircleLeft } from 'react-icons/fa'

const StyledTabs = styled.button`
    font-family: 'Big Shoulders Display', light;
    font-size: 2em;
    color: #E1AD5B;
    background-color: #000000;
    border-radius: 5px;
    transition: color .6s;
    outline: none;

    &:hover {
        color: #e5e5e5;
    }

    &:active {
        color: turquoise;
        
    }
`

const StyledTabList = styled.ul`
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: 0;
`

const StyledTabItem = styled.li`
    display: inline;
    margin: 0 25px;
`

const StyledPageHeader = styled.h2`
    margin: 10px auto;
    text-align: center;
    font-size: 2.5em;
    color: #e5e5e5;
`

const StyledArrowIcon = styled(FaArrowCircleLeft)`
    width: 45px;
    height: 45px;
    vertical-align: bottom;
    color: #E1AD5B;
    border: 1px black;

    stroke: #CC851E;
    stroke-dasharray: 3000;
    stroke-dashoffset: 0;
    stroke-width: 10px;

    transition: transform .6s;
    transform: ${props => 
        (props.activetab == 'tab-code-projects') ? 'rotateZ(0)' : 'rotateZ(180deg)'
    };
    
/

`

const TabsContainer = () => {
    const [ activeTab, setActiveTab ] = useState('tab-code-projects')

    return (
        <div className='' id='tabs-container'>
            <StyledPageHeader>My Personal Work</StyledPageHeader>
            <StyledTabList>
                <StyledTabItem className='tab' id='tab-code-projects'>
                    <StyledTabs onClick={e => setActiveTab('tab-code-projects')}>Code Work</StyledTabs>
                </StyledTabItem>
                    <StyledArrowIcon
                        activetab={activeTab}
                    />
                <StyledTabItem className='tab' id='tab-graphic-projects'>
                    <StyledTabs onClick={e => setActiveTab('tab-graphic-projects')}>Graphic Design</StyledTabs>
                </StyledTabItem>
            </StyledTabList>
                    <CodeProjectModule
                        activeTab={activeTab}
                    />
                    <GraphicProjectModule
                        activeTab={activeTab}
                    />
        </div>
    )
}

export default TabsContainer;