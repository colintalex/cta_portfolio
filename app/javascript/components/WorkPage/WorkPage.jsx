import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CodeProjectModule from './WorkModules/CodeProjectModule';
import GraphicProjectModule from './WorkModules/GraphicProjectModule';

const WorkPage = () => {
 
    return (
        <div>
            Work Page
            <CodeProjectModule/>
            <GraphicProjectModule/>
        </div>
    )
}

export default WorkPage