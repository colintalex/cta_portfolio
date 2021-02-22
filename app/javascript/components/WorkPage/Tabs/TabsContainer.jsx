import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ApiProjectModule from '../WorkModules/ApiProjectModule'
import FullstackProjectModule from '../WorkModules/FullstackProjectModule'
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
    margin: 0px;
    transition: color .6s;
    
    #code-tab-button {
        color: ${props => 
            (props.activetab == 'tab-code-projects') ? '#E1AD5B' : '#1e97cc'
        };
        margin-right: 20px;
    }
    
    #graphic-tab-button {
        color: ${props => 
            (props.activetab == 'tab-graphic-projects') ? '#E1AD5B' : '#1e97cc'
        };
        margin-left: 20px;

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
`

const StyledHeaderWrapper = styled.div`
    background: url(https://media.istockphoto.com/vectors/seamless-wooden-pattern-wood-grain-texture-dense-lines-abstract-white-vector-id1202084477?b=1&k=6&m=1202084477&s=612x612&w=0&h=kJP6WEtSY1-mJkD7tFgX_A7NFX-EZv1hrjxLDpxFdjg=);
    border-radius: 0 0 5px 5px;
    background-size: cover;
`

const FogEffectLayer = styled.div`
    padding: 10px;
    background: #120b01d4;
    border-radius: 0 0 5px 5px;
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
                        <StyledTabs id='code-tab-button' onClick={e => setActiveTab('tab-code-projects')}>Backend Projects</StyledTabs>
                    </StyledTabItem>
                        <StyledArrowIcon
                        id="tab-arrow"
                            activetab={activeTab}
                        />
                    <StyledTabItem activetab={activeTab} className='tab' id='tab-graphic-projects'>
                        <StyledTabs id='graphic-tab-button' onClick={e => setActiveTab('tab-graphic-projects')}>FullStack Projects</StyledTabs>
                    </StyledTabItem>
                </StyledTabList>
                </FogEffectLayer>
            </StyledHeaderWrapper>
            <ApiProjectModule
                activeTab={activeTab}
            />
            <FullstackProjectModule
                activeTab={activeTab}
            />
        </div>
    )
}

export default TabsContainer;