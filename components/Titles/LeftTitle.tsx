import { Component } from 'react';
import React from 'react';
// import Container from 'react-bootstrap/Container'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import { TitleWithText } from './TitleWithText';
import { Icon } from './Icon';

export interface ILeftTitleProps {
  name: string;
  icon: JSX.Element;
  text: string;
  styles: any;
  linkTo: string;
}

export class LeftTitle extends Component<ILeftTitleProps> {
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
                <Icon icon={icon} />
              </Col>
              <Col>
                <TitleWithText title={name} text={text} />
              </Col>
            </Row>
          </Button>
        </Link>
      </Container>
    );
  }
}
