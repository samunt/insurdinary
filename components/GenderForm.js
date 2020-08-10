import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./GenderForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";


export default function GenderForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [sex, setSex] = useState();
    const now = 40;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    useEffect(() => {
        dispatch({ type: "SEX", sex: sex });
    }, [sex]);

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
            </Container>
        </div>

)
}
