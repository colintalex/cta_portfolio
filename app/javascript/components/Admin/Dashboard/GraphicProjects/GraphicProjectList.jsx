import React, { useState, useEffect } from 'react'

const GraphicProjectList = ({ graphicProjects }) => {

    const listGraphicProjects = graphicProjects.map(item => {
        var proj = item.attributes
        return (
            <div key={item.id} >
                Title: {proj.title},
                Desc: {proj.description},
                Image: {proj.image_path}
            </div>
        )
    })  

    return (
        <div>
            List of graphic projects
            {listGraphicProjects}
        </div>
    )
}

export default GraphicProjectList