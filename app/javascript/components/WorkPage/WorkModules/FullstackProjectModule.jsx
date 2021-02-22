import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components'

const StyledProjGridContainer = styled.div`
    display: grid !important;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    justify-content: space-around;
    padding: 25px;

    hr {
        border-color: gray;
        margin-top: 0px;
    }
`

const StyledProjGridModule = styled.div`
    display: inline-block;
    border-radius: 10px;
    background: #35868C;
    padding: 15px;
`

const StyledProjHeading = styled.h3`
    margin: 5px;
    display: inline;
    font-size: 2em;
`

const StyledProjDescription = styled.p`
    margin: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2em;
    grid-column: 1 / 3;
    overflow: scroll;
    height: 150px;
`

const StyledProjImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    max-height: 600px;
    border-radius: 5px;
`

const ImageWrapper = styled.div`
    height: auto;
    width: auto;
    padding-top: 30px;
    margin-bottom: 25px;
`

const StyledProjectContent = styled.div`
    height: auto;
    display: grid;
    grid-template-columns: 2fr 2fr;
    background: rgb(255 255 255 / 58%);
    padding: 8px;
    border-radius: 5px;
`

const FullstackProjectModule = ({ activeTab }) => {
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
            <StyledProjGridModule>
                <StyledProjectContent>
                    <div>
                        <StyledProjHeading>{proj.title}</StyledProjHeading>
                    </div>
                    <StyledProjDescription>
                        <hr/>
                        {proj.description}
                    </StyledProjDescription>
                </StyledProjectContent>
                <ImageWrapper>
                    <Carousel
                        enableAutoPlay autoPlaySpeed={5500}
                    >
                        {proj.images && proj.images.map(img => <StyledProjImage src={img.url}/>)}
                    </Carousel>
                </ImageWrapper>
            </StyledProjGridModule>
        )
    })
    return (
        <div
            style={{display: (activeTab == 'tab-graphic-projects') ? 'block' : 'none'}}
        >
            <StyledProjGridContainer>
                {graphicProjectItems}
            </StyledProjGridContainer>
        </div>
    )
}

export default FullstackProjectModule