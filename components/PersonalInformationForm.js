import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./rentOrOwnForm.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { v4 as uuid } from 'uuid';

export default function PersonalInformationForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [nameFirst, setNameFirst] = useState('');
    const [nameLast, setNameLast] = useState('');
    const [nameEmail, setNameEmail] = useState('');
    const [namePhone, setNamePhone] = useState('');

    dispatch({ type: "ID", id: uuid() });

    useEffect(() => {
            dispatch({ type: "NAME_FIRST", nameFirst: nameFirst });
    }, [nameFirst]);

    useEffect(() => {
            dispatch({ type: "NAME_LAST", nameLast: nameLast });
    }, [nameLast]);

    useEffect(() => {
            dispatch({type: "NAME_EMAIL", nameEmail: nameEmail});
    }, [nameEmail]);

    useEffect(() => {
        dispatch({type: "NAME_PHONE", namePhone: namePhone});
    }, [namePhone]);

    // progress bar
    const now = 0;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;

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
            <h2 className={styles.header}>Please enter some information in case we get disconnected</h2>

                <Row>
                    <Col
                        xs={{ span: 4, offset: 1 }}
                        md={{ span: 2, offset: 2 }}
                        lg={{ span: 2, offset: 2 }}
                    >
                        <h5 className={styles.h5}>First name</h5>
                    </Col>
                    <Col
                        xs={{ span: 6 }}
                        md={{ span: 6 }}
                        lg={{ span: 6 }}
                    >
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="First name"
                                aria-label="First name"
                                aria-describedby="basic-addon2"
                                required
                                onChange={(e) => {
                                    setNameFirst(e.target.value)
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
                        <h5 className={styles.h5}>Last name</h5>
                    </Col>
                    <Col
                        xs={{ span: 6 }}
                        md={{ span: 6 }}
                        lg={{ span: 6 }}
                    >
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Last name"
                                aria-label="Last name"
                                aria-describedby="basic-addon2"
                                onChange={(e) => {
                                    setNameLast(e.target.value)
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
                        <h5 className={styles.h5}>Email</h5>
                    </Col>
                    <Col
                        xs={{ span: 6 }}
                        md={{ span: 6 }}
                        lg={{ span: 6 }}
                    >
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon2"
                                onChange={(e) => {
                                    setNameEmail(e.target.value)
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
                        <h5 className={styles.h5}>Phone</h5>
                    </Col>
                    <Col
                        xs={{ span: 6 }}
                        md={{ span: 6 }}
                        lg={{ span: 6 }}
                    >
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Phone"
                                aria-label="Phone"
                                aria-describedby="basic-addon2"
                                onChange={(e) => {
                                    setNamePhone(e.target.value)
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
                            onClick={()=> {router.push('/spouseForm')}}
                        >
                            Next
                        </Button>{" "}
                    </Col>
                </Row>
        </div>
    )
}
