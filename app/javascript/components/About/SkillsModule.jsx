import React from 'react'
import styled from 'styled-components'

const technology = [
    'Ruby on Rails',
    'React Framework',
    'Express.js',
    'PostgresQL',
    'MySQL',
    'MongoDB',
    'GraphQL',
    'Test Driven Development',
    'Continuous Integration',
    'REST API Design',
]

const languages = [
    'Ruby',
    'Node.js',
    'HTML',
    'CSS',
    'SQL',
    'Python'
]


const SkillsWrapper = styled.div`
    margin: 15px;
    border-radius: 10px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 2fr;

    @media (max-width: 800px){
        grid-template-columns: 1fr 1fr;
    }

    h3{
        text-align: center;
        color: #1e97cc;
        font-size: 1.4em;
        margin: 10px auto;
    }
    ul {
        margin-top: 0px;
        text-align: center;
    }
    li {
        list-style: none;
        display: inline-block;
        padding: 5px;
        margin: 5px 5px;
        background: #5f5f5f;
        color: white;
        font-size: 1.2em;
        border-radius: 5px;
    }

    div{
        background: #C7C7C8;
        border-radius: 15px;
    }
`


const SkillsModule = () => {
    return(
        <SkillsWrapper id='skills-module' className='module'>
            <div>
                <h3 className='module-header'>Languages</h3>
                <ul>
                    {languages.map(skill => <li>{skill}</li>)}
                </ul>
            </div>
            <div>
                <h3>Skilled Areas</h3>
                <ul>
                    {technology.map(skill => <li>{skill}</li>)}
                </ul>
            </div>
        </SkillsWrapper>
    )
}

export default SkillsModule;