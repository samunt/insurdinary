import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./DobForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import {QuestionCircle} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";


export default function DobForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [showDob, setShowDob] = useState(false);
    const handleCloseDob = () => setShowDob(false);

    const now = 35;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    const [startDate, setStartDate] = useState(new Date());
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
                    <h2 className={styles.header}>What is your date of birth?</h2>
                </Col>
            </Row>
            <Container>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    console.log('form submit dob', startDate)
                    dispatch({ type: "DOB", dob: startDate });
                    router.push('/gender');
                }}>
                    <Row>
                        <Col xs={12} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                className={styles.dobCSS}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={12} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                            <Button
                                className="align-button"
                                style={{ width: "100%" }}
                                variant="outline-primary"
                                size="lg"
                                type="submit"
                            >
                                Next
                            </Button>{" "}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span: 8, offset: 2}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}
                             onClick={() => {setShowDob(true)}}>
                            <h5 className={styles.header}><u>Why do we ask about your date of birth?</u></h5>
                        </Col>
                        <Col xs={1} md={1} lg={1}>
                            <QuestionCircle
                                size={30}
                                onClick={() => {setShowDob(true)}}
                                style={{position: 'relative', top: '10px', right: '100%'}}
                            />
                        </Col>
                    </Row>
                </Form>
            </Container>
            {/*ask about children*/}
            <Modal show={showDob} onHide={handleCloseDob}>
                <Modal.Body>Life insurance companies use a method called “age nearest” to determine the age the policy premiums are based upon. The age nearest method calculates the issue age based on the nearest age to your policy date. For example, if your date of birth is February 20th, 1984 and today’s date is January 20th, 2019, the issue age would be 35, even though your actual age is 34 and you won’t be 35 for another month.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseDob}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
