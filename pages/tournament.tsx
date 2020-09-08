import React, { Component } from 'react';
import { BasePageWithCard } from '../components/BasePageWithCards';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
export default class Tournament extends Component {
  render() {
    const title = 'Torneos';
    const tournamentsIcon = <FontAwesomeIcon icon={faTrophy} />;
    const body: JSX.Element = (
      <Container>
        <p>
          Desde la CECEN vamos a estar organizando diferentes torneos para poder
          encontrarnos con nuestres compañeres de cursada. Abajo te contamos
          cuáles son! TORNEO DE TETRIS Arrancamos con la nostalgia vintage y te
          invitamos a participar de un torneo de tetris. Sí, así como lees, el
          juego que revolució los años 80 volvió en forma de siglo XXI. Si
          pasaste horas entretenide con este juego (o si lo querés probar a ver
          qué onda) sumate a este torneo. Nunca pensaste que podría jugarse de
          esta forma, te va a encantar!
        </p>
        <h5 className="text-center">
          La primera edición del torneo será el viernes 11/09.
        </h5>
        <h5 className="text-center"> Agendalo ¡!</h5>
        <Button
          variant="primary"
          block
          href={'https://forms.gle/T2VsienuTeyEuS2Z9'}
          target={'_blank'}>
          Para inscribirte completá el formulario
        </Button>
      </Container>
    );
    return (
      <BasePageWithCard title={title} icon={tournamentsIcon} body={body} />
    );
  }
}
