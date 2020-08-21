import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./SavingsForm.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import Modal from "react-bootstrap/Modal";
import {QuestionCircle} from "react-bootstrap-icons";
import Card from 'react-bootstrap/Card';
export default function QuotesPage() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [showQuoteMessage, setShowQuoteMessage] = useState(false);
    const handleCloseQuoteMessage = () => setShowQuoteMessage(false);
    const policyPrice = ["$25.99", "18.99", "32.99", "54.99", "29.99"];

    // progress bar
    const now = 100;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;

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
                    <h2 className={styles.header}>Here are your quotes!</h2>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={30}
                        onClick={() => {setShowQuoteMessage(true)}}
                        style={{position: 'relative', top: '18px', right: '100%'}}
                    />
                </Col>
            </Row>
            {
            [
            'Canada Life',
            'Manulife',
            'TD Term Life',
            'Sunlife',
            'RBC Insurance',
            ].map((variant) => (
                <>
                <br/>
                <Row>
                    <Col xs={{span: 10, offset: 2}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                        <Card
                            bg={"white"}
                            text={'dark'}
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>Quote</Card.Header>
                            <Card.Body>
                                <Card.Title>{variant} Policy </Card.Title>
                                <Card.Text>
                                    <h5>{variant} is offering a policy of 35.99 per month for a term 20 policy</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </>

            ))};
            {/*quote message*/}
            <Modal show={showQuoteMessage} onHide={handleCloseQuoteMessage}>
                <Modal.Body>These are mock quotes and do not necessarily reflect your final quote.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseQuoteMessage}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
