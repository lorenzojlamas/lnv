import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { TitleForPagesWithIcon } from './Titles/TitleWithOuthText';
import Layout from './Layout';
import { IBasePageWithCardPropos } from './BasePageWithCard';

export interface IBasePageWithCardsProps {
  cards: IBasePageWithCardPropos[];
  title: string;
}

export class BasePageWithCards extends Component<IBasePageWithCardsProps> {
  render() {
    const { cards, title } = this.props;

    return (
      <Layout title={`Café Noriega - ${title}`}>
        {cards.map((card: IBasePageWithCardPropos) => {
          return (
            <Card bg="secondary" text={'white'}>
              <Card.Header>
                <TitleForPagesWithIcon title={card.title} icon={card.icon} />
              </Card.Header>
              <Card.Body>{card.body}</Card.Body>
            </Card>
          );
        })}
      </Layout>
    );
  }
}
