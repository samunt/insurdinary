import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./rentOrOwnForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";


export default function rentOrOwnForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [rentOrOwn, setRentOrOwn] = useState('');
    //renter
    const [monthlyRent, setMonethlyRent] = useState('');
    //owner
    const [currentBalance, setCurrentBalance] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');

    const now = 50;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    useEffect(() => {
        dispatch({ type: "RENT_OR_OWN", rentOrOwn: rentOrOwn });
    }, [rentOrOwn]);

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
            <h2 className={styles.header}>Do you rent or own your primary resident?</h2>
            <Container>
                <Row>
                    <Col xs={6} md={{ span: 6 }} lg={{ span: 3, offset: 3 }}>
                        <Button
                            className="align-button"
                            onClick={() => {
                                setRentOrOwn('Rent');
                            }}
                            style={{ width: "100%" }}
                            variant="outline-primary"
                            size="lg"
                        >
                            Rent
                        </Button>{" "}
                    </Col>
                    <Col xs={6} md={{ span: 6 }} lg={{ span: 3 }}>
                        <Button
                            className="align-button"
                            onClick={ () => {
                                setRentOrOwn('Own');
                            }}
                            style={{ width: "100%" }}
                            variant="outline-primary"
                            size="lg"
                        >
                            Own
                        </Button>{" "}
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
