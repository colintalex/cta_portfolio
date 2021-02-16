import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { GrHeroku } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'
import Carousel from 'react-elastic-carousel';

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
    background: rgb(80,80,79);
    background: linear-gradient(0deg,rgb(0 0 0 / 80%) 30%,rgb(181 134 62 / 95%) 100%);
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

const StyledProjTech = styled.p`
    font-size: 1.7em;
    margin: 5px;
`
const StyledtechWrapper = styled.div`
    display: inline-block;
    text-align: end;
` 

const StyledLinksWrapper = styled.div`
    grid-column: 1 / 3;
    text-align: center;
    font-size: 1.8em;
    a {
        text-decoration: none;
        color: #a9a9a9;
        margin: 0 10px;

        transition color .6s;

        &:hover {
            color: black;
        }
        &:hover svg {
            color: black;
        }
    }
`

const StyledHerokuIcon = styled(GrHeroku)`
    color: #E1AD5B;
    height: 40px;
    width: 40px;
    stroke: #CC851E;
    stroke-dasharray: 3000;
    stroke-dashoffset: 0;
    stroke-width: 0.5px;
    vertical-align: bottom;
    transition color .6s;
`

const StyledGitIcon = styled(FaGithub)`
    color: #E1AD5B;
    height: 40px;
    width: 40px;
    stroke: #CC851E;
    stroke-dasharray: 3000;
    stroke-dashoffset: 0;
    stroke-width: 10px;
    vertical-align: bottom;
    transition color .6s;
`


const CodeProjectModule = ({ activeTab }) => {
    const [codeProjects, setCodeProjects] = useState([]);

    useEffect (() => {
        axios.get('/api/v1/code_projects')
        .then(data => {
            setCodeProjects(data.data.data)
        })
        .catch(error => console.log(error))

    },[])

    const codeProjectItems = codeProjects.map(item => {
        var proj = item.attributes
        return (
            <StyledProjGridModule>
                <StyledProjectContent>
                    <div>
                        <StyledProjHeading>{proj.title}</StyledProjHeading>
                    </div>
                    <StyledtechWrapper>
                        <StyledProjTech>Built with: {proj.technology}</StyledProjTech>
                    </StyledtechWrapper>
                    <StyledProjDescription>
                        <hr/>
                        {proj.description}
                    </StyledProjDescription>
                </StyledProjectContent>
                <ImageWrapper>
                    <Carousel>
                        {proj.images && proj.images.map(img => <StyledProjImage src={img.url}/>)}
                    </Carousel>
                </ImageWrapper>
                <StyledLinksWrapper>
                    <a href={proj.github_url}>GitHub Repo <StyledGitIcon/></a>
                    <a href={proj.deploy_url}>Deployment Link<StyledHerokuIcon/></a>
                </StyledLinksWrapper>
            </StyledProjGridModule>
        )
    })

    return (
        <div style={{display: (activeTab == 'tab-code-projects') ? 'block' : 'none'}}>
            <StyledProjGridContainer>
                {codeProjectItems}
            </StyledProjGridContainer>
        </div>
    )
}

export default CodeProjectModule