import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./DebtForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {QuestionCircle} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export default function DebtForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);

    const [debt, setDebt] = useState('');
    const [debtCreditCard, setDebtCreditCard] = useState('');
    const [debtStudentLoan, setDebtStudentLoan] = useState('');
    const [debtHomeEquity, setDebtHomeEquity] = useState('');
    const [debtLineOfCredit, setDebtLineOfCredit] = useState('');
    const [debtOther, setDebtOther] = useState('');

    // modal
    const [showTitle, setShowTitle] = useState(false);
    const handleCloseTitle = () => setShowTitle(false);

    const now = 90;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    useEffect(() => {
        dispatch({ type: "HAS_DEBT", debt: debt });
        if (debt === false) {
            dispatch({ type: "DEBT_CREDIT_CARD", debtCreditCard: 0 });
            dispatch({ type: "DEBT_STUDENT_LOAN", debtStudentLoan: 0 });
            dispatch({ type: "DEBT_HOME_EQUITY", debtHomeEquity: 0 });
            dispatch({ type: "DEBT_LINE_OF_CREDIT", debtLineOfCredit: 0 });
            dispatch({ type: "DEBT_OTHER", debtOther: 0 });
        }
    }, [debt]);

    useEffect(() => {
        dispatch({ type: "DEBT_CREDIT_CARD", debtCreditCard: debtCreditCard });
    }, [debtCreditCard]);

    useEffect(() => {
        dispatch({ type: "DEBT_STUDENT_LOAN", debtStudentLoan: debtStudentLoan });
    }, [debtStudentLoan]);

    useEffect(() => {
        dispatch({ type: "DEBT_HOME_EQUITY", debtHomeEquity: debtHomeEquity });
    }, [debtHomeEquity]);

    useEffect(() => {
        dispatch({ type: "DEBT_LINE_OF_CREDIT", debtLineOfCredit: debtLineOfCredit });
    }, [debtLineOfCredit]);

    useEffect(() => {
        dispatch({ type: "DEBT_OTHER", debtOther: debtOther });
    }, [debtOther]);


    return (
        <div style={{overflowX: "hidden"}}>
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
                    <h3 className={styles.header}>Do you have any debt?</h3>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={30}
                        onClick={() => {setShowTitle(true)}}
                        style={{position: 'relative', top: '18px', right: '100%'}}
                    />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col xs={6} md={{ span: 6 }} lg={{ span: 3, offset: 3 }}>
                        <Button
                            className="align-button"
                            onClick={() =>
                                setDebt(true)
                            }
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
                                setDebt(false);
                                router.push('/monthlyExpenses');
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
                    <When condition={debt}>
                        <>
                            <br/>
                            <Row>
                                <Col
                                    xs={{ span: 8, offset: 2 }}
                                    md={{ span: 8, offset: 3 }}
                                    lg={{ span: 8, offset: 4 }}
                                >
                                    <h5>Estimate your debts for each category</h5>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col
                                    xs={{ span: 4, offset: 1 }}
                                    md={{ span: 2, offset: 2 }}
                                    lg={{ span: 2, offset: 2 }}
                                >
                                    <h5 className={styles.h5}>Credit cards</h5>
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
                                            placeholder="Credit card"
                                            aria-label="Credit card"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {
                                                setDebtCreditCard(parseInt(e.target.value))
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
                                    <h5 className={styles.h5}>Student loans</h5>
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
                                            placeholder="Student loans"
                                            aria-label="Student loans"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {
                                                setDebtStudentLoan(parseInt(e.target.value))
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
                                    <h5 className={styles.h5}>Home equity loans</h5>
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
                                            placeholder="Home equity loans"
                                            aria-label="Home equity loans"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {
                                                setDebtHomeEquity(parseInt(e.target.value))
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
                                    <h5 className={styles.h5}>Lines of credit</h5>
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
                                            placeholder="Lines of credit"
                                            aria-label="Lines of credit"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {
                                                setDebtLineOfCredit(parseInt(e.target.value))
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
                                    <h5 className={styles.h5}>Other debt</h5>
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
                                            placeholder="Other debt"
                                            aria-label="Other debt"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {
                                                setDebtOther(parseInt(e.target.value))
                                            }}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
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
                                        onClick={()=> {router.push('/monthlyExpenses')}}
                                    >
                                        Next
                                    </Button>{" "}
                                </Col>
                            </Row>
                        </>
                    </When>
                </Choose>
            </Container>
            {/*title*/}
            <Modal show={showTitle} onHide={handleCloseTitle}>
                <Modal.Body>Not including a mortgage on your primary residence</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseTitle}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}
