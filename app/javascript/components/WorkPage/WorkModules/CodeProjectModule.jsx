import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { SiHeroku } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import Carousel from 'react-elastic-carousel';

const StyledProjGridContainer = styled.div`
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    justify-content: space-around;
    padding: 25px;


`

const StyledProjGridModule = styled.div`
    display: inline-block;
    border-radius: 10px;
    background: #888;
    padding: 15px;
`

const StyledProjHeading = styled.h3`
    margin: 5px;
    display: inline;
    font-size: 1.9em;
`

const StyledProjDescription = styled.p`
    margin: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2em;
    grid-column: 1 / 3;
    overflow: scroll;
`

const StyledProjImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-height: 500px;
    border-radius: 5px;
`

const ImageWrapper = styled.div`
    height: 500px;
    width: auto;
    padding-top: 30px;
    margin-bottom: 25px;
`

const StyledProjectContent = styled.div`
    height: 200px;
    display: grid;
    grid-template-columns: 2fr 2fr;
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
    font-size: 1.3em;
`

const StyledHerokuIcon = styled(SiHeroku)`
    color: black;
    height: 20px;
    width: 20px;
`

const StyledGitIcon = styled(FaGithub)`
    color: black;
    height: 30px;
    width: 30px;
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
                        <StyledProjTech>{proj.technology}</StyledProjTech>
                    </StyledtechWrapper>
                    <StyledProjDescription>{proj.description}</StyledProjDescription>
                </StyledProjectContent>
                <ImageWrapper>
                    <Carousel
                        enableAutoPlay autoPlaySpeed={5500}
                        showArrows={false}
                    >
                        {proj.images && proj.images.map(img => <StyledProjImage src={img.url}/>)}
                    </Carousel>
                </ImageWrapper>
                <hr/>
                <StyledLinksWrapper>
                    <a href={proj.github_url}>GitHub Repo <StyledGitIcon/></a>
                    <a href={proj.deploy_url}>Deployment Link <StyledHerokuIcon/></a>
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