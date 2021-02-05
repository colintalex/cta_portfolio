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
`

const WorkPage = () => {
 
    return (
        <StyledWorkPage>
            <TabsContainer/>
        </StyledWorkPage>
    )
}

export default WorkPage