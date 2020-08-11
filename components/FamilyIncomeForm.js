import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./FamilyIncomeForm.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {DispatchContext, FormContext} from "../contexts/FormContext";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";

export default function FamilyIncomeForm() {
    const now = 55;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    const dispatch = useContext(DispatchContext);
    const form = useContext(FormContext);
    const router = useRouter();
    const [yourIncome, setYourIncome] = useState('');
    const [spouseIncome, setSpouseIncome] = useState('');

    useEffect(() => {
        dispatch({ type: "YOUR_INCOME", yourIncome: yourIncome });
    }, [yourIncome]);
    useEffect(() => {
        dispatch({ type: "SPOUSE_INCOME", spouseIncome: spouseIncome });
    }, [spouseIncome]);

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
                <Col
                    xs={{ span: 10, offset: 1 }}
                    md={{ span: 10, offset: 1 }}
                    lg={{ span: 10, offset: 1 }}
                >
                    <h2 className={styles.header}>What is your family's annual income (before taxes)? </h2>
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col
                        xs={{ span: 4 }}
                        md={{ span: 2, offset: 2 }}
                        lg={{ span: 2, offset: 2 }}
                    >
                        <h5 className={styles.h5}>You</h5>
                    </Col>
                    <Col
                        xs={{ span: 5 }}
                        md={{ span: 5 }}
                        lg={{ span: 5 }}
                    >
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Your Income"
                                aria-label="Your Income"
                                aria-describedby="basic-addon2"
                                onChange={(e) => {setYourIncome(parseInt(e.target.value))}}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <br/>
                { form.spouse ?
                <Row>
                    <Col
                        xs={{ span: 4 }}
                        md={{ span: 2, offset: 2 }}
                        lg={{ span: 2, offset: 2 }}
                    >
                        <h5 className={styles.h5}>Spouse</h5>
                    </Col>
                    <Col
                        xs={{ span: 5 }}
                        md={{ span: 5 }}
                        lg={{ span: 5 }}
                    >
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Spouse Income"
                                aria-label="Spouse Income"
                                aria-describedby="basic-addon2"
                                onChange={(e) => {setSpouseIncome(parseInt(e.target.value))}}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                    : null }
                <br/>
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
                            onClick={(e) => {
                                e.preventDefault;
                                router.push("/rentOrOwn")
                            }}
                        >
                            Next
                        </Button>{" "}
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
