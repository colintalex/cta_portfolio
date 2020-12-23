import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CodeProjectModule from './WorkModules/CodeProjectModule';
import GraphicProjectModule from './WorkModules/GraphicProjectModule';
import TabsContainer from './Tabs/TabsContainer';

const WorkPage = () => {
 
    return (
        <div>
            Work Page
            <TabsContainer/>
        </div>
    )
}

export default WorkPage