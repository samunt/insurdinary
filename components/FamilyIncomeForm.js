import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./FamilyIncomeForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";

export default function FamilyIncomeForm() {
    const now = 55;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    const dispatch = useContext(DispatchContext);
    const router = useRouter();

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
                    <h2 className={styles.header}>What is your family's annual income (before taxes)? </h2>
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col
                        xs={{ span: 5, offset: 1 }}
                        md={{ span: 2, offset: 4 }}
                        lg={{ span: 2, offset: 4 }}
                    >
                        <h5>You</h5>
                    </Col>
                    <Col
                        xs={{ span: 5 }}
                        md={{ span: 2 }}
                        lg={{ span: 2 }}
                    >
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Your Income"
                                aria-label="Your Income"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col
                        xs={{ span: 5, offset: 1 }}
                        md={{ span: 2, offset: 4 }}
                        lg={{ span: 2, offset: 4 }}
                    >
                        <h5>Spouse</h5>
                    </Col>
                    <Col
                        xs={{ span: 5 }}
                        md={{ span: 2 }}
                        lg={{ span: 2 }}
                    >
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Spouse Income"
                                aria-label="Spouse Income"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
