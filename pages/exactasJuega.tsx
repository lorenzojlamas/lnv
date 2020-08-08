import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import Container from 'react-bootstrap/Container';
import { BasePageWithCard } from '../components/BasePageWithCards';
import Feed from '../components/Instagram/Feed';

var Center = require('react-center');

export default class ExactasJuega extends Component {
  render() {
    const exactasJuegaIcon = <FontAwesomeIcon icon={faGamepad} />;
    const title = 'Exactas juega';
    const body: JSX.Element = (
      <Container>
        <p>
          Where does it come from? Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.
        </p>
        <Center>
          <InstagramEmbed
            url="https://www.instagram.com/p/CBy1JjfpC0-/"
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </Center>
        <Feed
          username="identidadexactas"
          className="Feed"
          loadingClassName="Loading"
        />,
      </Container>
    );
    return (
      <BasePageWithCard title={title} icon={exactasJuegaIcon} body={body} />
    );
  }
}
