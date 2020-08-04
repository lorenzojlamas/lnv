import React from 'react';
import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

export class Footer extends Component {
  render() {
    const instragramIcon = <FontAwesomeIcon icon={faInstagram} size="2x" />;
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} size="2x" />;
    return (
      <Container className="footer footer-content mt-auto py-2 bg-dark text-white">
        <div className="footer-copyright text-center">
          <Row
            lg={3}
            md={3}
            sm={3}
            xs={3}
            className="justify-content-md-center">
            <Col style={{ textAlign: 'left' }}>© 2020 Copyright: CECEN</Col>

            <Col style={{ textAlign: 'right' }}>
              Redes:
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Instagram</Tooltip>}>
                <Button
                  size="sm"
                  variant="dark"
                  href={'https://www.instagram.com/identidadexactas/'}
                  target={'_blank'}>
                  {instragramIcon}
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Facebook</Tooltip>}>
                <Button
                  size="sm"
                  variant="dark"
                  href={'https://www.facebook.com/IdentidadExactasUba'}
                  target={'_blank'}>
                  {facebookIcon}
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
