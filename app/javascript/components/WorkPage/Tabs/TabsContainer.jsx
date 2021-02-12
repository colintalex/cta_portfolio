import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeProjectModule from '../WorkModules/CodeProjectModule'
import GraphicProjectModule from '../WorkModules/GraphicProjectModule'
import styled from 'styled-components'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const StyledTabs = styled.button`
    font-family: 'Big Shoulders Display', light;
    font-size: 2em;
    color: black;
    button-style: none;

    &:hover {
        color: white;
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
    color: lightgray;
`

const StyledArrowIcon = styled(HiArrowNarrowLeft)`
    width: 40px;
    height: 40px;
    vertical-align: bottom;
    color: turquoise;

    transition: transform .6s;
    transform: ${props => 
        (props.activetab == 'tab-code-projects') ? 'rotateZ(0)' : 'rotateZ(180deg)'
    };

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