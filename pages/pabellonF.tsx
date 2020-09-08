import React, { Component } from 'react';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BasePageWithCard } from '../components/BasePageWithCards';
import Container from 'react-bootstrap/Container';
import { Channels, IconProps, RedesIcons } from '../components/RedesIcons';
export default class PabellonF extends Component {
  render() {
    const title = 'Pabellon F';
    const pabellonFIcon = <FontAwesomeIcon icon={faPodcast} />;
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
    const body: JSX.Element = (
      <Container>
        <p>
          Somos un podcast hecho por estudiantes de la facultad. Exploramos
          distintos temas de investigación que circulan en nuestra facultad,
          entrevistando profesores y estudiantes de nuestra casa de estudios.
        </p>

        <RedesIcons icons={redesIcons} />
      </Container>
    );
    return <BasePageWithCard title={title} icon={pabellonFIcon} body={body} />;
  }
}
