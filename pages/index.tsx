import React from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphones,
  faPodcast,
  faTrophy,
  faGamepad,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import { LeftTitle } from '../components/Titles/LeftTitle';
import { RightTitle } from '../components/Titles/RightTitle';

const nocheDeJuegosIcon = <FontAwesomeIcon icon={faHeadphones} size="4x" />;
const salasDeDiscordIcon = <FontAwesomeIcon icon={faComments} size="4x" />;
const pabellonFIcon = <FontAwesomeIcon icon={faPodcast} size="4x" />;
const tournamentsIcon = <FontAwesomeIcon icon={faTrophy} size="4x" />;
const exploraIcon = <FontAwesomeIcon icon={faYoutube} size="4x" />;
const exactasJuegaIcon = <FontAwesomeIcon icon={faGamepad} size="4x" />;
const styles = {
  paddingTop: '3vh',
  paddingRight: '2vw',
  paddingLeft: '2vw',
};

const IndexPage = () => (
  <Layout title="Cafe noriega">
    <Container style={{ paddingBottom: '3vh' }}>
      <LeftTitle
        name="Noche de juegos"
        icon={nocheDeJuegosIcon}
        text="El espacio de reunión donde nos juntamos a jugar y charlar entre amigues y compañeres de cursada "
        styles={styles}
        linkTo="/nocheDeJuegos"
      />
      <RightTitle
        name="Salas de Discord"
        icon={salasDeDiscordIcon}
        text="Sumate en nuestras salas de discord! Tenemos salas para todos los juegos y los espacios!"
        styles={styles}
        linkTo="/discord"
      />
      <LeftTitle
        name="Pabellon F"
        icon={pabellonFIcon}
        text="Un podcast hecho por estudiantess"
        styles={styles}
        linkTo="/pabellonF"
      />
      <RightTitle
        name="Torneos"
        icon={tournamentsIcon}
        text="Shooters, RPG, RTS los torneos de todos los juegos que se te ocurran los podés encontrar acá"
        styles={styles}
        linkTo="/tournament"
      />
      <LeftTitle
        name="Xplora"
        icon={exploraIcon}
        text="Aca vas a poder encontrar entrevistas a investigadores y videos animados que esperamos les despierten la misma curiosidad que a nosotres"
        styles={styles}
        linkTo="/xplora"
      />
      <RightTitle
        name="Exactas juega"
        icon={exactasJuegaIcon}
        text="Sumate a jugar en Exactas"
        styles={styles}
        linkTo="/exactasJuega"
      />
    </Container>
  </Layout>
);

export default IndexPage;
