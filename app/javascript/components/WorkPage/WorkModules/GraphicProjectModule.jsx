import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GraphicProjectModule = ({ activeTab }) => {
    const [graphicProjects, setGraphicProjects] = useState([]);

    useEffect (() => {
        axios.get('/api/v1/graphic_projects')
        .then(data => {
            setGraphicProjects(data.data.data)
        })
        .catch(error => console.log(error))

    },[])

    const graphicProjectItems = graphicProjects.map(item => {
        var proj = item.attributes
        return (
            <div>
                Title: {proj.title},
                Desc: {proj.description} <br/>
                Images: {proj.images && proj.images.map(img => <img src={img} height='150' width='150'/>)}
            </div>
        )
    })
    return (
        <div
            style={{display: (activeTab == 'tab-graphic-projects') ? 'block' : 'none'}}
        >
            Graphic Project Module
            {graphicProjectItems}
        </div>
    )
}

export default GraphicProjectModule