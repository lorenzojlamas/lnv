import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { BasePageWithCard } from '../components/BasePageWithCard';
import Button from 'react-bootstrap/Button';

export default class ExactasJuega extends Component {
  render() {
    const exactasJuegaIcon = <FontAwesomeIcon icon={faGamepad} />;
    const title = 'Exactas juega';

    const body: JSX.Element = (
      <Container>
        <p>
          Somos un grupo de jóvenes independientes de dentro y fuera de la FCEyN
          que ante el contexto de pandemia notó la necesidad de que aparezcan
          espacios virtuales de encuentro. Por eso estamos organizando torneos
          de videojuegos como Age of Empires, Counter Strike y lo que la
          comunidad sugiera! Además transmitimos las partidas por twitch con
          comentaristas de la Facultad. Unite a nuestro servidor de discord y
          seguinos en instagram para enterarte de todo.
        </p>

        <Button
          variant="primary"
          block
          href={'https://linktr.ee/Exactasjuega'}
          target={'_blank'}>
          Seguinos y vení a jugar!
        </Button>
      </Container>
    );

    return (
      <BasePageWithCard title={title} icon={exactasJuegaIcon} body={body} />
    );
  }
}
