import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./DobForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import DatePicker from "react-datepicker";


export default function DobForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
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
                <Form>
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
                                onClick={ () => {
                                    dispatch({ type: "DOB", dob: startDate });
                                    router.push('/gender');
                                }}
                                style={{ width: "100%" }}
                                variant="outline-primary"
                                size="lg"
                            >
                                Next
                            </Button>{" "}
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}
