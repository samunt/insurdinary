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
import Modal from "react-bootstrap/Modal";
import {QuestionCircle} from "react-bootstrap-icons";

export default function SavingsForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [hasSavings, setHasSavings] = useState(false);
    //has life insurance
    const [hasRetirementSavings, setHasRetirementSavings] = useState('');
    const [hasNonRetirementSavings, setHasNonRetirementSavings] = useState('');
    // modal
    const [showTitle, setShowTitle] = useState(false);
    const handleCloseTitle = () => setShowTitle(false);
    const [showOwnABusiness, setShowOwnABusiness] = useState(false);
    const handleCloseOwnABusiness = () => setShowOwnABusiness(false);
    const [showBenefitPension, setShowBenefitPension] = useState(false);
    const handleCloseBenefitPension = () => setShowBenefitPension(false);
    const [showHasRetirementSavings, setShowHasRetirementSavings] = useState(false);
    const handleCloseHasRetirementSavings = () => setShowHasRetirementSavings(false);
    const [showHasNonRetirementSavings, setShowHasNonRetirementSavings] = useState(false);
    const handleCloseHasNonRetirementSavings = () => setShowHasNonRetirementSavings(false);

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
            <Row>
                <Col xs={{span: 8, offset: 2}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                    <h2 className={styles.header}>Do you have any savings?</h2>
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
                                router.push('/debt');
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
                                                setHasRetirementSavings(parseInt(e.target.value))
                                            }}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                    <QuestionCircle
                                        size={25}
                                        onClick={() => {setShowHasRetirementSavings(true)}}
                                        style={{position: 'relative', top: '10px', right: '20px'}}
                                    />
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
                                            onChange={(e) => {setHasNonRetirementSavings(parseInt(e.target.value))}}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={1} md={1} lg={1}>
                                    <QuestionCircle
                                        size={25}
                                        onClick={() => {setShowHasNonRetirementSavings(true)}}
                                        style={{position: 'relative', top: '10px', right: '20px'}}
                                    />
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
                                        onClick={()=>router.push('/debt')}
                                    >
                                        Next
                                    </Button>{" "}
                                </Col>
                            </Row>
                        </>
                    </When>
                </Choose>
                <Row>
                    <Col
                        xs={{ span: 11 }}
                        md={{ span: 6, offset: 3 }}
                        lg={{ span: 6, offset: 3 }}
                        onClick={() => {setShowOwnABusiness(true)}}
                    >
                        <h5 className={styles.header}><u>What if I own a business?</u></h5>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={25}
                            onClick={() => {setShowOwnABusiness(true)}}
                            style={{position: 'relative', top: '12px', right: '35px'}}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col
                        xs={{ span: 11 }}
                        md={{ span: 6, offset: 3 }}
                        lg={{ span: 6, offset: 3 }}
                        onClick={() => {setShowBenefitPension(true)}}
                    >
                        <h5 className={styles.header}><u>What if I have a defined benefits pension?</u></h5>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={25}
                            onClick={() => {setShowBenefitPension(true)}}
                            style={{position: 'relative', top: '12px', right: '35px'}}
                        />
                    </Col>
                </Row>
            </Container>
            {/*title*/}
            <Modal show={showTitle} onHide={handleCloseTitle}>
                <Modal.Body>Say “Yes” if you have money in any of the following: bank accounts, investment accounts, pensions, TFSAs, RRSPs or equity in a corporation.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseTitle}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*own a business*/}
            <Modal show={showOwnABusiness} onHide={handleCloseOwnABusiness}>
                <Modal.Body>When a person dies, it’s likely that any businesses he/she owns will be sold to provide money for his/her family. Sometimes, it’s required if, for example, the person has business partners and there’s a contract in place that mandates the deceased person must be “bought out.” It can also be optional if, for example, the person’s family wants the money to cover expenses. Either way, it’s important to include the value of the business (including any assets or savings owned by the corporation) in your “non-retirement savings.”

                    Savings within a corporation often have large tax implications upon withdrawal so it would be wise not to assume that the full amount will be available to pay for personal or family expenses. Although the exact amount is dependent on your personal income tax rate at the time of withdrawal, for purposes of this assessment, please approximate the available amount by multiplying the savings by 80%.

                    For example, if you have $100,000 of savings in an account owned by a corporation, add $80,000 to your “non-retirement savings” ($100,000 × 80% = $80,000).

                    Don’t forget to add this to all other “non-retirement savings” that are in personal accounts. For example, if you have $100,000 of savings in an account owned by a corporation and $200,000 of “non-retirement savings” in a personal bank and/or investment account, then your total “non-retirement savings” would be $280,000 ($100,000 × 80% + $200,000 = $280,000).”</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseOwnABusiness}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*Benefit pension*/}
            <Modal show={showBenefitPension} onHide={handleCloseBenefitPension}>
                <Modal.Body>Defined benefit pension plans are tricky as the monthly payment you’ll receive (or the death benefit your family would receive) is linked to a number of unknown factors, including: your future income, future years of service, and future economic conditions, like interest rates and stock market returns.

                    However, most employers will send an annual statement indicating the estimated current value of all your future monthly payments. This will often be labelled as the “termination value” or “commuted value” of your pension statement.

                    If you have this number handy, please include it in your “retirement savings.” Don’t worry if you don’t; you can proceed without including your defined benefit pension plan.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseBenefitPension}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*has retirement savings*/}
            <Modal show={showHasRetirementSavings} onHide={handleCloseHasRetirementSavings}>
                <Modal.Body>Add up the money you have in both your personal retirement accounts (RRSPs, LIRAs, etc.) and your employer pension accounts. Do not include TFSA accounts as they belong in the 'non-retirement savings' category below.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseHasRetirementSavings}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*has non retirement savings*/}
            <Modal show={showHasNonRetirementSavings} onHide={handleCloseHasNonRetirementSavings}>
                <Modal.Body>Add up the money you have in all other accounts not included in your retirement savings estimate above. This could include bank accounts, TFSAs, other investment accounts, and if applicable, the value at which you can sell a business you own.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseHasNonRetirementSavings}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}
