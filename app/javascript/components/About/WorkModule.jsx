import React from 'react'
import styled from 'styled-components'

const StyledWork = styled.div`
    font-size: 1.3em;

    h3{
        color: #1e97cc;
        margin-top: 0px;
        margin-bottom: 10px;
    }
    #section-header{
        margin: 0;
        padding-left: 0px;
        font-size: 1.3em;
        color: black;
    }
    #section-details {
        color: #1e97cc;
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

const StyledWorkList = styled.ul`
    margin: 0px;
    padding-left: 25px;
    font-size: .7em;
    li p {
        margin-top: 10px;
        margin-bottom: 5px;
    }
`
const WorkModule = () => {
    return(
        <StyledWork>
            <h3 class='module-header'>Work Experience</h3>
            <div className='module'>
                <h4 id='section-header'>MetroExpress CarWash</h4>
                <h5 id='section-details'>Manager, 2017-2020</h5>
                <StyledWorkList>
                    <li>
                        <p>Developed healthy staff culture alongside co-manager, consistently in top 2% of all Gallup surveys for employee-workplace satisfaction during employment</p>
                    </li>
                    <li>
                        <p>Designated on-site specialist for nearly all technical issues, reducing yearly technical support costs significantly while providing a customized touch for customer facing media.</p>
                    </li>
                    <li>
                        <p>Integrated customer-focused training for all staff members, significantly improving employee engagement while attributing to aggressive, yearly growth.</p>
                    </li>
                    
                </StyledWorkList>
            </div>
            <div className='module'>
                <h4 id='section-header'>Big5 Sporting Goods</h4>
                <h5 id='section-details'>Asst. Manager, 2014-2017</h5>
                <StyledWorkList>
                    <li>
                        <p> Streamlined receiving processes to reduce unload time by 1 hr, improving staff quality standards while effectively reducing waste.</p>
                    </li>
                    <li>
                        <p>Provided technical expertise to reduce inventory/counting errors in a data-dense system.</p>
                    </li>
                    <li>
                        <p>Developed positive, healthy staff culture by utilizing one-on-one training and my passion for engaged learning and teaching.</p>
                    </li>
                    
                </StyledWorkList>
            </div>
            <div className='module'>
                <h4 id='section-header'>Volt Workforce Solutions</h4>
                <h5 id='section-details'>iOS Chat Support, 2012-2014</h5>
                <StyledWorkList>
                    <li>
                        <p>Proven top-performer with a knack for customer satisfaction, consistently top-ranked with an average 98% customer-satisfaction rating.</p>
                    </li>
                    <li>
                        <p>Designated on-site specialist for nearly all technical issues, reducing yearly technical support costs significantly while providing a customized touch for customer facing media.</p>
                    </li>
                    <li>
                        <p>Empathetic and poised to handle crisis, I was also tasked with one-on-one training to provide a helping hand for struggling agents.</p>
                    </li>
                </StyledWorkList>
            </div>
        </StyledWork>
    )
}

export default WorkModule;