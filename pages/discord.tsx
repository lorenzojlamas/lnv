import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { BasePageWithCard } from '../components/BasePageWithCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Icon } from '../components/Titles/Icon';
export default class Discord extends Component {
  render() {
    const title = 'Discord';
    const salasDeDiscordIcon = <FontAwesomeIcon icon={faComments} />;
    const discordIcon = <FontAwesomeIcon icon={faDiscord} size="3x" />;
    const discordIconFlip = (
      <FontAwesomeIcon icon={faDiscord} size="3x" flip="horizontal" />
    );
    const styles = {
      paddingTop: '3vh',
      paddingRight: '2vw',
      paddingLeft: '2vw',
    };

    const body: JSX.Element = (
      <Container fluid style={{ ...styles, paddingBottom: '3vh' }}>
        <h5>
          Ya todes conocemos (o estás por conocer) la gran plataforma que es
          Discord. Desde canales de audio hasta plataformas para streaming. La
          comunidad de Exactas está lentamente encontrando un lugar ahí para
          llenar las salas de contenido. Abajo te mostrarmos las salas que hay
          para que puedas unirte!
        </h5>
        <Row lg={3} md={2} sm={1} xs={1} className="justify-content-md-center">
          <Col>
            <h1>Estudio</h1>

            <Button
              variant="secondary"
              block
              href={'https://discord.gg/NgtGE5'}
              target={'_blank'}>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Icon icon={discordIcon} />
                </Col>
                <Col>
                  <h3>Analisis 2 / Mate 3 </h3>
                </Col>
              </Row>
            </Button>

            {/* <Link href={'/asd'}>
              <Button variant="secondary" block>
                <Row>
                  <Col>
                    <h3>Exactas</h3>
                  </Col>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <Icon icon={discordIconFlip} />
                  </Col>
                </Row>
              </Button>
            </Link> */}
          </Col>
          <Col>
            <h1>Entretenimiento </h1>

            <Button
              variant="secondary"
              block
              href={'https://discord.gg/nG5C3P'}
              target={'_blank'}>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Icon icon={discordIcon} />
                </Col>
                <Col>
                  <h3>Noche de juegos</h3>
                </Col>
              </Row>
            </Button>
            <Button
              variant="secondary"
              block
              href={'https://discord.gg/5dUR8G'}
              target={'_blank'}>
              <Row>
                <Col>
                  <h3>Exactas Juega</h3>
                </Col>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Icon icon={discordIconFlip} />
                </Col>
              </Row>
            </Button>
          </Col>
          {/* <Col>
            <h1>Otros</h1>
            <Link href={'/asd'}>
              <Button variant="secondary" block>
                <Row>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <Icon icon={discordIcon} />
                  </Col>
                  <Col>
                    <h3>Alguna comunidad / podcast</h3>
                  </Col>
                </Row>
              </Button>
            </Link>
          </Col> */}
        </Row>
      </Container>
    );
    return (
      <BasePageWithCard title={title} icon={salasDeDiscordIcon} body={body} />
    );
  }
}
