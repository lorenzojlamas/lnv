import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGamepad,
} from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { TitleForPagesWithIcon } from '../components/Titles/TitleWithOuthText';

export class ExactasJuega extends Component {

    render() {
        const exactasJuegaIcon = <FontAwesomeIcon icon={faGamepad}  />
        const title = 'Exactas juega Title'
        // const styles = {
        //     paddingTop: "3vh",
        //     paddingRight: "2vw",
        //     paddingLeft: "2vw"
        // };
        return (
            <Card bg='secondary' text={"white"}>
                <Card.Header>
                    <TitleForPagesWithIcon title={title} icon={exactasJuegaIcon}/>
                </Card.Header>
                <Card.Body>
                    {/* <blockquote className="blockquote mb-0"> */}
                    <p>
                Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>

                    {/* </blockquote> */}
                </Card.Body>
                </Card>
        );
    }
}