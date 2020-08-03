import { Component } from 'react';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

export interface ITitleForPagesWithIconProps {
  title: string;
  icon: JSX.Element;
}

export class TitleForPagesWithIcon extends Component<
  ITitleForPagesWithIconProps
> {
  render() {
    const { title, icon } = this.props;
    return (
      <Container
        fluid
        className="content-md-center"
        style={{ textAlign: 'center' }}>
        <h1>
          {icon} <Badge variant="dark">{title}</Badge>
        </h1>
      </Container>
    );
  }
}
