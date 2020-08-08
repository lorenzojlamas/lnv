import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { BasePageWithCard } from '../components/BasePageWithCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord }  from '@fortawesome/free-brands-svg-icons'
import { LeftTitle } from '../components/Titles/LeftTitle';
import { RightTitle } from '../components/Titles/RightTitle';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import { Icon } from '../components/Titles/Icon';
export default class Discord extends Component {

  render() {
    const title = 'Discord';
    const salasDeDiscordIcon = <FontAwesomeIcon icon={faComments} />;
    const discordIcon = <FontAwesomeIcon icon={faDiscord} size="3x"/>;
    const discordIconFlip = <FontAwesomeIcon icon={faDiscord} size="3x" flip="horizontal"/>;
    const styles = {
      paddingTop: '3vh',
      paddingRight: '2vw',
      paddingLeft: '2vw',
    };

    const body: JSX.Element = <Container fluid style={{...styles,  paddingBottom: '3vh' }}>
      <Row
        lg={3}
        md={2}
        sm={1}
        xs={1}
        className="justify-content-md-center">
        <Col>
          <h1>
            Estudio
          </h1>
          <Link href={'/asd'}>
            <Button variant="secondary" block>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Icon icon={discordIcon} />
                </Col>
                <Col>
                  <h3>
                  Analisis 2 / Mate 3
                  </h3>
                </Col>
              </Row>
            </Button>
          </Link>
          <Link href={'/asd'}>
            <Button variant="secondary" block>
              <Row>
              <Col>
                  <h3>
                  Exactas
                  </h3>
                </Col>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Icon icon={discordIconFlip} />
                </Col>
              </Row>
            </Button>
          </Link>
        </Col>
        <Col>
          <h1>
          Entretenimiento
          </h1>
          <Link href={'/asd'}>
            <Button variant="secondary" block>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Icon icon={discordIcon} />
                </Col>
                <Col>
                  <h3>
                  Sarlunga de lol
                  </h3>
                </Col>
              </Row>
            </Button>
          </Link>
        </Col>
        <Col>
          <h1>
          Otros
          </h1>
          <Link href={'/asd'}>
            <Button variant="secondary" block>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}>
                  <Icon icon={discordIcon} />
                </Col>
                <Col>
                  <h3>
                  Alguna comunidad / podcast
                  </h3>
                </Col>
              </Row>
            </Button>
          </Link>
        </Col>
      </Row>

    </Container>
    ;
    return (
      <BasePageWithCard title={title} icon={salasDeDiscordIcon} body={body} />
    );
  }
}

