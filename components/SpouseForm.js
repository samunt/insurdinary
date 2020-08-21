import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./SpouseForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {DispatchContext, FormContext} from "../contexts/FormContext";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import { QuestionCircle } from 'react-bootstrap-icons'
import Modal from "react-bootstrap/Modal"

function SpouseForm() {
    let [hasSpouse, updateHasSpouse] = useState('');
    let [spouseAge, updateSpouseAge] = useState("");
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const form = useContext(FormContext);
    const now = 10;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    // modal stuff
    const [showTitle, setShowTitle] = useState(false);
    const handleCloseTitle = () => setShowTitle(false);
    const [showWhyWeAsk, setShowWhyWeAsk] = useState(false);
    const handleCloseWhyWeAsk = () => setShowWhyWeAsk(false);


    useEffect(() => {
        dispatch({ type: "ADD_SPOUSE", spouse: hasSpouse });
        }, [hasSpouse]);

    return (
        <div style={{overflowX: "hidden"}}>
            <br />
            <Row>
                <Col
                    xs={{ span: 10, offset: 1 }}
                    md={{ span: 10, offset: 1 }}
                    lg={{ span: 10, offset: 1 }}
                >
                    {progressInstance}
                </Col>
            </Row>
            <br />

            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(e);
                    router.push("/children");
                }}
            >
                <br />
                <Row>
                    <Col xs={{span: 6, offset: 3}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                        <h2 className={styles.header}>Do you have a spouse or partner?</h2>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={30}
                            onClick={() => {setShowTitle(true)}}
                            style={{position: 'relative', top: '15px'}}
                        />
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col xs={6} md={{ span: 6 }} lg={{ span: 3, offset: 3 }}>
                            <Button
                                className="align-button"
                                onClick={ () => {
                                    updateHasSpouse(true);
                                }}
                                style={{ width: "100%" }}
                                variant="outline-primary"
                                size="lg"
                            >
                                Yes
                            </Button>{" "}
                        </Col>
                        <Col xs={6} md={{ span: 6 }} lg={{ span: 3 }}>
                            <Button
                                className="align-button"
                                onClick={ (e) => {
                                    e.preventDefault();
                                    updateHasSpouse(false);
                                    router.push("/children");
                                }}
                                style={{ width: "100%" }}
                                variant="outline-primary"
                                type="submit"
                                size="lg"
                            >
                                No
                            </Button>{" "}
                        </Col>
                    </Row>
                    <Choose>
                        <When condition={hasSpouse === false || hasSpouse === ''}>
                            <br/>
                            <Row onClick={() => {setShowWhyWeAsk(true)}}>
                                <Col xs={{span: 6, offset: 3}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                                    <h5 className={styles.header}>Why do we ask about your spouse?</h5>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                    <QuestionCircle
                                        size={20}
                                        style={{position: 'relative', right: '35px', top: '10px'}}
                                    />
                                </Col>
                            </Row>
                        </When>
                    </Choose>
                </Container>
            </Form>
            {hasSpouse === true && (
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
                            <br />
                            <br />
                            <h3 className={styles.header}>
                                How old is your spouse or partner?
                            </h3>
                        </Col>
                    </Row>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            dispatch({ type: "SPOUSE_AGE", spouseAge: spouseAge });
                            router.push("/children");
                        }}
                    >
                        <Row>
                            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Age</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        onChange={(e) => {
                                            updateSpouseAge(e.target.value);
                                        }}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
                                <Button
                                    style={{ width: "100%" }}
                                    type="submit"
                                    variant="outline-primary"
                                    size="lg"
                                >
                                    Next
                                </Button>{" "}
                            </Col>
                        </Row>
                        <br/>
                        <Row onClick={() => {setShowWhyWeAsk(true)}}>
                            <Col xs={{span: 6, offset: 3}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                                <h5 className={styles.header}>Why do we ask about your spouse?</h5>
                            </Col>
                            <Col xs={1} md={1} lg={1}>
                                <QuestionCircle
                                    size={20}
                                    style={{position: 'relative', right: '35px', top: '10px'}}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Container>
            )}
            {/*title modal*/}
            <Modal show={showTitle} onHide={handleCloseTitle}>
                <Modal.Body>Select “Yes” if you are currently married, engaged, in a common-law relationship or have a partner that you share finances with. If so, make sure to incorporate both you and your partner when we ask about your finances and expenses.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseTitle}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*  ask about partner  */}
            <Modal show={showWhyWeAsk} onHide={handleCloseWhyWeAsk}>
                <Modal.Header>Why do we ask about your partner</Modal.Header>
                <Modal.Body>Life insurance is all about protecting the people you love. If there are people who rely on you for financial support, a life insurance policy will make sure they have enough money if something unexpected happens to you and your income is no longer there.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseWhyWeAsk}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SpouseForm;
