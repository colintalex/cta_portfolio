import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeProjectModule from '../WorkModules/CodeProjectModule'
import GraphicProjectModule from '../WorkModules/GraphicProjectModule'
import styled from 'styled-components'
import { FaArrowCircleLeft } from 'react-icons/fa'

const StyledTabs = styled.button`
    font-family: 'Big Shoulders Display', light;
    font-size: 2em;
    background-color: #000000;
    border-radius: 5px;
    transition: color .6s;
    outline: none;
    color: #E1AD5B;
    
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
    transition: color .6s;
    
    #code-tab-button {
        color: ${props => 
            (props.activetab == 'tab-code-projects') ? 'turquoise' : '#E1AD5B'
        };
    }
    
    #graphic-tab-button {
        color: ${props => 
            (props.activetab == 'tab-graphic-projects') ? 'turquoise' : '#E1AD5B'
        };
    }

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
    color: turquoise;
    border: 1px black;

    stroke: #CC851E;
    stroke-dasharray: 3000;
    stroke-dashoffset: 0;
    stroke-width: 10px;

    transition: transform .6s;
    transform: ${props => 
        (props.activetab == 'tab-code-projects') ? 'rotateZ(0)' : 'rotateZ(180deg)'
    };
`

const StyledHeaderWrapper = styled.div`
    background: url(https://media.istockphoto.com/vectors/seamless-wooden-pattern-wood-grain-texture-dense-lines-abstract-white-vector-id1202084477?b=1&k=6&m=1202084477&s=612x612&w=0&h=kJP6WEtSY1-mJkD7tFgX_A7NFX-EZv1hrjxLDpxFdjg=);
    border-radius: 10px;
    background-size: cover;
`

const FogEffectLayer = styled.div`
    padding: 10px;
    background: #120b018a;
    border-radius: 10px;
`

const TabsContainer = () => {
    const [ activeTab, setActiveTab ] = useState('tab-code-projects')

    return (
        <div className='' id='tabs-container'>
            <StyledHeaderWrapper id='work-header'>
                <FogEffectLayer>
                <StyledPageHeader>My Personal Work</StyledPageHeader>
                <StyledTabList activeTab={activeTab}>
                    <StyledTabItem activetab={activeTab} className='tab' id='tab-code-projects'>
                        <StyledTabs id='code-tab-button' onClick={e => setActiveTab('tab-code-projects')}>Code Work</StyledTabs>
                    </StyledTabItem>
                        <StyledArrowIcon
                            activetab={activeTab}
                        />
                    <StyledTabItem activetab={activeTab} className='tab' id='tab-graphic-projects'>
                        <StyledTabs id='graphic-tab-button' onClick={e => setActiveTab('tab-graphic-projects')}>Graphic Design</StyledTabs>
                    </StyledTabItem>
                </StyledTabList>
                </FogEffectLayer>
            </StyledHeaderWrapper>
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