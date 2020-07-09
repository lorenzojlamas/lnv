
import { Component } from "react";
import React from "react";

import Container from 'react-bootstrap/Container'

export interface IIconProps {
    icon: JSX.Element;
};

export class Icon extends Component<IIconProps> {
    render() {
        const {icon} = this.props;
        return (
            <Container style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                {icon}
            </Container>
        );
    }
}