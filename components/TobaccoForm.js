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
    const [showNicotine, setShowNicotine] = useState(false);
    const handleCloseNicotine = () => setShowNicotine(false);
    const [showUsedToSmoke, setShowUsedToSmoke] = useState(false);
    const handleCloseUsedToSmoke = () => setShowUsedToSmoke(false);

    const now = 50;
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
                    <h2 className={styles.header}>Do you smoke or use nicotine products?</h2>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={30}
                        onClick={() => {setShowNicotine(true)}}
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
                                dispatch({ type: "TOBACCO", tobacco: true });
                                router.push('/healthCondition');
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
                                dispatch({ type: "TOBACCO", tobacco: false });
                                router.push('/healthCondition');
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
                        onClick={() => {setShowUsedToSmoke(true)}}
                    >
                        <h5 className={styles.header}><u>What if I used to smoke?</u></h5>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={30}
                            onClick={() => {setShowUsedToSmoke(true)}}
                            style={{position: 'relative', top: '12px', right: '75px'}}
                        />
                    </Col>
                </Row>
            </Container>
            {/*ask about nicotine*/}
            <Modal show={showNicotine} onHide={handleCloseNicotine}>
                <Modal.Body>Select “Yes” if you’ve used any nicotine products in the past year. Nicotine products include cigarettes, e-cigarettes, cigars, pipes, chewing tobacco, nicotine gum or patches, etc.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseNicotine}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about used to smoke*/}
            <Modal show={showUsedToSmoke} onHide={handleCloseUsedToSmoke}>
                <Modal.Body>An insurance company will consider you a smoker only if you have engaged in smoking over the last 12 months. So if you quit smoking over a year ago, we have good news for you: No matter how long you were smoking for or how often you were smoking, you can specify “No” for this question. Your life insurance premiums will be the same as those for a non-smoker! Wasn’t that an unexpected surprise?</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseUsedToSmoke}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
