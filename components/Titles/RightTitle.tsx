import { Component } from 'react';
import React from 'react';
// import Container from 'react-bootstrap/Container'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TitleWithText } from './TitleWithText';
import { Icon } from './Icon';
import Link from 'next/link';

export interface IRightTitleProps {
  name: string;
  icon: JSX.Element;
  text: string;
  styles: any;
  linkTo: string;
}

export class RightTitle extends Component<IRightTitleProps> {
  render() {
    const { name, icon, text, styles, linkTo } = this.props;

    return (
      <Container fluid style={styles}>
        <Link href={linkTo}>
          <Button variant="secondary" block>
            <Row
              lg={2}
              md={2}
              sm={2}
              xs={2}
              className="justify-content-md-center">
              <Col>
                <TitleWithText title={name} text={text} />
              </Col>
              <Col>
                <Icon icon={icon} />
              </Col>
            </Row>
          </Button>
        </Link>
      </Container>
    );
  }
}
