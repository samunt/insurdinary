import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./GenderForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import {QuestionCircle} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";


export default function GenderForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [sex, setSex] = useState();
    const [showSex, setShowSex] = useState(false);
    const handleCloseSex = () => setShowSex(false);

    const now = 40;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;

    useEffect(() => {
        dispatch({ type: "SEX", sex: sex });
    }, [sex]);

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
            <h2 className={styles.header}>What is your sex?</h2>
            <Container>
                <Row>
                    <Col xs={6} md={{ span: 6 }} lg={{ span: 3, offset: 3 }}>
                        <Button
                            className="align-button"
                            onClick={() => {
                                setSex('Male');
                                router.push('/tobacco');
                            }}
                            style={{ width: "100%" }}
                            variant="outline-primary"
                            size="lg"
                        >
                            Male
                        </Button>{" "}
                    </Col>
                    <Col xs={6} md={{ span: 6 }} lg={{ span: 3 }}>
                        <Button
                            className="align-button"
                            onClick={ () => {
                                setSex('Female');
                                dispatch({ type: "SEX", sex: sex });
                                router.push('/tobacco');
                            }}
                            style={{ width: "100%" }}
                            variant="outline-primary"
                            size="lg"
                        >
                            Female
                        </Button>{" "}
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span: 8, offset: 2}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}
                         onClick={() => {setShowSex(true)}}>
                        <h5 className={styles.header}><u>Why do we ask about your sex?</u></h5>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={30}
                            onClick={() => {setShowSex(true)}}
                            style={{position: 'relative', top: '10px', right: '100%'}}
                        />
                    </Col>
                </Row>
            </Container>
            {/*ask about sex*/}
            <Modal show={showSex} onHide={handleCloseSex}>
                <Modal.Body>Men and women have different life expectancies, and therefore, insurers take gender into account when pricing life insurance policies.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseSex}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

)
}
