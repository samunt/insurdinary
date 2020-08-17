import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./rentOrOwnForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function rentOrOwnForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [rentOrOwn, setRentOrOwn] = useState('');
    //renter
    const [monthlyRent, setMonthlyRent] = useState('');
    //owner
    const [currentBalance, setCurrentBalance] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');

    const now = 65;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;

    useEffect(() => {
        dispatch({ type: "RENT_OR_OWN", rentOrOwn: rentOrOwn });
    }, [rentOrOwn]);

    useEffect(() => {
        dispatch({ type: "MONTHLY_RENT", monthlyRent: monthlyRent });
        dispatch({ type: "MORTGAGE_CURRENT_BALANCE", mortgageCurrentBalance: 0 });
        dispatch({ type: "MORTGAGE_MONTHLY_PAYMENT", mortgageMonthlyPayment: 0 });
    }, [monthlyRent]);

    useEffect(() => {
        dispatch({ type: "MORTGAGE_CURRENT_BALANCE", mortgageCurrentBalance: currentBalance });
        dispatch({ type: "MONTHLY_RENT", monthlyRent: 0 });
    }, [currentBalance]);

    useEffect(() => {
        dispatch({ type: "MORTGAGE_MONTHLY_PAYMENT", mortgageMonthlyPayment: monthlyPayment });
        dispatch({ type: "MONTHLY_RENT", monthlyRent: 0 });
    }, [monthlyPayment]);

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
                            onClick={() =>
                                setRentOrOwn('Rent')
                            }
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
                            onClick={ () =>
                                setRentOrOwn('Own')
                            }
                            style={{ width: "100%" }}
                            variant="outline-primary"
                            size="lg"
                        >
                            Own
                        </Button>{" "}
                    </Col>
                </Row>
                <Choose>
                    <When condition={rentOrOwn === "Rent"}>
                        <>
                            <br/>
                            <Row>
                                <Col
                                    xs={{span: 10, offset: 1}}
                                    md={{span: 10, offset: 1}}
                                    lg={{span: 10}}
                                >
                                    <h5 className={styles.h5}>What is your monthly rent?</h5>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col
                                    xs={{span: 8, offset: 2}}
                                    md={{span: 6, offset: 3}}
                                    lg={{span: 6, offset: 3}}
                                >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Rent"
                                            aria-label="Rent"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {
                                                setMonthlyRent(parseInt(e.target.value))
                                            }}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col
                                    xs={{ span: 8, offset: 2 }}
                                    md={{ span: 6, offset: 3 }}
                                    lg={{ span: 6, offset: 3 }}
                                >
                                    <Button
                                        style={{ width: "100%" }}
                                        variant="outline-primary"
                                        size="lg"
                                        onClick={() => router.push('/lifeInsurance')}
                                    >
                                        Next
                                    </Button>{" "}
                                </Col>
                            </Row>
                        </>
                    </When>
                    <When condition={rentOrOwn === "Own"}>
                        <>
                            <br/>
                            <Row>
                                <Col
                                    xs={{span: 10, offset: 1}}
                                    md={{span: 10, offset: 1}}
                                    lg={{span: 10}}
                                >
                                    <h5 className={styles.h5}>What is your mortgage amount?</h5>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col
                                    xs={{span: 8, offset: 2}}
                                    md={{span: 6, offset: 3}}
                                    lg={{span: 6, offset: 3}}
                                >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Balance"
                                            aria-label="Balance"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => setCurrentBalance(parseInt(e.target.value))}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col
                                    xs={{span: 8, offset: 2}}
                                    md={{span: 6, offset: 3}}
                                    lg={{span: 6, offset: 3}}
                                >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Monthly Payment"
                                            aria-label="Monthly Payment"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => setMonthlyPayment(parseInt(e.target.value))}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col
                                    xs={{ span: 8, offset: 2 }}
                                    md={{ span: 6, offset: 3 }}
                                    lg={{ span: 6, offset: 3 }}
                                >
                                    <Button
                                        style={{ width: "100%" }}
                                        variant="outline-primary"
                                        size="lg"
                                        onClick={()=>sush('/lifeInsurance')}
                                    >
                                        Next
                                    </Button>{" "}
                                </Col>
                            </Row>
                        </>
                    </When>
                </Choose>
            </Container>
        </div>

    )
}
