import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
  faDiscord,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { faPodcast, faQuestion } from '@fortawesome/free-solid-svg-icons';

var Center = require('react-center');

export interface IconProps {
  tooltipText: string;
  link: string;
  channel: Channels;
}

export interface IRedesIcons {
  icons: IconProps[];
}

export enum Channels {
  YOUTUBE = 'youtube',
  TWITTER = 'twitter',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  DISCORD = 'discord',
  SPOTIFY = 'spotify',
  ANCHORFM = 'anchorFm',
  GOOGLEPODCASTS = 'googlePodcast',
  SUGERENCIAS = 'sugerencias',
}

export class RedesIcons extends Component<IRedesIcons> {
  render() {
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} size="2x" />;
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="2x" />;
    const instragramIcon = <FontAwesomeIcon icon={faInstagram} size="2x" />;
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} size="2x" />;
    const discordIcon = <FontAwesomeIcon icon={faDiscord} size="2x" />;
    const spotifyIcon = <FontAwesomeIcon icon={faSpotify} size="2x" />;
    const anchorFmIcon = <FontAwesomeIcon icon={faPodcast} size="2x" />;
    const sugerenciasIcon = <FontAwesomeIcon icon={faQuestion} size="2x" />;

    // TODO: Sacar este any horrible
    const channels: any = {
      youtube: youtubeIcon,
      twitter: twitterIcon,
      facebook: facebookIcon,
      instagram: instragramIcon,
      discord: discordIcon,
      spotify: spotifyIcon,
      anchorFm: anchorFmIcon,
      googlePodcast: anchorFmIcon,
      sugerencias: sugerenciasIcon,
    };

    const { icons } = this.props;
    const redesIcons = icons.map((iconProps: IconProps) => (
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id="tooltip-bottom">{iconProps.tooltipText}</Tooltip>
        }>
        <Button
          size="lg"
          variant="secondary"
          href={iconProps.link}
          target={'_blank'}>
          {channels[iconProps.channel]}
        </Button>
      </OverlayTrigger>
    ));
    return <Center>{redesIcons}</Center>;
  }
}
