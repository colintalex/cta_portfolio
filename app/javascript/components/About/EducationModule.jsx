import React from 'react'
import styled from 'styled-components'


const StyledEducation = styled.div`
    font-size: 1.3em;

    h3{
        color: #CC851E;
        margin-top 0px;
        margin-bottom: 10px;
    }
    #section-header{
        margin: 0;
        padding-left: 0px;
        font-size: 1.3em;
        color: black;
    }
    #section-details {
        rgb(30, 151, 204);
        padding-left: 5px;
        margin: 0;
    }
    p{
        color: #1e1e1e;
        font-family: 'Roboto', light;
        font-size: 1em;
    }
    @media (max-width: 1200px){
        h3{
            font-size: 1.7em;
        }
        h4 {
            font-size: 1.1em;
        }
    }
    @media (max-width: 900px){
        h3{
            font-size: 1.4em;
        }
        h4 {
            font-size: .9em;
        }
        p {
            font-size: 1em;
        }
        .module {
            padding: 0px !important;
        }
    }
`

const StyledEdList = styled.ul`
    margin: 0px;
    padding-left: 25px;
    font-size: .7em;
    li p {
        margin-top: 10px;
        margin-bottom: 5px;
    }
`

const EducationModule = () => {
    return(
        <StyledEducation>
            <h3 class='module-header'>Education</h3>
            <hr/>
            <div className='module'>
                <h4 id='section-header'>Turing School of Software & Design</h4>
                <h5 id='section-details'>Backend Software Engineering, Jan - Aug 2020</h5>
                <StyledEdList>
                    <li>
                        <p>Over 1200 hrs spent studying and implementing professional, test-driven web development</p>
                    </li>
                    <li>
                        <p>800+ hrs approx on Ruby and Rails dev (Fundamentals to fully-deployed applications)</p>
                    </li>
                    <li>
                        <p>400 hrs approx on exploring new languages/frameworks (Node.js, Python, HTML/CSS, Django, Express, React.js)</p>
                    </li>
                    <li>
                        <p>Prioritized professional workflow, git practices and adhering to TDD design principles throughout every assignment/project.</p>
                    </li>
                    <li>
                        <p>25+ hours in-class focus towards professional and social/empathetic development</p>
                    </li>
                </StyledEdList>
            </div>
            <div className='module'>
                <h4 id='section-header'>Los Alamos Highschool</h4>
                <h5 id='section-details'>Diploma, 2008</h5>
                <StyledEdList>
                    <li>
                        <p>Community Development Program Volunteer</p>
                    </li>
                    <li>
                        <p>Provided acoustic research on nearby skateparks to push development for a local town park</p>
                    </li>
                    <li>
                        <p>29 ACT Score, Strong Mathematic/Logic Orientation</p>
                    </li>
                    
                </StyledEdList>
            </div>
        </StyledEducation>
    )
}

export default EducationModule;