import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeProjectModule from '../WorkModules/CodeProjectModule'
import GraphicProjectModule from '../WorkModules/GraphicProjectModule'

const TabsContainer = () => {
    const [ activeTab, setActiveTab ] = useState('tab-code-projects')

    return (
        <div className='' id='tabs-container'>
            <ul>
                <li className='tab' id='tab-code-projects'>
                    <button onClick={e => setActiveTab('tab-code-projects')}>Code Work</button>
                </li>
                <li className='tab' id='tab-graphic-projects'>
                    <button onClick={e => setActiveTab('tab-graphic-projects')}>Graphic Design</button>
                </li>
            </ul>
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