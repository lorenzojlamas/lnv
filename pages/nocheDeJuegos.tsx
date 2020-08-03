import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { BasePageWithCard } from '../components/BasePageWithCards';

export default class NocheDeJuegos extends Component {
  render() {
    const title = 'Noche de juegos';
    const nocheDeJuegosIcon = <FontAwesomeIcon icon={faHeadphones} />;
    const body: JSX.Element = <p>asd</p>;
    return (
      <BasePageWithCard title={title} icon={nocheDeJuegosIcon} body={body} />
    );
  }
}
