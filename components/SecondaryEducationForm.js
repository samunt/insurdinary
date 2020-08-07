import React, { useContext } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./SecondaryEducationForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function SecondaryEducationForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
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
             </Container>
        </div>
    )
}
