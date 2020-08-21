import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./LifeInsuranceForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {QuestionCircle} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export default function rentOrOwnForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [lifeInsurance, setLifeInsurance] = useState('');
    //has life insurance
    const [lifeInsuranceEmployer, setLifeInsuranceEmployer] = useState('');
    const [lifeInsurancePersonal, setLifeInsurancePersonal] = useState('');
    const [showHasLifeInsurance, setShowHasLifeInsurance] = useState(false);
    const handleCloseHasLifeInsurance = () => setShowHasLifeInsurance(false);
    const [showExistingLifeInsurance, setShowExistingLifeInsurance] = useState(false);
    const handleCloseExistingLifeInsurance = () => setShowExistingLifeInsurance(false);

    // progress bar
    const now = 75;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;

    useEffect(() => {
        dispatch({ type: "LIFE_INSURANCE", lifeInsurance: lifeInsurance });
        if (lifeInsurance === false) {
            dispatch({ type: "LIFE_INSURANCE_EMPLOYER", lifeInsuranceEmployer: 0 });
            dispatch({ type: "LIFE_INSURANCE_PERSONAL", lifeInsurancePersonal: 0 });
        }
    }, [lifeInsurance]);

    useEffect(() => {
        dispatch({ type: "LIFE_INSURANCE_EMPLOYER", lifeInsuranceEmployer: lifeInsuranceEmployer });
    }, [lifeInsuranceEmployer]);

    useEffect(() => {
        dispatch({ type: "LIFE_INSURANCE_PERSONAL", lifeInsurancePersonal: lifeInsurancePersonal });
    }, [lifeInsurancePersonal]);

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
                    <h2 className={styles.header}>Do you have life insurance?</h2>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={30}
                        onClick={() => {setShowHasLifeInsurance(true)}}
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
                                setLifeInsurance(true);
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
                                setLifeInsurance(false);
                                router.push('/savings');
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
                    <When condition={lifeInsurance}>
                        <>
                            <br/>
                            <Row>
                                <Col
                                    xs={{ span: 4, offset: 1 }}
                                    md={{ span: 2, offset: 2 }}
                                    lg={{ span: 2, offset: 2 }}
                                >
                                    <h5 className={styles.h5}>Employer Life Insurance</h5>
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
                                            placeholder="Employer Life Insurance"
                                            aria-label="Employer Life Insurance"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {
                                                setLifeInsuranceEmployer(parseInt(e.target.value))
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
                                    <h5 className={styles.h5}>Personal Life Insurance</h5>
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
                                            placeholder="Personal Life Insurance"
                                            aria-label="Personal Life Insurance"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {setLifeInsurancePersonal(parseInt(e.target.value))}}
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
                                        onClick={()=> {router.push('/savings')}}
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
                        onClick={() => {setShowExistingLifeInsurance(true)}}
                    >
                        <h5 className={styles.header}><u>Why do you ask about my existing life insurance?</u></h5>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={25}
                            onClick={() => {setShowExistingLifeInsurance(true)}}
                            style={{position: 'relative', top: '12px', right: '35px'}}
                        />
                    </Col>
                </Row>
            </Container>
            {/*title*/}
            <Modal show={showHasLifeInsurance} onHide={handleCloseHasLifeInsurance}>
                <Modal.Body>Select “Yes” if you already have life insurance coverage in place, but select “No” if you don’t have existing life insurance or if your policies are expiring soon. This would include both policies you have through work or policies that you’ve purchased individually through a broker.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseHasLifeInsurance}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about existing insurance*/}
            <Modal show={showExistingLifeInsurance} onHide={handleCloseExistingLifeInsurance}>
                <Modal.Body>If you already have life insurance, we will reduce the coverage amount of your new policy by the amount of coverage already in place. This will make sure that the total amount of coverage between all your policies is in line with your needs.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseExistingLifeInsurance}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}
