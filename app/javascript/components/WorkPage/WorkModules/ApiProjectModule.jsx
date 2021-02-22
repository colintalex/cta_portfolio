import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { GrHeroku } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'
import AwesomeSlider from 'react-awesome-slider'

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

    @media (max-width: 950px){
        grid-template-columns: 1fr;

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
    grid-column: 1 / 4;
    padding-left: 15px;
`

const StyledProjDescription = styled.div`
    margin: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2em;
    grid-column: 1 / 4;
    overflow: scroll;
    height: 200px;
    display: inline-block;
    padding: 0 15px;
`

const StyledProjImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: inherit;
    max-height: 400px;
    border-radius: 5px;
`

const ImageWrapper = styled.div`
    height: auto;
    width: auto;
    padding-top: 30px;
    margin-bottom: 50px;

    .awssld__content img {
        object-fit: contain !important;
        height: 500px;
    }
    .awssld__content{
        background: none;
    }
    .awssld {
        height: 500px;
    }

    button {
        background: #1e97cc63;
        &:hover {
            background: #1e97cc
        }
    }

    @media (max-width: 600px) {
        .awssld__content img{
            height: 300px;
        }
        .awssld {
            height: 300px;
        }
    }
`

const StyledProjectContent = styled.div`
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background: rgb(255 255 255 / 58%);
    padding: 8px;
    border-radius: 5px;

    hr{
        grid-column: 1/ 5;
    }
`

const StyledProjTech = styled.p`
    font-size: 1.7em;
    text-align: end;
    margin: 5px;
`
const StyledtechWrapper = styled.div`
    display: inline-block;
` 

const StyledLinksWrapper = styled.div`
    grid-column: 1 / 3;
    text-align: center;
    font-size: 1.5em;
    margin-top: 25px;
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

const StyledChallenges = styled.div`
    display: inline-block;
    margin: 5px;
`


const ApiProjectModule = ({ activeTab }) => {
    const [codeProjects, setCodeProjects] = useState([]);

    useEffect (() => {
        axios.get('/api/v1/api_projects')
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
                    <StyledProjHeading>{proj.title}</StyledProjHeading>
                    <StyledProjTech className="project-tech" >{proj.technology}</StyledProjTech>
                    <StyledProjDescription className="project-desc">
                        <hr/>
                        <p>{proj.description}</p>
                    </StyledProjDescription>
                    <StyledChallenges>
                        <hr/>
                        Challenges:
                        <ul>
                            {proj.challenges && proj.challenges.map(chal => <li>{chal}</li>)}
                        </ul>
                    </StyledChallenges>
                </StyledProjectContent>
                <ImageWrapper>
                    <AwesomeSlider>
                        {proj.images && proj.images.map(img => <div data-src={img.url}/>)}
                    </AwesomeSlider>
                </ImageWrapper>
                <StyledLinksWrapper className='project-links'>
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

export default ApiProjectModule