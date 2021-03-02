import React, { Component } from 'react';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import { Channels, IconProps, RedesIcons } from '../components/RedesIcons';
import { BasePageWithCards } from '../components/BasePageWithCards';
export default class PabellonF extends Component {
  render() {
    const title1 = 'Pabellon F';
    const title = 'Zaboo Mafut';
    const pabellonFIcon1 = <FontAwesomeIcon icon={faPodcast} />;
    const redesIcons: IconProps[] = [
      {
        tooltipText: 'Twitter',
        channel: Channels.TWITTER,
        link: 'https://twitter.com/pabe_f?s=20',
      },
      {
        tooltipText: 'Instagram',
        channel: Channels.INSTAGRAM,
        link: 'https://www.instagram.com/pabe_f/',
      },
      {
        tooltipText: 'Spotify',
        channel: Channels.SPOTIFY,
        link:
          'https://open.spotify.com/show/4INhBcpFPMoXWeCPq6eDqg?si=ReXfGz0ASYqGIz6YlpHz7g',
      },
      {
        tooltipText: 'Anchor',
        channel: Channels.ANCHORFM,
        link: 'https://anchor.fm/pabellonf',
      },
      {
        tooltipText: 'Goolge Podcasts',
        channel: Channels.GOOGLEPODCASTS,
        link:
          'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yNDM5M2U2NC9wb2RjYXN0L3Jzcw==',
      },
      {
        tooltipText: 'Sugerencias',
        channel: Channels.SUGERENCIAS,
        link: 'https://forms.gle/GGsV4joZ3QgsXBse8',
      },
    ];
    const redesIcons1: IconProps[] = [
      {
        tooltipText: 'Spotify',
        channel: Channels.SPOTIFY,
        link:
          'https://open.spotify.com/show/3D7YTafrf5mhXXD5SmgdIz?si=-TxmjKlvT6iV_sNSIEQnxQ',
      },
    ];
    const body1: JSX.Element = (
      <Container>
        <p>
          Somos un podcast hecho por estudiantes de la facultad. Exploramos
          distintos temas de investigación que circulan en nuestra facultad,
          entrevistando profesores y estudiantes de nuestra casa de estudios.
        </p>

        <RedesIcons icons={redesIcons} />
      </Container>
    );

    const body: JSX.Element = (
      <Container>
        <p>
          Un podcast de bolsillo para divulgación científica, con datos, papers
          y un presentador de esos que aparecen en los trailers de cine.
        </p>

        <RedesIcons icons={redesIcons1} />
      </Container>
    );

    const cards = [
      {
        title: title1,
        icon: pabellonFIcon1,
        body: body1,
      },
      {
        title: title,
        icon: pabellonFIcon1,
        body: body,
      },
    ];

    return <BasePageWithCards title={title} cards={cards} />;
  }
}
