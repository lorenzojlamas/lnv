import React, { Component } from 'react';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import { Channels, IconProps, RedesIcons } from '../components/RedesIcons';
import { BasePageWithCards } from '../components/BasePageWithCards';
export default class PabellonF extends Component {
  render() {
    const title1 = 'Xplora';
    const title = 'Sebas Kamin';
    const pabellonFIcon1 = <FontAwesomeIcon icon={faPodcast} />;
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
    const redesIcons1: IconProps[] = [
      {
        tooltipText: 'Facebook',
        channel: Channels.FACEBOOK,
        link: 'https://beacons.page/sebakamin',
      },
    ];
    const body1: JSX.Element = (
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

    const body: JSX.Element = (
      <Container>
        <p>
          Soy un estudiante de la facu, que desde siempre tuvo una pasión
          incondicional por los animales y espero poder transmitírtela a vos
          también. Tanto en mi cuenta de IG como de YouTube subo información
          todos los días sobre distintas especies, muchas de las cuales seguro
          nunca te enteraste ni de que existían. Soy fiel creyente de que para
          querer cuidar y conservar a la naturaleza primero hay que conocerla,
          así que este es el granito de arena que puedo aportar para eso.
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
