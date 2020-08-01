import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { TitleForPagesWithIcon } from './Titles/TitleWithOuthText';

export interface IBasePageWithCardPropos {
    title: string;
    icon: JSX.Element;
    body: JSX.Element;
}

export class BasePageWithCard extends Component<IBasePageWithCardPropos> {


    render() {
        const {title, icon, body} = this.props;
        return (

                <Card bg='secondary' text={"white"}>
                <Card.Header>
                    <TitleForPagesWithIcon title={title} icon={icon}/>
                </Card.Header>
                <Card.Body>
                    {body}
                </Card.Body>
                </Card>
        );
    }
}
