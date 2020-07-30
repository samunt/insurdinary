import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import styles from './SpouseForm.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {DispatchContext} from "../contexts/FormContext";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { useRouter } from 'next/router'

export default function SpouseForm() {
    const dispatch = useContext(DispatchContext);
    let [hasSpouse, updateHasSpouse] = useState(false);
    const router = useRouter();
    let spouse;
    let spouseAge;
    let nextPage;
    if (hasSpouse) {
        spouse = <Row>
            <Col xs={12} md={12} lg={12}>
                <br/><br/>
                <h3 className={styles.header}>How old is your spouse or partner?</h3>
            </Col>
        </Row>;
        spouseAge = <Row>
            <Col xs={12} md={12} lg={12}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Age</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl/>
                </InputGroup>
            </Col>
        </Row>;
        nextPage = <Row>
            <Col xs={12} md={12} lg={12}>
                <Button
                    onClick={(e) => {
                        dispatch({type: "SPOUSE_AGE", spouseAge: e.target.value});
                        router.push('/children')
                    }}
                    style={{width: '100%'}}
                    variant="outline-primary"
                    size="lg" >Next</Button>{' '}
            </Col>
        </Row>;
    }
    return (
        <div>
            <h2 className={styles.header}>Do you have a spouse or partner?</h2>
            <Container>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Button
                            onClick={() => {
                                dispatch({type: "ADD_SPOUSE", spouse: true});
                                updateHasSpouse(true);
                            }}
                            style={{width: '100%'}}
                            variant="outline-primary"
                            size="lg" >Yes</Button>{' '}
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <Button
                            onClick={() => {
                                dispatch({type: "ADD_SPOUSE", spouse: false});
                                router.push('/children')
                            }}
                            style={{width: '100%'}}
                            variant="outline-primary"
                            size="lg" >No</Button>{' '}
                    </Col>
                </Row>
                {spouse}
                {spouseAge}
                {nextPage}

            </Container>
        </div>
    )
}
