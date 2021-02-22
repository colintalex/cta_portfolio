import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ApiProjectModule from './WorkModules/ApiProjectModule';
import FullstackProjectModule from './WorkModules/FullstackProjectModule';
import TabsContainer from './Tabs/TabsContainer';
import styled from 'styled-components'

const StyledWorkPage = styled.div`
    min-height: 90vh;
    overflow: scroll;
    // background: #E1AD5B;
    max-width: 1400px;
    font-family: 'Big Shoulders Display', light;
    margin: 10px auto;
    border-radius: 0 0 5px 5px;
    margin-top: 0px;

    

    #tabs-container{
        margin-top: 0px;
    }

    @media (max-width: 900px){
        margin: 0px;
        h2 {
            font-size: 1.7em;
        }
        h3 {
            font-size: 1.5em;
        }
        .project-tech {
            font-size: 1em;
        }
        img {
            max-width: 600px;
        }
        .project_desc {
            font-size: 1em;
            height: 100px;
        }
        #work-header {
            h2 {
                margin: 5px 0;
            }
            ul {
                margin: 5px 0;
            }
        }
        #tabs-container button {
            font-size: 1.5em;
        }
        .tab {
            margin: 0 15px;
        }
        #tab-arrow {
            width: 30px;
            height: 30px;
        }
        .project-links {
            font-size: 1.2em;
            svg {
                width: 30px;
                height: 30px;
            }
        }
    }

    @media (max-width: 400px){
        img {
            max-width: 350px;
            max-height: 300px;
        }
    }
`

const WorkPage = () => {
 
    return (
        <StyledWorkPage>
            <TabsContainer/>
        </StyledWorkPage>
    )
}

export default WorkPage