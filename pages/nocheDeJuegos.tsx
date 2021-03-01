import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { BasePageWithCard } from '../components/BasePageWithCard';
import Container from 'react-bootstrap/Container';
import { Channels, IconProps, RedesIcons } from '../components/RedesIcons';

export default class NocheDeJuegos extends Component {
  render() {
    const title = 'Noche de juegos';
    const nocheDeJuegosIcon = <FontAwesomeIcon icon={faHeadphones} />;
    const redesIcons: IconProps[] = [
      {
        tooltipText: 'Instagram',
        channel: Channels.INSTAGRAM,
        link: 'https://www.instagram.com/ndj.exactas.uba/',
      },
      {
        tooltipText: 'Facebook',
        channel: Channels.FACEBOOK,
        link: 'https://www.facebook.com/ndj.exactas.uba',
      },
      {
        tooltipText: 'Discord',
        channel: Channels.DISCORD,
        link: 'https://discord.gg/TJfv4AF',
      },
    ];
    const body: JSX.Element = (
      <Container>
        <p>
          La Noche de Juegos es un evento bimensual donde les estudiantes de
          exactas nos juntamos a compartir varias horas con diversos juegos. Es
          una actividad que empezó hace varios años de la mano de la ComCom y la
          hemos transformado en una propuesta virtual para no perder la magia.
          Éstos juegos incluyen el codenames, catan, ajedrez, pictonary, among
          us y muchos otros más.
        </p>
        <p>
          Seguinos en nuestras redes y participá de la próxima Noche de Juegos!
        </p>
        <RedesIcons icons={redesIcons} />
      </Container>
    );
    return (
      <BasePageWithCard title={title} icon={nocheDeJuegosIcon} body={body} />
    );
  }
}
