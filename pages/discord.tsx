import React, { Component } from 'react';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { BasePageWithCard } from '../components/BasePageWithCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Discord extends Component {
  render() {
    const title = 'Discord';
    const salasDeDiscordIcon = <FontAwesomeIcon icon={faComments} />;
    const body: JSX.Element = <p>asd</p>;
    return (
      <BasePageWithCard title={title} icon={salasDeDiscordIcon} body={body} />
    );
  }
}
