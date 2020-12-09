import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GraphicProjectModule = () => {
    const [graphicProjects, setGraphicProjects] = useState([]);

    useEffect (() => {
        axios.get('/api/v1/graphic_projects')
        .then(data => {
            setGraphicProjects(data.data.data)
        })
        .catch(error => console.log(error))

    },[])

    const graphicProjectItems = graphicProjects.map(item => {
        return (
            <div>
                Title: {item.attributes.title},
                Desc: {item.attributes.description}
            </div>
        )
    })
    return (
        <div>
            Graphic Project Module
            {graphicProjectItems}
        </div>
    )
}

export default GraphicProjectModule