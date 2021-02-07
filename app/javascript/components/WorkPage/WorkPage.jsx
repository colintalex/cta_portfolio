import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CodeProjectModule from './WorkModules/CodeProjectModule';
import GraphicProjectModule from './WorkModules/GraphicProjectModule';
import TabsContainer from './Tabs/TabsContainer';
import styled from 'styled-components'

const StyledWorkPage = styled.div`
    min-height: 100vh;
    overflow: scroll;
    background: gray;
    max-width: 1400px;
    margin: 0 auto;
`

const WorkPage = () => {
 
    return (
        <StyledWorkPage>
            <TabsContainer/>
        </StyledWorkPage>
    )
}

export default WorkPage