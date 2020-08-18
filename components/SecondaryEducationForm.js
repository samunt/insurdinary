import React, {useContext, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./SecondaryEducationForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import {QuestionCircle} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export default function SecondaryEducationForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [showSecondaryEducation, setShowSecondaryEducation] = useState(false);
    const handleCloseSecondaryEducation = () => setShowSecondaryEducation(false);

    const now = 25;
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
                <Col>
                    <h2 className={styles.header}>Do you plan on paying for your children's post secondary education?</h2>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col xs={6} md={{ span: 6 }} lg={{ span: 3, offset: 3 }}>
                        <Button
                            className="align-button"
                            onClick={ () => {
                                dispatch({ type: "PAY_FOR_COLLEGE", payForCollege: true });
                                router.push('/dob');
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
                                dispatch({ type: "PAY_FOR_COLLEGE", payForCollege: false });
                                router.push('/dob');
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
                    <Col xs={{span: 8, offset: 2}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}
                         onClick={() => {setShowSecondaryEducation(true)}}>
                        <h5 className={styles.header}><u>Why do we ask about your children?</u></h5>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={30}
                            onClick={() => {setShowSecondaryEducation(true)}}
                            style={{position: 'relative', top: '15px', right: '100%'}}
                        />
                    </Col>
                </Row>
             </Container>
            {/*ask about children*/}
            <Modal show={showSecondaryEducation} onHide={handleCloseSecondaryEducation}>
                <Modal.Body>If your children’s post-secondary education is something you’re planning to pay for, we’ll want to make sure that your family will have enough money to cover the costs if you were no longer around.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseSecondaryEducation}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
