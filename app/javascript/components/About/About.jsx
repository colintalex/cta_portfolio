import React from 'react'
import styled from 'styled-components'
import ProfilePhoto from '../../../../public/profile.jpeg'
import EducationModule from './EducationModule'
import SkillsModule from './SkillsModule'
import WorkModule from './WorkModule'

const StyledAboutPage = styled.div`
    min-height: 90vh;
    overflow: scroll;
    max-width: 1200px;
    font-family: 'Big Shoulders Display', light;
    margin: 10px auto;
    border-radius: 15px;

    .module-header{
        text-align: center;
    }

    div#top-row {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 15px;
        margin: 15px;
    }

    div#bottom-row {
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
        margin: 15px;
        
        div{
            width: auto;
            border-radius: 15px;
            background: #C7C7C8;
            padding: 15px;
            color: #e2e2e2;
            backdrop-filter: drop-shadow(2px 10px 6px black);
        }
    }

    @media (max-width: 1200px){
        max-width: 1000px;
        #top-row{
            margin: 0 30px;
            img {
                width: 300px;
                height: 300px;
            }
        }
    }

    @media (max-width: 800px){
        max-width: 750px;
        #top-row{
            grid-template-columns: 1fr !important;
        }
        #bottom-row{
            grid-template-columns: 1fr !important;
        }
    }

`

const StyledPhotoWrapper = styled.div`
    height: auto;
    width: auto;
    display: flex;
    img { 
        border-radius: 100%;
    }
`

const QuoteWrapper = styled.div`
    width: auto;
    border-radius: 30px;
    display: grid;
    background: url(https://media.istockphoto.com/vectors/seamless-wooden-pattern-wood-grain-texture-dense-lines-abstract-white-vector-id1202084477?b=1&k=6&m=1202084477&s=612x612&w=0&h=kJP6WEtSY1-mJkD7tFgX_A7NFX-EZv1hrjxLDpxFdjg=);
    grid-template-rows: .2fr 1fr;
    backdrop-filter: drop-shadow(2px 10px 6px black);
    justify-self: center;
    align-self: center;
    border-radius: 15px;
`

const Quote = styled.div`
    padding: 10px 10px 0 10px;
    color: black;
    height: 100px;
    background: #CC851Eed;
    height: 100%;
    border-radius: 15px 15px 0 0;

    h3{
        font-size: 2.1em;
        margin: 5px 0;
        text-align: center;
    }
    h4{
        font-size: 1.5em;
        text-align: center;
        margin-left: 30px;
        margin-top: 5px;
    }
    @media (max-width: 1200px){
        h3{
            font-size: 1.7em;
        }
        h4 {
            font-size: 1.4em;
        }
    }
    @media (max-width: 900px){
        h3{
            font-size: 1.5em;
        }
        h4 {
            font-size: 1.1em;
        }
    }

    @media (max-width: 400px) {
        h3{
            text-align: center;
        }
        h4 {
            text-align: center;
        }
    }
    `

const StyledImg = styled.img`
    height: 95%;
    width: 95%;
    margin: auto;
    border: black 2px solid;
`

const StyledBio = styled.div`
    padding: 20px;
    font-size: 1.1em;
    color: #1e1e1e;
    background: #C7C7C8;
    border-radius: 0 0 15px 15px;
    font-family: 'Roboto', medium;
`




const AboutPage = () => {
    return (
        <StyledAboutPage>
            <div id='top-row'>
                <StyledPhotoWrapper id='profile-photo-wrapper'>
                    <StyledImg id='profile-photo' src={ProfilePhoto}/>
                </StyledPhotoWrapper>
                <QuoteWrapper>
                    <Quote>
                        <h3>I have no special talent. I am only passionately curious.</h3>
                        <h4>- Albert Einstein</h4>
                    </Quote>
                    <StyledBio>
                        <p>As far back as I can remember, I was always building or fixing something. Whether it was renovations/repairs in the house, fixing bicycles or making a go-kart: there was always something brewing. I was blessed to have a workshop to tinker around in, which naturally grew my creative cravings.
                        Fixing and building was my escape for the stresses of growing up, and to this day, my passionate focus.</p>
                    </StyledBio>
                </QuoteWrapper>
            </div>
            <SkillsModule>

            </SkillsModule>
            <div id='bottom-row'>
                <EducationModule/>
                <WorkModule/>
            </div>
        </StyledAboutPage>
    )
}

export default AboutPage;