import { Component } from "react";
import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export interface ITitleWithTextProps {
    title: string;
    text: string;
}

export class TitleWithText extends Component<ITitleWithTextProps> {
    render() {
        const { title, text } = this.props;
        return (
            <Container>
            <Row lg={1} md={1} sm={1} xs={1} className="content-md-center">
                <Col>
                <h2 style={{textAlign: "center"}}>
                    {title}
                </h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    {text}
                </Col>
            </Row>
        </Container>
        );
    };
}