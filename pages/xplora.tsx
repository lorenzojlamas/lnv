import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { BasePageWithCard } from '../components/BasePageWithCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { IconProps, RedesIcons, Channels } from '../components/RedesIcons';

export default class Xplora extends Component {
  render() {
    const exactasJuegaIcon = <FontAwesomeIcon icon={faYoutube} />;
    const title = 'Xplora';
    const redesIcons: IconProps[] = [
      {
        tooltipText: 'Canal de YouTube',
        channel: Channels.YOUTUBE,
        link: 'https://www.youtube.com/c/XploraSnacksdeCiencia',
      },
      {
        tooltipText: 'Twitter',
        channel: Channels.TWITTER,
        link: 'https://twitter.com/xplora_ciencia',
      },
      {
        tooltipText: 'Instagram',
        channel: Channels.INSTAGRAM,
        link: 'https://www.instagram.com/xplora.ciencia/',
      },
      {
        tooltipText: 'Facebook',
        channel: Channels.FACEBOOK,
        link: 'https://www.facebook.com/xplora.ciencia/',
      },
    ];
    const body: JSX.Element = (
      <Container>
        <p>
          Somos un canal de YT de difusión cientifica que creemos que la ciencia
          tiene que estar al alcance de todes. Aca vas a poder encontrar
          entrevistas a investigadores y videos animados que esperamos les
          despierten la misma curiosidad que a nosotres y que podamos seguir
          investigando juntes sobre la ciencia que tanto tiene para enseñarnos,
          y nosotros, mucho más para aprender.
        </p>
        <p>¡Seguinos en nuestras redes para contenido semanal!</p>
        <RedesIcons icons={redesIcons} />
      </Container>
    );
    return (
      <BasePageWithCard title={title} icon={exactasJuegaIcon} body={body} />
    );
  }
}
