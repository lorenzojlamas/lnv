import React, { Component } from 'react';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BasePageWithCard } from '../components/BasePageWithCards';
export default class PabellonF extends Component {
  render() {
    const title = 'Pabellon F';
    const pabellonFIcon = <FontAwesomeIcon icon={faPodcast} />;
    const body: JSX.Element = <p>asd</p>;
    return <BasePageWithCard title={title} icon={pabellonFIcon} body={body} />;
  }
}
