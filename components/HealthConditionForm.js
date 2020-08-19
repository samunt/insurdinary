import React, {useContext, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./TobaccoForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import {QuestionCircle} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export default function TobaccoForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [showHealthCondition, setShowHealthCondition] = useState(false);
    const handleCloseHealthCondition = () => setShowHealthCondition(false);
    const [showHealthPrice, setShowHealthPrice] = useState(false);
    const handleCloseHealthPrice = () => setShowHealthPrice(false);

    const now = 55;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;

    return (
        <div>
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
            <Row>
                <Col xs={{span: 8, offset: 2}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                    <h2 className={styles.header}>Have you been diagnosed with a serious health condition?</h2>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={30}
                        onClick={() => {setShowHealthCondition(true)}}
                        style={{position: 'relative', top: '18px', right: '100%'}}
                    />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col xs={6} md={{ span: 6 }} lg={{ span: 3, offset: 3 }}>
                        <Button
                            className="align-button"
                            onClick={ () => {
                                dispatch({ type: "HEALTH_CONDITION", healthCondition: true });
                                router.push('/familyIncome');
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
                            onClick={ () => {
                                dispatch({ type: "HEALTH_CONDITION", healthCondition: false });
                                router.push('/familyIncome');
                            }}
                            style={{ width: "100%" }}
                            variant="outline-primary"
                            size="lg"
                        >
                            No
                        </Button>{" "}
                    </Col>
                </Row>
                <Row>
                    <Col
                        xs={{ span: 11 }}
                        md={{ span: 6, offset: 3 }}
                        lg={{ span: 6, offset: 3 }}
                        onClick={() => {setShowHealthPrice(true)}}
                    >
                        <h5 className={styles.header}><u>How does my health affect my price?</u></h5>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={25}
                            onClick={() => {setShowHealthPrice(true)}}
                            style={{position: 'relative', top: '12px', right: '35px'}}
                        />
                    </Col>
                </Row>

            </Container>
            {/*ask about if they have health condition*/}
            <Modal show={showHealthCondition} onHide={handleCloseHealthCondition}>
                <Modal.Body>Select “Yes” if you’ve been diagnosed with any of the following: heart attack, stroke, cancer, lung disease, diabetes, psychiatric illness, AIDS or any other major illness.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseHealthCondition}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about how health condition affects price*/}
            <Modal show={showHealthPrice} onHide={handleCloseHealthPrice}>
                <Modal.Body>Your health tends to be an important factor in your insurance rate. For example, if you’ve suffered from a recent heart attack, you will probably pay higher premiums than someone who hasn’t. Most people aren’t too surprised by this.

                    Insurers are pretty comprehensive when it comes to assessing your health. They’ll ask you about everything from asthma to Alzheimer’s. (You can count on them being very thorough here.) Each of these illnesses has different implications for your life expectancy, and each one gets factored into your life insurance rate.

                    Luckily, getting insurance with a pre-existing health condition isn’t impossible. We’re here to help you through the application process as your questions arise.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseHealthPrice}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
