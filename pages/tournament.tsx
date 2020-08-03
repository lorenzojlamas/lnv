import React, { Component } from 'react';
import { BasePageWithCard } from '../components/BasePageWithCards';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Tournament extends Component {
  render() {
    const title = 'Torneos';
    const tournamentsIcon = <FontAwesomeIcon icon={faTrophy} />;
    const body: JSX.Element = <p>asd</p>;
    return (
      <BasePageWithCard title={title} icon={tournamentsIcon} body={body} />
    );
  }
}
