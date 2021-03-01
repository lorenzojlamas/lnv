import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { TitleForPagesWithIcon } from './Titles/TitleWithOuthText';
import Layout from './Layout';

export interface IBasePageWithCardPropos {
  title: string;
  icon: JSX.Element;
  body: JSX.Element;
}

export class BasePageWithCard extends Component<IBasePageWithCardPropos> {
  render() {
    const { title, icon, body } = this.props;
    return (
      <Layout title={`Café Noriega - ${title}`}>
        <Card bg="secondary" text={'white'}>
          <Card.Header>
            <TitleForPagesWithIcon title={title} icon={icon} />
          </Card.Header>
          <Card.Body>{body}</Card.Body>
        </Card>
      </Layout>
    );
  }
}
