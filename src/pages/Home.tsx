import React, { Component } from 'react';
import { LeftTitle } from '../components/Titles/LeftTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeadphones,
    faPodcast,
    faTrophy,
    faGamepad,
    faComments
} from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { RightTitle } from '../components/Titles/RightTitle';
export class Home extends Component {

    
    render() {
        const nocheDeJuegosIcon = <FontAwesomeIcon icon={faHeadphones} size="4x"/>
        const salasDeDiscordIcon = <FontAwesomeIcon icon={faComments} size="4x" />
        const pabellonFIcon = <FontAwesomeIcon icon={faPodcast} size="4x" />
        const tournamentsIcon = <FontAwesomeIcon icon={faTrophy} size="4x" />
        const exploraIcon = <FontAwesomeIcon icon={faYoutube} size="4x" />
        const exactasJuegaIcon = <FontAwesomeIcon icon={faGamepad} size="4x" />
        const styles = {
            paddingTop: "3vh",
            paddingRight: "2vw",
            paddingLeft: "2vw"
        };
        return( 
        <Container style={{paddingBottom: "3vh"}}>

            <LeftTitle
            name= 'Noche de juegos'
            icon={nocheDeJuegosIcon}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            styles={styles}
            linkTo='/nocheDeJuegos'
            />
            <RightTitle
            name= 'Salas de Discord'
            icon={salasDeDiscordIcon}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            styles={styles}
            linkTo='/discord'
            />
            <LeftTitle
            name= 'Pabellon F'
            icon={pabellonFIcon}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            styles={styles}
            linkTo='/pabellonF'
            />
            <RightTitle
            name= 'Torneos'
            icon={tournamentsIcon}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            styles={styles}
            linkTo='/tournament'
            />
            <LeftTitle
            name= 'Xplora'
            icon={exploraIcon}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            styles={styles}
            linkTo='/explore'
            />
            <RightTitle
            name= 'Exactas juega'
            icon={exactasJuegaIcon}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            styles={styles}
            linkTo='/exactasJuega'
            />
            </Container>
        );
    }
}