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

export default function SavingsForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [hasSavings, setHasSavings] = useState(false);
    //has life insurance
    const [hasRetirementSavings, setHasRetirementSavings] = useState('');
    const [hasNonRetirementSavings, setHasNonRetirementSavings] = useState('');
    // progress bar
    const now = 85;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;

    useEffect(() => {
        dispatch({ type: "HAS_SAVINGS", hasSavings: hasSavings });
        if (hasSavings === false) {
            dispatch({ type: "HAS_RETIREMENT_SAVINGS", hasRetirementSavings: 0 });
            dispatch({ type: "HAS_NON_RETIREMENT_SAVINGS", hasNonRetirementSavings: 0 });
        }
    }, [hasSavings]);

    useEffect(() => {
        dispatch({ type: "HAS_RETIREMENT_SAVINGS", hasRetirementSavings: hasRetirementSavings });
    }, [hasRetirementSavings]);

    useEffect(() => {
        dispatch({ type: "HAS_NON_RETIREMENT_SAVINGS", hasNonRetirementSavings: hasNonRetirementSavings });
    }, [hasNonRetirementSavings]);

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
            <h2 className={styles.header}>Do you have any savings?</h2>
            <Container>
                <Row>
                    <Col xs={6} md={{ span: 6 }} lg={{ span: 3, offset: 3 }}>
                        <Button
                            className="align-button"
                            onClick={() => {
                                setHasSavings(true);
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
                            onClick={() => {
                                setHasSavings(false);
                            }}
                            style={{ width: "100%" }}
                            variant="outline-primary"
                            size="lg"
                        >
                            No
                        </Button>{" "}
                    </Col>
                </Row>
                <Choose>
                    <When condition={hasSavings}>
                        <>
                            <br/>
                            <Row>
                                <Col
                                    xs={{ span: 4, offset: 1 }}
                                    md={{ span: 2, offset: 2 }}
                                    lg={{ span: 2, offset: 2 }}
                                >
                                    <h5 className={styles.h5}>Retirement savings</h5>
                                </Col>
                                <Col
                                    xs={{ span: 6 }}
                                    md={{ span: 6 }}
                                    lg={{ span: 6 }}
                                >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Retirment Savings"
                                            aria-label="Retirment Savings"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {
                                                setHasRetirementSavings(e.target.value)
                                            }}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col
                                    xs={{ span: 4, offset: 1 }}
                                    md={{ span: 2, offset: 2 }}
                                    lg={{ span: 2, offset: 2 }}
                                >
                                    <h5 className={styles.h5}>Non retirement savings</h5>
                                </Col>
                                <Col
                                    xs={{ span: 6 }}
                                    md={{ span: 6 }}
                                    lg={{ span: 6 }}
                                >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Non Retirement Savings"
                                            aria-label="Non Retirement Savings"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {setHasNonRetirementSavings(e.target.value)}}
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
